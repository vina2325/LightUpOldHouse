// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取 post 資料
import bodyParser from 'body-parser'
//檔案上傳套件
import multer from 'multer'
// Nodejs 預設的路徑套件
import path from 'path'
// Nodejs 預設的檔案套件
import fs from 'fs'
// Express 處理跨網域要求
import cors from 'cors'
// 登入狀態
import session from 'express-session'
// 將登入狀態存到資料庫
import connectMongo from 'connect-mongo'

import db from './db.js'

const MongoStore = connectMongo(session)
const app = express()

app.use(session({
  secret: 'oldhouse',
  // 將 session 存入 mongodb
  store: new MongoStore({
    // 使用 mongoose 的資料庫連接
    mongooseConnection: db.connection,
    // 設定存入的 collection
    collection: process.env.COLLECTION_SESSION
  }),
  // session 有效期間
  cookie: {
    // 1000 毫秒 = 一秒鐘
    // 1000 毫秒 * 60 = 一分鐘
    // 1000 毫秒 * 60 * 30 = 三十分鐘
    maxAge: 1000 * 60 * 30
  },
  // 是否保存未修改的 session
  saveUninitialized: false,
  // 是否每次重設過期時間
  rolling: true,
  resave: true
}))

app.use(cors({
  // origin 為請求來源網域, callback 為是否允許的回應
  origin (origin, callback) {
    // 允許任何來源網域的請求
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.ALLOW_CORS === 'true') {
        // 開發環境，允許
        callback(null, true)
      } else if (origin.includes('github')) {
        // 非開發環境，但是 是從github過來的，允許
        callback(null, true)
      } else {
        // 不是開發環境，也不是從github過來的，拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  // 允許跨域認證
  credentials: true
}))

// 讓 express 使用 body-parser，並把收到的資料轉 json
app.use(bodyParser.json())

// 檔案上傳設定
const upload=multer({
  // 檔案儲存
  storage:multer.diskStorage({
    // 儲存路徑
    // req 代表使用者丟進的資料
    // file 代表使用者上傳的檔案
    // cb表示回應
  destination(req,file,cb){
    // cb(錯誤訊息，沒有就是null,路徑)
    cb(null,'images/')
  },
  filename(req,file,cb){
    // 目前時間
    const now=Date.now()
    const ext =path.extname(file.originalname)
    // cb(錯誤訊息，沒有就是null,檔名)
    cb(null,now + ext)
  }
  }),
  limits:{
    // 限制檔案大小1MB
    fileSize:1024*1024
  },
  fileFilter(req,file,cb){
    if(file.mimetype.includes('image')){
      // 沒有錯誤，接受檔案
      cb(null,true)
    }else{
      // 觸發multer錯誤，不接受檔案
      // LIMIT_FORMAT是自訂的錯誤CODE，跟內建的錯誤CODE格式統一
      cb(new multer.MulterError('LIMIT_FORMAT'),false)
    }
  }
})

app.post('/provider', async (req, res) => {
  if (!req.headers['content-type'].includes('multipart/form-data')){
    res.status(400)
    res.send({ success: false, message: '資料格式錯誤' })
    console.log(req.headers['content-type'])
    return
  }
  upload.single('image')(req,res,async err =>{
    // 如果是上傳錯誤(參考文件寫法)
    if(err instanceof multer.MulterError){
      const msg =(err.code==='LIMIT_FILE_SIZE')?'檔案太大':'格式不符'
      res.status(400)
      res.send({success:false,msg})
    }else if (err){
      res.send(500)
      res.send({success:false,msg:'伺服器發生錯誤'})
    }else{
      // 成功寫入資料庫
      try{
        const result=await db.provider.create(
          {
          name: req.body.name,
          gender: req.body.gender,
          phone: req.body.phone,
          email: req.body.email,
          township:req.body.township,
          address:req.body.address,
          explanation:req.body.explanation,
          image:req.file.filename
          }
        )
        res.status(200)
        res.send({ success: true, message: '', id: result._id })
      }catch(error){
        console.log(error)
        const key = Object.keys(error.errors)[0]
        const message = error.errors[key].message
        res.status(400)
        res.send({ success: false, message})
      }
    }
  })
})
app.get('/image/:file', async (req, res) => {
  // fs.existsSync() 可以檢查檔案在不在，只能用絕對路徑
  // process.cwd() 可以知道目前運作的 js 檔在哪裡
  const path = process.cwd() + '/images/' + req.params.file
  const exists = fs.existsSync(path)
  if (exists) {
    res.status(200)
    // res.sendFile(路徑)
    // 路徑只能放絕對路徑，不然就是要設定 root 為 process.cwd()
    // res.sendFile(路徑, {root: process.cwd()})
    res.sendFile(path)
  } else {
    res.status(404)
    res.send({ success: false, message: '檔案不存在' })
  }
})
// 註冊
app.post('/register', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    const result = await db.user.create({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password
    })
    req.session.user = req.body.username
    res.status(200)
    res.send({ success: true, message: '', result })
  } catch (error) {
    res.status(400)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})
// 登入
app.post('/login', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    const result = await db.user.find(
      { 
        username: req.body.username,
        email:req.body.email,
        password: req.body.password
      }
      )
      if (result.length > 0) {
        req.session.user = result[0].username
        res.status(200)
        res.send({ success: true, message: '', result})
    } else {
      res.status(404)
      res.send({ success: false, message: '使用者不存在，請先註冊'})
    }
  } catch (error) {
    res.status(400)
    if (error.name === 'ValidationError') {
      // 資料格式錯誤
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

app.get('/checksession', async (req, res) => {
  res.status(200)
  res.send({ success: true, message: '', user: req.session.user })
})

app.get('/logout', async (req, res) => {
  // 刪除狀態
  req.session.destroy((error) => {
    // 刪除時出錯
    if (error) {
      res.status(500)
      res.send({ success: false, message: '伺服器發生錯誤' })
    } else {
      // 清除瀏覽器的認證資訊
      res.clearCookie()
      res.send({ success: true, message: '' })
    }
  })
})

app.get('/find', async (req, res) => {
  if (req.query.id === undefined) {
    res.status(400)
    res.send({ success: false, message: '欄位不正確' })
    return
  }
  try {
    // 使用 id 尋找資料，只取 name，去掉 id
    const result = await db.user.findById(req.query.id, 'name -_id')
    res.status(200)
    res.send({ success: false, message: '', name: result.name })
  } catch (error) {
    // 找不到東西
    res.status(404)
    res.send({ success: false, message: '找不到' })
  }
})
// app.post('/Empty_house', async (req, res) => {
  //   // 拒絕不是 json 的資料格式
  //   if (req.headers['content-type'] !== 'application/json') {
    //     // 回傳錯誤狀態碼
    //     res.status(400)
    //     res.send({ success: false, message: '格式不符' })
//     return
//   }

//   // 檢查資料內容
//   if (req.body.name === undefined ||
//     req.body.gender === undefined ||
//     req.body.phone === undefined ||
//     req.body.email === undefined||
//     req.body.township===undefined||
//     req.body.address===undefined||
//     req.body.explanation===undefined||
//     req.body.image===undefined
//   ) {
//     // 回傳錯誤狀態碼
//     res.status(400)
//     res.send({ success: false, message: '欄位不正確' })
//     return
//   }

//   // 新增資料
//   try {
//     const result = await db.user.create(
//       {
//         name: req.body.name,
//         gender: req.body.gender,
//         phone: req.body.phone,
//         email: req.body.email,
//         township:req.body.township,
//         address:req.body.address,
//         explanation:req.body.explanation,
//         image:req.file.filename
//       }
//     )
//     res.status(200)
//     res.send({ success: true, message: '', id: result._id })
//   } catch (error) {
//     const key = Object.keys(error.errors)[0]
//     const message = error.errors[key].message
//     console.log(error)
//     res.status(400)
//     res.send({ success: false, message})
//   }
// })


// app.patch('/update/:type', async (req, res) => {
//   // 拒絕不是 json 的資料格式
//   if (req.headers['content-type'] !== 'application/json') {
//   // 回傳錯誤狀態碼
//     res.status(400)
//     res.send({ success: false, message: '格式不符' })
//     return
//   }
//   if (req.params.type !== 'name' &&
//     req.params.type !== 'gender' &&
//     req.params.type !== 'phone' &&
//     req.params.type !== 'email' &&
//     req.params.type !== 'township' &&
//     req.params.type !== 'address' &&
//     req.params.type !== 'explanation' &&
//     req.params.type !== 'image' 
//   ) {
//     res.status(400)
//     res.send({ success: false, message: '更新欄位不符' })
//     return
//   }
//   try {
//     // findByIdAndUpdate 預設回來的 result 是更新前的資料
//     // 加上 new true 後可以回來新的資料
//     const result = await db.user.findByIdAndUpdate(req.body.id, { [req.params.type]: req.body.data }, { new: true })
//     console.log(result)
//     res.status(200)
//     res.send({ success: true, message: '' })
//   } catch (error) {
//     res.status(500)
//     res.send({ success: false, message: '發生錯誤' })
//   }
// })

// app.delete('/delete', async (req, res) => {
//   // 拒絕不是 json 的資料格式
//   if (req.headers['content-type'] !== 'application/json') {
//     // 回傳錯誤狀態碼
//     res.status(400)
//     res.send({ success: false, message: '格式不符' })
//     return
//   }

//   try {
//     const result = await db.user.findByIdAndDelete(req.body.id)
//     if (result === null) {
//       res.status(404)
//       res.send({ success: false, message: '找不到資料' })
//     } else {
//       res.status(200)
//       res.send({ success: true, message: '' })
//     }
//   } catch (error) {
//     res.status(500)
//     res.send({ success: false, message: '發生錯誤' })
//   }
// })

app.listen(5000, () => {
  console.log('網頁伺服器已啟動')
  console.log('http://localhost:5000')
})
