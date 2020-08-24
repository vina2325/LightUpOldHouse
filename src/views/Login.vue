<template>
  <div id="login">
    <!-- <div class="container-login"> -->
      <div id="back">
        <div class="backRight"></div>
        <div class="backLeft"></div>
      </div>
      <div id="slideBox">
      <div class="topLayer">
      <div class="right">
        <!-- 註冊 -->
        <div class="content">
          <h2>註冊</h2>
          <form method="post" onsubmit="return false;" >
            <div class="form-group">
              <input v-model="usernameSignup" type="text" placeholder="username" />
              <input v-model="emailSignup" placeholder="email" />
              <input v-model="passwordSignup" type="password" placeholder="password" />
            </div>
            <button id="goLeft" class="off">Login</button>
            <button type="submit" @click="submitRegister">Sign Up</button>
          </form>
        </div>
      </div>
        <div class="left">
          <!-- 登入 -->
        <div class="content">
          <h2>登入</h2>
          <form method="post" onsubmit="return false;">
            <div class="form-group">
              <input type="text" v-model="usernameLogin" placeholder="username"/>
              <input v-model="emailLogin" placeholder="email"/>
              <input type="password" v-model="passwordLogin" placeholder="password"/>
            </div>
          </form>
          <button id="goRight" class="off">Sign up</button>
          <button type="submit" @click="submitLogin">Login</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>

import $ from 'jquery'
export default {
  name: 'login',
  data () {
    return {
      usernameSignup: '',
      emailSignup: '',
      passwordSignup: '',
      usernameLogin: '',
      emailLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
    provider () {
      this.axios.get('http://localhost:5000/provider')
        .then(res => {
          console.log(res.data)
        })
    },
    submitLogin (event) {
      event.preventDefault()
      if (this.usernameLogin.length < 4 || this.usernameLogin.length > 20) {
        alert('使用者名稱不符')
        return
      } else if (this.passwordLogin.length < 4 || this.passwordLogin.length > 20) {
        alert('密碼格式不符')
        return
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { username: this.usernameLogin, email: this.emailLogin, password: this.passwordLogin })
        .then(response => {
          const data = response.data
          // 如果回來的資料 success 是 true
          if (data.success) {
            alert('登入成功')
            // 呼叫 vuex 的登入
            this.$store.commit('login', this.usernameLogin)
            this.$router.push('/provider')
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
          this.change()
        })
    },
    submitRegister (event) {
      event.preventDefault()

      if (this.usernameSignup.length < 4 || this.usernameSignup.length > 20) {
        alert('使用者名稱不符')
        return
      } else if (this.passwordSignup.length < 4 || this.passwordSignup.length > 20) {
        alert('密碼格式不符')
        return
      }

      this.axios.post(
        process.env.VUE_APP_APIURL + '/register',
        { username: this.usernameSignup, email: this.emailSignup, password: this.passwordSignup })
        .then(response => {
          const data = response.data
          // 如果回來的資料 success 是 true
          if (data.success) {
            alert('註冊成功')
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  },
  mounted () {
    $(document).ready(function () {
      $('#goLeft').on('click', function () {
        $('#slideBox').animate({
          marginLeft: '0'
        })
        $('.topLayer').animate({
          marginLeft: '100%'
        })
      })
      $('#goRight').on('click', function () {
        $('#slideBox').animate({
          marginLeft: '50%'
        })
        $('.topLayer').animate({
          marginLeft: '0'
        })
      })
    })
  }
}
</script>
<style>
@media(max-width:576px){
  .container-login{
    padding-top: 10rem;
    padding-bottom: 2rem;
    margin: auto;
    width: 80%;
  }
  #login .content h2 {
    text-align: center;
    margin-right: 1rem;
    font-size: 26px !important;
  }
    #login input {
    margin-left: 2.5rem;
    font-size: 8px !important;
    width: 60%;
  }
  #login button {
    display: block;
    margin: auto !important;
    width: 60% !important;
    margin-left: 2.5rem !important;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .container-login{
    padding-top: 10rem;
    padding-bottom: 5rem;
    margin: auto;
    width: 80%;
  }
}
@media(min-width:768px){
  .container-login{
    padding-top: 20rem;
    padding-bottom: 5rem;
    margin: auto;
    max-width: 80%;
  }
}

#login{
  width: 100vw !important;
  height: 100vh !important;
  background-image: url(../assets/changhua.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

#slideBox {
    width: 50%;
    max-height: 100%;
    height: 100%;
    overflow: hidden;
    margin-left: 50%;
    /* position: absolute; */
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
  }
  #login .topLayer {
    width: 200%;
    height: 100%;
    position: relative;
    left: 0;
    left: -100%;
  }
  #login .left {
    width: 50%;
    height: 100%;
    background: #f9f9f9;
    left: 0;
    position: absolute;
  }
  #login .right {
    width: 50%;
    height: 100%;
    background: #f9f9f9;
    right: 0;
    position: absolute;
  }
  #login .content {
    width: 250px;
    margin: 0 auto;
    top: 45%;
    position: absolute;
    left: 50%;
    margin-left: -125px;
  }
  #login .content h2 {
    color: rgb(93,155,132);
    font-weight: 300;
    font-size: 35px;
  }
  #login button {
    background: rgba(93,155,132,0.8);
    padding: 10px 16px;
    width: auto;
    font-weight: 600;
    text-transform:  uppercase;
    font-size: 14px;
    color: #fff;
    line-height: 16px;
    letter-spacing: 0.5px;
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    border: 0;
    outline: 0;
    margin: 15px 15px 15px 0;
    transition: all 0.25s;
  }
  #login button:hover {
    background: rgb(93,155,132);
    box-shadow: 0 4px 7px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
  }
  #login .off {
    background: none;
    color: rgb(93,155,132);
    box-shadow: none;
  }
  #login .right .off:hover {
    background: #eee;
    color: rgb(93,155,132);
    box-shadow: none;
  }
  #login .left .off:hover {
    box-shadow: none;
    color: rgb(93,155,132);
    background: #eee;
  }
  #login input {
    background: transparent;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #45494C;
    font-size: 14px;
    color: #959595;
    padding: 8px 0;
    margin-top: 20px;
  }
</style>
