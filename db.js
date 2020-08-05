import dotenv from 'dotenv'
// 資料庫套件
import mongoose from 'mongoose'
// 讓 mongoose 支援 unique 錯誤訊息
import beautifyUnique from 'mongoose-beautiful-unique-validation'
// 驗證
import validator from 'validator'

dotenv.config()
const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
// 連線到資料庫
mongoose.connect(process.env.DBURL)
// 使用插件
mongoose.plugin(beautifyUnique)

// 定義資料表的架構
const providerSchema = new Schema({
  // 欄位名稱
  name: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '姓名必填'],
    // 最小長度，自訂錯誤訊息
    minlength: [2, '使用者名稱最少 2 個字'],
    // 最大長度，自訂錯誤訊息
    maxlength: [20, '使用者名稱最多 20 個字']
  },
  gender: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '性別必填'],
  },
  phone: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '電話必填'],
    validate: {
      // 驗證 function
      validator (value) {
        // 使用驗證套件檢查是不是 email
        return validator.isMobilePhone(value, 'zh-TW')
      },
      // 錯誤訊息
      message: '電話格式錯誤'
    }
  },
  email: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '信箱必填'],
    // 自訂驗證規則
    validate: {
      // 驗證 function
      validator (value) {
        // 使用驗證套件檢查是不是 email
        return validator.isEmail(value)
      },
      // 錯誤訊息
      message: '信箱格式錯誤'
    }
  },
  township: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '鄉鎮必填'],
    },
  address: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '地址必填'],
    },
  explanation: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '說明必填'],
    },
  image: {
      // 資料類型是文字
        type: String,
        // 必填欄位，自訂錯誤訊息
        require: [true, '相片必填'],
        },
    
  // 不要紀錄資料修改次數
  versionKey: false
})

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email:{
      type: String,
      validate: {
        // 驗證 function
        validator (value) {
          // 使用驗證套件檢查是不是 email
          return validator.isEmail(value)
        },
        // 錯誤訊息
        message: '信箱格式錯誤'
      }
    },
    password: {
      type: String
    }
  }
)

// 資料表變數 = mongoose.model(資料表名稱, 對應的 Schema)
const provider = mongoose.model(process.env.COLLECTION_PROVIDER, providerSchema)
const user = mongoose.model(process.env.COLLECTION_USER, userSchema)
const connection = mongoose.connection

export default {
  provider,
  user,
  connection
}
