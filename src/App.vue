<template>
  <div id="app">
    <!-- navbar -->
    <div id="top">
    <div class="top-color"></div>
    <mdb-navbar expand="medium" dark class="navbar_top" hamburger animated animation="1" togglerSize="lg"  togglerIconClass="black-text">
      <mdb-navbar-brand to="/">
        <img src="./assets/logo_white.png" alt="LOGO" to="/">
      </mdb-navbar-brand>
      <mdb-navbar-toggler class="navbar-toggler text-black">
        <mdb-navbar-nav center>
          <mdb-nav-item to="/about" active class="nav-item">關於我們</mdb-nav-item>
          <mdb-nav-item to="/location">老屋據點</mdb-nav-item>
          <mdb-nav-item to="/story">老屋新生</mdb-nav-item>
          <mdb-nav-item to="/find">老屋媒合</mdb-nav-item>
          <mdb-nav-item to="/login">老屋登錄</mdb-nav-item>
          <mdb-nav-item to="/link">友善連結</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    </div>
    <keep-alive>
      <vue-page-transition>
        <router-view>
        </router-view>
      </vue-page-transition>
    </keep-alive>
    <div class="footer">
      <mdb-footer class="page-footer font-small pt-4 mt-4">
        <mdb-container class="text-left">
        <mdb-row class="text-center">
        <mdb-col md="6" class="d-flex justify-content-center flex-column">
          <h4 class="text-uppercase mb-4 mt-3">彰化老屋點燈‧媒合平台</h4>
          <p style="letter-spacing: 2.7px; color: rgb(255, 209, 149) !important;">
            Changhua old house maching
          </p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="4">
          <h4 class="text-uppercase mb-4 mt-3">Links</h4>
          <ul class="list-unstyled">
            <li>
              <h6 class="title">
                <router-link to="/about">關於我們</router-link>
              </h6>
            </li>
            <li>
              <h6 class="title">
                <router-link to="/location">老屋據點</router-link>
              </h6>
            </li>
            <li>
              <h6 class="title">
                <router-link to="/story">老屋新生</router-link>
              </h6>
            </li>
            <li>
              <h6 class="title">
                <router-link to="/find">老屋媒合</router-link>
              </h6>
            </li>
            <li>
              <h6 class="title">
                  <router-link to="/login">老屋登錄</router-link>
              </h6>
            </li>
            <li>
              <h6 class="title">
                <router-link to="/link">友善連結</router-link>
              </h6>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <hr />
    <div class="text-center">
      <div class="mb-5 flex-center">
        <a><i class="fas fa-user fa-lg white-text  ml-md-4 mr-md-4 mr-sm-4"> </i></a>
        <a><i class="fas fa-handshake fa-lg white-text ml-md-4 mr-md-4 mr-sm-4"> </i></a>
        <a><i class="fas fa-home fa-lg white-text ml-md-4 mr-md-4 mr-sm-4"> </i></a>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright：VinaTsai
        <br>
        資料來源：<a href="https://choldhouse.bocach.gov.tw/cht/index.php" target="blank" style="color:rgba(255,255,255,0.6) !important;font-size: 0.9rem !important;">彰化縣文化局產業進駐老屋媒合平台</a>
      </mdb-container>
    </div>
  </mdb-footer>
    </div>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue'
export default {
  name: 'app',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  }

}

</script>
<style>
#app{
  width: 100vw;
}
#top{
  z-index: 100;
  position: absolute;
  width: 100vw;
  background: rgba(65, 53, 77, 0.7);
}
.top-color{
  width: 100vw;
  height: 20px;
}
.navbar-toggler{
  margin-bottom: 2rem;
}
#top .navbar_top img{
  margin: 1rem;
  margin-bottom: 2rem;

}
.animated-icon1 span{
  background:rgb(255, 209, 149) !important;
}
#top nav ul li a{
  color: rgb(255, 209, 149) !important;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding: 2;
}

</style>
