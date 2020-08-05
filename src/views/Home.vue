<template>
<div id="home">
<section id="section01">
    <div id="about_carouse" class="carousel slide carousel-fade h-100" data-ride="carousel" data-interval="5000" data-step="2" data-intro="關於我們" data-position="top">
    <!-- 下一頁按鈕 -->
    <div id="next_page" class="animated bounce" style="animation-duration: 3s;">
      <div class="btn01">
        <a href="#section02"><font-awesome-icon :icon="['fas', 'angle-double-down']" size="3x"/></a>
      </div>
    </div>
            <ol class="carousel-indicators">
                <li data-target="#about_carouse" data-slide-to="0" class="active"></li>
                <li data-target="#about_carouse" data-slide-to="1"></li>
                <li data-target="#about_carouse" data-slide-to="2"></li>
                <li data-target="#about_carouse" data-slide-to="3"></li>
                <li data-target="#about_carouse" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner h-100">
                <div class="carousel-item active">
                    <img src="../assets/01.jpg" class="img-scale d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                      <h1 class="titleh1">About///</h1>
                      <br>
                      <h4 class="titleh401">為老屋點燈， 催動下一個記憶靜靜開始。</h4>
                      <button></button>
                      <router-link class="titlebtn" to="about">
                        More
                        <mdb-icon  icon="angle-double-right" class="pl-1" />
                      </router-link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/02.jpg" class="img-scale d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                      <h1 class="titleh1">About///</h1>
                      <br>
                      <h4 class="titleh401">重 修 舊 好 - 古 厝 歡 欣。</h4>
                      <router-link class="titlebtn" to="about">
                        More
                        <mdb-icon  icon="angle-double-right" class="pl-1" />
                      </router-link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/03.jpg" class="img-scale d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                      <h1 class="titleh1">About///</h1>
                      <br>
                      <h4 class="titleh401">老屋再生，與一個地方的共生。</h4>
                      <router-link class="titlebtn" to="about">
                        More
                        <mdb-icon  icon="angle-double-right" class="pl-1" />
                      </router-link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/04.jpg" class="img-scale d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                      <h1 class="titleh1">About///</h1>
                      <br>
                      <h4 class="titleh401">老屋點燈。 點的不只是燈，點上了是屋的靈魂。</h4>
                      <router-link class="titlebtn" to="about">
                        More
                        <mdb-icon  icon="angle-double-right" class="pl-1" />
                      </router-link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/05.jpg" class="img-scale d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                      <h1 class="titleh1">About///</h1>
                      <br>
                      <h4 class="titleh401">重 修 舊 好 - 老 屋 展 新 力。</h4>
                      <router-link class="titlebtn" to="about">
                        More
                        <mdb-icon  icon="angle-double-right" class="pl-1" />
                      </router-link>
                    </div>
                </div>
            </div>
        </div>
</section>
<section id="section02">
  <div id="map" class="row justify-content-center align-items-center">
    <div class="col-md-8 col-12">
      <svg xmlns="http://www.w3.org/2000/svg" id="圖層_1" enable-background="new 0 0 640 480" viewBox="0 0 640 480" x="0px" y="0px" xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.0">
        <path id="Shengang-Township" @mouseover="getInfo('Shengang-Township')" fill="#ffffff" pointer-events="initial" active stroke="#000000" d="M 331.2 41.3 l 6.4 -8.7 l 1.6 -0.3 l 4 -5.5 l 2.5 -2.2 l 3.8 -7.3 l 0.9 -2.5 l 2.3 -3.4 l 1.3 0.3 l 0.5 -1.7 l 18.9 7 l 2.7 3.2 l 1.1 1.3 l 3.1 7.3 l 3.2 8.8 l 3.3 8.3 l 2.2 4.3 l -3.8 1.7 l -0.4 0.3 l -0.8 1 l -4.7 0 l -1.3 6.9 l 0.6 0.5 l -6 0.5 l -2.4 0.9 l 0 1 l 1.3 1.6 l 3.9 0.5 l -0.3 3.4 l -1.3 4.5 l -1.4 6.9 l -2.1 3.1 l -2.4 -1.4 l -4.5 -1.8 l -4.8 -2.3 l -2.6 -1 l -1.1 -3.8 l -2.2 -1.2 l -2 2.4 l -5.5 -1.3 l -2 -1.5 l -0.5 1.8 l -6 -1.8 l -0.1 -1.1 l -2.1 -2.7 l -0.5 -2.4 l -6.8 1.7 l -3.4 -0.6 l -0.2 1.7 l -3.8 -0.8 l -1.1 -1.1 l -11.4 -9.4 l 0.9 -1.2 l -1.4 -1.3 l 0.6 -0.5 l 19.5 -0.1 l 2.2 -1 l 3 -2 l 3.7 -4.8 l -5.4 -2.8 L 331.2 41.3 Z"/>
        <b-tooltip target="Shengang-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>伸港鄉</h1>
            <h3>Shengang</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Xianxi-Township" @mouseover="getInfo('Xianxi-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 349.4 104 l -0.1 2.1 l -1.9 1.1 l -0.2 1.7 l -2.2 -0.1 l -2.8 6.4 l -1.7 -1.8 l -4 -1.7 l -2.3 -1.9 l -3 -0.3 l 3.6 -0.9 l -2.1 -4.8 l -1.8 -3.1 l -3.9 -2.8 l -1.8 -0.6 l -0.6 -3 l -4.2 -5 l -8.9 0 l -2.1 1.4 l -5.3 1.3 l -3.1 -1 l -3.7 1.1 L 282 92.3 l 4.2 -10.5 l 2.7 -6.5 l 2.9 -3.5 l 9.2 -11.1 l 2.8 -3.4 l 3 -3.3 l 1.4 1.3 l -0.9 1.2 l 11.4 9.4 l 1.1 1.1 l 3.8 0.8 l 0.2 -1.7 l 3.4 0.6 l 6.8 -1.7 l 0.5 2.4 l 2.1 2.7 l 0.1 1.1 l 6 1.8 l 0.5 -1.8 l 2 1.5 l 5.5 1.3 l -0.3 4.7 l 0.6 6.2 l 0.7 2.1 l 0.2 1.6 l 3.2 4.6 l -1.9 4.5 l -1.3 0.1 L 349.4 104 Z"/>
        <b-tooltip target="Xianxi-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>線西鄉</h1>
            <h3>Xianxi</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Hemei-Township" @mouseover="getInfo('Hemei-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 400.3 87.4 l 3.3 3 l 6.4 1.8 l 3.1 5.1 l 1.9 3.1 l 4.5 3 l -1.4 3.3 l -0.3 2.4 l -2.1 -0.8 l -1.3 5.8 l -1.5 3.1 l -1.6 0.5 l -0.6 2.5 l 0.8 4.3 l -0.4 0.3 l -4.7 2.3 l -1.9 -0.4 l 0.1 1.7 l -1.2 -0.1 l -1.2 1.1 l -3.6 0.1 l -3.9 0.4 l -1.2 4.3 l -1.5 1.6 l -1.1 0.9 l -3.8 0.2 l -2.9 -2.8 l -2 0 l -0.5 0.8 l 2.1 1.8 l 2.5 4.9 l -0.8 -0.8 l -2.8 -1 l -4.2 -0.4 l -0.4 3.6 l -1.3 0.7 l -2.2 -0.9 l -4.5 0.1 l -1.1 0.4 l -0.8 2 l -2.4 -1.4 l -4.5 0.4 l -0.3 0 l -2.7 -1.9 l -1.1 -1.6 l -1.2 -1.6 l 1.4 -4.8 l -0.6 -3.4 l 1.7 -4.2 l -2.4 -2 l -1.4 -0.2 l -1 -3.7 l -1.3 -1.1 l -2.2 -0.1 l -1.6 0.4 l -1.8 -1.1 l -1.6 -2.9 l 1.7 -0.9 l 0.1 -1.7 l -1.3 -0.6 l 1.4 -2.3 l -0.5 -1.9 l 0.2 -1.7 l 1.9 -1.1 l 0.1 -2.1 l 2.5 -6.1 l 1.3 -0.1 l 1.9 -4.5 l -3.2 -4.6 l -0.2 -1.6 l -0.7 -2.1 l -0.6 -6.2 l 0.3 -4.7 l 2 -2.4 l 2.2 1.2 l 1.1 3.8 l 2.6 1 l 4.8 2.3 l 4.5 1.8 l 2.4 1.4 l 2.1 -3.1 l 1.4 -6.9 l 1.3 -4.5 l 0.3 -3.4 l -3.9 -0.5 l -1.3 -1.6 l 0 -1 l 2.4 -0.9 l 6 -0.5 l -0.6 -0.5 l 1.3 -6.9 l 4.7 0 l 0.8 -1 l 0.4 -0.3 l 3.8 -1.7 l 1.1 3.3 l 1.8 3.4 l 2 3.4 l 1.4 4.3 l -1.1 5.9 l -1.6 2.5 l 0.4 1.7 l 6.3 9.7 L 400.3 87.4 Z" />
        <b-tooltip target="Hemei-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>和美鎮</h1>
            <h3>Hemei</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Zhanghua-City" @mouseover="getInfo('Zhanghua-City')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 436.3 108.1 l 6.8 1.6 l 4.1 -1.4 l 6.8 0.1 l 2.3 2.2 l 3.5 1.6 l 6 1.3 l 5.2 -0.3 l 2.8 2.5 l 5.5 0.2 l 0.9 0.7 l 3.6 -0.5 l 0.1 3.8 l 0.8 1.2 l 0.2 3.1 l 1.5 6 l 0.3 6.4 l 0.7 1.5 l 2.9 8.8 l 1 2.3 l 2.4 0.4 l 2.1 1.3 l 1.4 2.8 l -0.5 2.9 l 0.6 -0.1 l 0.3 10.5 l -2.1 4.2 l -0.1 1.5 l 1.1 4.1 l 1.3 1.7 l -1.9 0.8 l -3.1 0 l -4.3 2.7 l -3.7 0.4 l -5.7 -0.7 l -4.9 1.2 l 0 0.8 l -4.5 2.2 l -1.8 0.1 l -3.7 2.1 l -0.9 -3.9 l -3.3 -2.8 l -1 -0.1 l -1 -2.2 l 1.2 -1.3 l -2.7 -2.8 l -0.4 -1.8 l -1.5 -0.5 l -0.9 -0.2 l -1.2 0.1 l -4 -3.1 l -0.9 1.2 l -3.1 -0.8 l -1.1 -2.3 l -1.9 0 l -1.5 1.2 l -1.8 -0.3 l -3.6 2.1 l -0.7 1.7 l -2.1 0.6 l -3.2 2.4 l -1.9 0 l -0.5 -1 l -1.2 -0.9 l -2.3 0.1 l -2.1 -3.5 l -1.5 -0.8 l -2.9 0.8 l -9.6 -0.5 l -2.2 -0.1 l -1.1 2.9 l -3.9 -0.1 l -7 -0.7 l 0.3 -0.9 l -2.5 -1.1 l -1.5 -2 l -1.7 4.5 l -2.9 -0.6 l -3.7 -2.7 l -4.1 4.2 l -1.1 -1.7 l 1.2 -1.1 l -0.3 -1.7 l -1.8 -1.4 l -1 -3 l 0.3 -1.9 l 2.4 0 l 0 -3.6 l 0 -3.2 l -2.8 -1.9 l -1.1 -2.6 l 0.9 -1.7 l -4 -4 l 0.8 -2 l 1.1 -0.4 l 4.5 -0.1 l 2.2 0.9 l 1.3 -0.7 l 0.4 -3.6 l 4.2 0.4 l 2.8 1 l 0.8 0.8 l -2.5 -4.9 l -2.1 -1.8 l 0.5 -0.8 l 2 0 l 2.9 2.8 l 3.8 -0.2 l 1.1 -0.9 l 1.5 -1.6 l 1.2 -4.3 l 3.9 -0.4 l 3.6 -0.1 l 1.2 -1.1 l 1.2 0.1 l -0.1 -1.7 l 1.9 0.4 l 4.7 -2.3 l 0.4 -0.3 l -0.8 -4.3 l 0.6 -2.5 l 1.6 -0.5 l 1.5 -3.1 l 1.3 -5.8 l 2.1 0.8 l 0.3 -2.4 l 1.4 -3.3 l 4.2 1.2 l 2.6 0.2 l 0 1 l 1.9 -0.8 L 436.3 108.1 Z" />
        <b-tooltip target="Zhanghua-City" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>彰化市</h1>
            <h3>Zhanghua</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Lugang-Township" @mouseover="getInfo('Lugang-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 298 172.5 l -0.7 -1.4 l -1.1 -2.3 l -0.7 -0.7 l -3.8 0.8 l -3 2.3 l -2.8 -1.6 l 0 -2 l -1.9 -0.1 l -2.9 -1.9 l -3.7 -1.8 l -3.8 2 l -2.2 0.7 l -9.7 -0.2 l -13 0.2 l -14.6 0.9 l -9.7 1 l -16.5 2.4 l -0.3 -1.9 l -2.5 -4.7 l 2.4 -0.5 l 3.2 -7.4 l 1.3 -2 l 3.7 -3.2 l 4.8 -1.2 l 4.4 -2 l 2 -2.2 l 2.2 -5.1 l 2.3 -0.7 l 5.4 -0.2 l 0.8 -0.4 l 4 -1.1 l 7.1 -3.9 l 1.8 -1.3 l 0.6 -3.3 l 48.4 1 l -1.3 -2.7 l 2.3 -0.3 l 2.2 -1.4 l -0.1 -0.8 l -3 0.2 l -1.3 -1.3 l 3.8 -17.1 l -0.7 -0.7 l 2.2 -8.4 l 0.2 -3 L 284.8 95 l -4.4 18.1 l -1.4 2.1 l -3.8 -0.1 l -5.2 0.6 l -3.7 -1.8 l -5.4 -2.1 l -2.7 3.1 l -5.1 6.7 l 2.1 0.4 l -6.9 0.4 l -2 2.1 l 11.2 -15.7 l 9.9 -14.3 l 1.7 -2.1 l 12.8 -0.1 l 15.1 -0.1 l 3.7 -1.1 l 3.1 1 l 5.3 -1.3 l 2.1 -1.4 l 8.9 0 l 4.2 5 l 0.6 3 l 1.8 0.6 l 3.9 2.8 l 1.8 3.1 l 2.1 4.8 l -3.6 0.9 l 3 0.3 l 2.3 1.9 l 4 1.7 l 1.7 1.8 l 2.8 -6.4 l 2.2 0.1 l 0.5 1.9 l -1.4 2.3 l 1.3 0.6 l -0.1 1.7 l -1.7 0.9 l 1.6 2.9 l 1.8 1.1 l 1.6 -0.4 l 2.2 0.1 l 1.3 1.1 l 1 3.7 l 1.4 0.2 l 2.4 2 l -1.7 4.2 l 0.6 3.4 l -1.4 4.8 l 1.2 1.6 l 1.1 1.6 l 2.7 1.9 l -1.9 3.3 l -1.1 -0.4 l -7.6 2.7 l -2.9 0 l 0.1 1.5 l 2.1 2.9 l 0.1 11.3 l -1 0.6 l -2.3 0.8 l 1.3 3.4 l 0.6 0.8 l -1.3 7.7 l -1.2 -0.6 l -6.1 -1.4 l -2.7 -1.7 l -2 -2.3 l -1.9 0.5 l -2.3 -1 l -10.5 -0.1 l -4.2 -1 l -2.4 -0.5 l -4.8 -0.2 l -1.4 0.8 l -1.8 -0.6 l 1.2 5.1 l 1.9 1.2 l -1.6 2.3 l 3.6 1.8 l 0.4 0.8 l 1.1 1.5 l 0 2.5 l -1.6 -0.2 l -1.1 -2.1 l -1.8 -0.7 l -0.6 -1.7 l -2.2 -1.8 l -3.4 -1.9 L 298 172.5 Z" />
        <b-tooltip target="Lugang-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>鹿港鎮</h1>
            <h3>Lugang</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Fuxing-Township" @mouseover="getInfo('Fuxing-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 348.9 200.9 l 1.9 2.2 l 3.4 2.2 l 3.7 2.1 l 6.8 6 l -1.3 2.7 l -0.3 1.5 l 1.6 -0.7 l 1.7 1.6 l -3.9 1.5 l 1.1 1.3 l 1.3 3.3 l -1.5 -0.4 L 362 222 l -1.7 -1.3 l -6.4 -2.3 l -5.9 -0.6 l -7 -1.3 l -3.7 0 l -5.3 0 l -0.4 0 l -1.5 -0.5 l -5.3 -3.6 l -7.6 -5 l -1.6 -2.6 l -1.6 -0.6 l -1.4 0.6 l -1.1 -1.5 l -1.5 -2 l -0.6 2.9 l -2.5 0.3 l -4 1.1 l -0.3 3.9 l -6.6 5.2 l -1.7 3.7 l 3.1 2.9 l -0.9 4.4 l -2.8 -0.2 l -0.6 5.2 l -2 -0.2 l -0.3 2 l 2 0.2 l -0.6 6 l -6.8 -3.4 l -5.1 -1.1 l -1.6 -0.6 l 0.8 1.6 l -2.4 -2.2 l -1.4 -0.4 l -2.6 -1 l -1.1 -2.8 l -3.4 -1.3 l -2.7 0.5 l -3.7 -1.7 l -1.5 -1.4 l -4.4 -2.3 l 0.7 -3.1 l -2.2 -0.4 l -0.1 -2.7 l -0.7 -0.5 l 0 -2.7 l -2 -1.3 l 0.1 -2.9 l -3.6 -5.9 l -0.4 -1.2 l -2.4 -1.6 l -1.9 -2.4 l -3.5 -8.8 l -2.8 -0.8 l -11.1 -3.6 l -11.6 -4.1 l -7.4 -2.9 l 0.6 -6.6 l 16.5 -2.4 l 9.7 -1 l 14.6 -0.9 l 13 -0.2 l 9.7 0.2 l 2.2 -0.7 l 3.8 -2 l 3.7 1.8 l 2.9 1.9 l 1.9 0.1 l 0 2 l 2.8 1.6 l 3 -2.3 l 3.8 -0.8 l 0.7 0.7 l 1.1 2.3 l 0.7 1.4 l 3.9 5 l 3.4 1.9 l 2.2 1.8 l 0.6 1.7 l 1.8 0.7 l 1.1 2.1 l 1.6 0.2 l 0 -2.5 l -1.1 -1.5 l -0.4 -0.8 l -3.6 -1.8 l 1.6 -2.3 l -1.9 -1.2 l -1.2 -5.1 l 1.8 0.6 l 1.4 -0.8 l 4.8 0.2 l 2.4 0.5 l 4.2 1 l 10.5 0.1 l 2.3 1 l 1.9 -0.5 l 2 2.3 l 2.7 1.7 l 6.1 1.4 l 1.2 0.6 l 1.3 -7.7 l -0.6 -0.8 l 1.9 -0.1 l 0.4 5.5 l 1.5 -0.1 l 0.1 2.8 l 5.5 -0.4 l 0.1 1 l 0.1 2.1 l -5.5 0.3 l 0.1 2 l 1.3 0.1 l 0.3 1 l -2.7 1.2 l 2 4.9 l 2 1.2 l 1.5 2.6 l 3.4 2.7 l 0.1 1.9 l -8.1 0.3 L 348.9 200.9 Z" />
        <b-tooltip target="Fuxing-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>福興鄉</h1>
            <h3>Fuxing</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Puyan-Township" @mouseover="getInfo('Puyan-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 342.8 250.1 l -1.9 -1.4 l -3.8 0.3 l -1.5 0.7 l -1.9 3.4 l 0.6 0.5 l -0.7 11.6 l -0.5 0.9 l -1.9 2.5 l -1.3 1.6 l -1.7 0.4 l -1 1.4 l -3.3 1.4 l -0.2 0.7 l -2.2 -0.9 l -2.4 -3.5 l -3.9 -0.9 l 0.8 6.4 l -2.4 1.8 l -3.8 -7.5 l -2.2 -2.5 l -2 -1.1 l -5.8 -1.3 l -1.9 -0.7 l -1.4 -1 l 0 -1.3 l -1.9 -2.2 l -2.1 -1.3 l -1.8 -2.1 l 0.6 -2.6 l -2.1 -1.8 l -0.5 -2.5 l -2.5 -3 l -2.9 -4.3 l -1.7 -3.7 l -2.1 -3.2 l -0.8 -1.6 l 1.6 0.6 l 5.1 1.1 l 6.8 3.4 l 0.6 -6 l -2 -0.2 l 0.3 -2 l 2 0.2 l 0.6 -5.2 l 2.8 0.2 l 0.9 -4.4 l -3.1 -2.9 l 1.7 -3.7 l 6.6 -5.2 l 0.3 -3.9 l 4 -1.1 l 2.5 -0.3 l 0.6 -2.9 l 1.5 2 l 1.1 1.5 l 1.4 -0.6 l 1.6 0.6 l 1.6 2.6 l 7.6 5 l 5.3 3.6 l 1.5 0.5 l 0.4 0 l 5.3 0 l 3.7 0 l 7 1.3 l 5.9 0.6 l 6.4 2.3 l 1.7 1.3 l 1.3 2.3 l 1.3 5.1 l 3 4.9 l 4.8 4.6 l -2.1 1.1 l 4.4 0.9 l 1.7 1.6 l -0.4 1.4 l -1.7 0.8 l 2.4 3.7 l 1.2 1.6 l 0.8 1.3 l 2.3 1.5 l 0.5 2.7 l -4 0.7 l -2.3 2.1 l -1.7 1.8 l -4.2 0 l -0.5 -1.2 l -2.9 0.3 l 0.2 2 l -4.3 -0.3 l -4 -0.2 l -4.1 -0.4 l 0 -1.3 l -1.9 -3.4 l -4 -0.1 l -0.7 -2.1 l 0 -1 l -1.8 0.2 l -2.2 -2.8 L 342.8 250.1 Z" />
        <b-tooltip target="Puyan-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>埔鹽鄉</h1>
            <h3>Puyang</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Xiushui-Township" @mouseover="getInfo('Xiushui-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 394.9 222.1 l 0.9 1.1 l -0.1 2.2 l 0.9 1.1 l -0.4 2.9 l -3 0.1 l 0 1.7 l -2.7 0.8 l 0.3 3 l -3.4 0.2 l -1.5 1.1 l 0.4 1.8 l -3.7 1 l -0.8 -1.6 l -3.4 0.9 l -0.9 2 l -2.6 0.7 l -4.4 -0.9 l 2.1 -1.1 l -4.8 -4.6 l -3 -4.9 l -1.3 -5.1 l 1.5 0.4 l -1.3 -3.3 l -1.1 -1.3 l 3.9 -1.5 l -1.7 -1.6 l -1.6 0.7 l 0.3 -1.5 l 1.3 -2.7 l -6.8 -6 l -3.7 -2.1 l -3.4 -2.2 l -1.9 -2.2 l 3.4 -1.4 l 8.1 -0.3 l -0.1 -1.9 l -3.4 -2.7 l -1.5 -2.6 l -2 -1.2 l -2 -4.9 l 2.7 -1.2 l -0.3 -1 l -1.3 -0.1 l -0.1 -2 l 5.5 -0.3 l -0.1 -2.1 l -0.1 -1 l -5.5 0.4 l -0.1 -2.8 l -1.5 0.1 l -0.4 -5.5 l -1.9 0.1 l -1.3 -3.4 l 2.3 -0.8 l 1 -0.6 l -0.1 -11.3 l -2.1 -2.9 L 348 150 l 2.9 0 l 7.6 -2.7 l 1.1 0.4 l 1.9 -3.3 l 0.3 0 l 4.5 -0.4 l 2.4 1.4 l 4 4 l -0.9 1.7 l 1.1 2.6 l 2.8 1.9 l 0 3.2 l 0 3.6 l -2.4 0 l -0.3 1.9 l 1 3 l 1.8 1.4 l 0.3 1.7 l -1.2 1.1 l 1.1 1.7 l 4.1 -4.2 l 3.7 2.7 l 2.9 0.6 l 2.7 6.2 l 0.7 2.5 l 0 6.5 l 0 2.8 l 1 0.5 l -0.7 2.2 l 2.9 3.3 l 0.2 3.3 l 1.3 1.7 l 0.5 2.5 l -1.2 0.7 l 1.5 3.2 l 0.2 2.1 l 2.1 -0.5 l 0.8 1.9 l 2.4 -0.7 l 1.2 2.2 l 2 3.6 l 0.3 1.3 l -6.5 0.8 l 0.7 2.5 l -1 2.3 L 394.9 222.1 Z" />
        <b-tooltip target="Xiushui-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>秀水鄉</h1>
            <h3>Xiushui</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Huatan-Township" @mouseover="getInfo('Huatan-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 412.2 218 l -4.4 -1.6 l -0.7 -0.7 l -2.7 0.8 l -2 -3.6 l -1.2 -2.2 l -2.4 0.7 l -0.8 -1.9 l -2.1 0.5 l -0.2 -2.1 l -1.5 -3.2 l 1.2 -0.7 l -0.5 -2.5 l -1.3 -1.7 l -0.2 -3.3 l -2.9 -3.3 l 0.7 -2.2 l -1 -0.5 l 0 -2.8 l 0 -6.5 l -0.7 -2.5 l -2.7 -6.2 l 1.7 -4.5 l 1.5 2 l 2.5 1.1 l -0.3 0.9 l 7 0.7 l 3.9 0.1 l 1.1 -2.9 l 2.2 0.1 l 9.6 0.5 l 2.9 -0.8 l 1.5 0.8 l 2.1 3.5 l 2.3 -0.1 l 1.2 0.9 l 0.5 1 l 1.9 0 l 3.2 -2.4 l 2.1 -0.6 l 0.7 -1.7 l 3.6 -2.1 l 1.8 0.3 l 1.5 -1.2 l 1.9 0 l 1.1 2.3 l 3.1 0.8 l 0.9 -1.2 l 4 3.1 l 1.2 -0.1 l 0.9 0.2 l 1.5 0.5 l 0.4 1.8 l 2.7 2.8 l -1.2 1.3 l 1 2.2 l 1 0.1 l 3.3 2.8 l 0.9 3.9 l -0.7 3.2 l 2.7 1.8 l 0.8 5 l -0.5 0.9 l 0.3 4 l 1.8 1.5 l 0.4 2.4 l 2.5 4.1 l 0.7 2.2 l 1.4 0.8 l 1.2 2.7 l 2 2.5 l -1.7 -1.7 l -1.4 1.3 l -3.6 1.1 l -1.7 -0.1 l -3.3 -1.8 l -2 1.2 l -1.4 -0.7 l -1.6 2 l -2.3 0.1 l -1.4 -0.9 l -3.7 3.4 l -2.6 1.1 l -3.5 -0.1 l -1 0.9 l -8 1.1 l -9.4 1.3 l -3.3 0.2 l -1.1 -4.4 l -1.3 -1.6 l -4.1 -0.6 l -2.3 0.2 l -2.4 -2 L 412.2 218 Z" />
        <b-tooltip target="Huatan-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>花壇鄉</h1>
            <h3>Huatan</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Fenyuan-Township" @mouseover="getInfo('Fenyuan-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 527.8 221.3 l -4.9 -0.1 l -1.3 0.4 l -3.3 -1.1 l -4.9 1.1 l -1.2 2.7 l -2.3 -1.9 l 0 2 l 0 2.1 l -2.1 6 l 0.2 3.3 l 1.2 2 l 4.3 2.2 l 3.6 2.4 l 4.2 4.3 l 0.8 1.5 l -0.1 1.6 l -3.3 8.5 l -0.5 2.7 l 0.7 1.5 l -0.1 9.2 l -2.6 1.3 l -1.7 4.4 l -6 6.2 L 507 284 l -1.1 -2 l -4.6 -2.2 l 0 -1.8 l -1.3 -1.1 l -2.6 -0.4 l 3 -0.8 l -2 -2.8 l 1.9 0.8 l -0.6 -1.5 l -4 -2.3 l 0.8 -0.5 l -2.7 -3.3 l 0.6 -1.2 l 1.4 0.6 l -1.7 -3.1 l -2.9 -3.3 l 1.3 -0.1 l -1.3 -2 l 0.1 -2.4 l -2.8 -1.9 l 0.2 -1.6 l -1.4 -0.9 l -0.2 -1.7 l -1.4 -0.3 l -0.9 1.1 l -2.7 -4.1 l -0.9 0 l 1.8 2.5 l -0.1 0.9 l -2.1 -2.9 l -1.8 0 l 1.1 -4.1 l 2 -0.4 l -1.7 -1.4 l -0.9 -2.2 l 1.8 0.8 l 0.9 -1.5 l -1.5 -1.1 l 0.1 -2.1 l -3.3 -2.1 l 3.2 0.2 l -0.7 -1.7 l -1.2 -2.2 l -0.8 -1.5 l -2.3 -1.6 l -1.3 -2.9 l 1.8 -1.5 l 0.2 -0.9 l -2 -2.5 l -1.2 -2.7 l -1.4 -0.8 l -0.7 -2.2 l -2.5 -4.1 l -0.4 -2.4 l -1.8 -1.5 l -0.3 -4 l 0.5 -0.9 l -0.8 -5 l -2.7 -1.8 l 0.7 -3.2 l 3.7 -2.1 l 1.8 -0.1 l 4.5 -2.2 l 0 -0.8 l 4.9 -1.2 l 5.7 0.7 l 3.7 -0.4 l 4.3 -2.7 l 3.1 0 l 1.9 -0.8 l 0.2 5.7 l 1.7 1.6 l 0.4 2.1 L 496 193 l -0.3 2.4 l 2 2.1 l 0.5 -0.1 l 2 0.2 l 3.6 -0.8 l 4.1 -0.8 l 1 2.5 l 3.2 1.8 l 1.7 -0.1 l 3 1.6 l 1.4 -0.8 l 0 -1.9 l -1.8 -4.4 l 0.7 -2.2 l 1.5 0.4 l 2.7 3.6 l 2.7 2.4 l 3.8 -2.3 l 5.7 5.6 l 2.3 0.8 l 1.3 1.9 l 3.7 2.9 l 10.4 7.5 l -2.4 3.6 l -3.3 0.7 l -2.4 -0.4 l 3.1 3.2 l -1.2 2.1 L 540 223 l -1.5 -0.9 l -4.8 -0.6 L 527.8 221.3 Z" />
        <b-tooltip target="Fenyuan-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>芬園鄉</h1>
            <h3>Fenyuan</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Xihu-Township" @mouseover="getInfo('Xihu-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 357.7 261.1 l 4 0.2 l 4.3 0.3 l -0.2 -2 l 2.9 -0.3 l 0.5 1.2 l 4.2 0 l 1.7 -1.8 l 2.3 -2.1 l 4 -0.7 l 2.5 1.9 l -1 1.2 l -2.6 0.9 l -0.7 5.5 l 5 4.2 l 0.1 4.3 l 0.3 3.7 l -1 2.6 l -1.5 -0.2 l -1 4.4 l -0.4 1.7 l 1.1 2.1 l 0.2 4.1 l -0.6 0.8 l -1.5 2.1 l -3.2 6.3 l 0.1 2 l -0.9 -0.2 l -4.4 3.3 l -1.5 0.2 l -0.5 3.6 l -2.4 -1.4 l -2.8 0.6 l -0.9 2.8 l -1.1 -0.1 l 0.6 2.1 l -0.7 1.2 l -3.2 0 l -0.5 4.1 l -5.8 0.2 l -0.7 0.8 l -1.7 -1.2 l -5.9 -0.8 l -1.2 -0.9 l -0.8 0.7 l -7.7 -11.3 l -0.3 0.2 l -1.2 -1.7 l -4.5 -2.5 l -2.8 -2.4 l -3.7 -4.7 l -2.6 -7.6 l -4 -7.8 l -1.7 -2.6 l -0.6 -1.3 l 2.4 -1.8 l -0.8 -6.4 l 3.9 0.9 l 2.4 3.5 l 2.2 0.9 l 0.2 -0.7 l 3.3 -1.4 l 1 -1.4 l 1.7 -0.4 l 1.3 -1.6 l 1.9 -2.5 l 0.5 -0.9 l 0.7 -11.6 l -0.6 -0.5 l 1.9 -3.4 l 1.5 -0.7 l 3.8 -0.3 l 1.9 1.4 l 0.2 0.1 l 2.2 2.8 l 1.8 -0.2 l 0 1 l 0.7 2.1 l 4 0.1 l 1.9 3.4 l 0 1.3 L 357.7 261.1 Z" />
        <b-tooltip target="Xihu-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>溪湖鎮</h1>
            <h3>Xihu</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Dacun-Township" @mouseover="getInfo('Dacun-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 427.8 227.8 l 9.4 -1.3 l 8 -1.1 l 1 -0.9 l 3.5 0.1 l 2.6 -1.1 l 3.7 -3.4 l 1.4 0.9 l 2.3 -0.1 l 1.6 -2 l 1.4 0.7 l 2 -1.2 l 3.3 1.8 l 1.7 0.1 l 3.6 -1.1 l 1.4 -1.3 l 1.7 1.7 l -0.2 0.9 l -1.8 1.5 l 1.3 2.9 l 2.3 1.6 l 0.8 1.5 l 1.2 2.2 l 0.7 1.7 l -3.2 -0.2 l 3.3 2.1 l -0.1 2.1 l 1.5 1.1 l -0.9 1.5 l -1.8 -0.8 l 0.9 2.2 l 1.7 1.4 l -2 0.4 l -4.1 0.1 l -3 3.5 l -3.3 2.2 l -5.3 2.4 l -4.2 3.6 l -1.3 -1 l -4.1 0.7 l -3.9 1 l -4.2 0.5 l 2.6 3.6 l -1 -0.1 l -1.7 -0.2 l -5.8 2 l -0.4 -0.4 l -2 1.2 l -2.8 0.4 l -2.5 0.3 l 0.2 -3.7 l -0.5 -2.6 l 0.5 -2.6 l -6.7 1 l -2.4 1.5 l -3.5 0.6 l -1.4 1.1 l 0.5 1.9 l -1.4 -0.1 l -0.9 -0.7 l -2.3 -1 l -1.6 3 l -3.3 3.1 l -2.8 -0.7 L 404 260 l -1.8 -4.5 l -3.3 0.6 l -3.6 -0.6 l -2.4 0.6 l -5.4 -0.5 l -1.9 0.6 l -3.8 -2.5 l -2.8 -3.1 l -1.1 -0.2 l -1.2 -1.6 l -2.4 -3.7 l 1.7 -0.8 l 0.4 -1.4 l -1.7 -1.6 l 2.6 -0.7 l 0.9 -2 l 3.4 -0.9 l 0.8 1.6 l 3.7 -1 l -0.4 -1.8 l 1.5 -1.1 l 3.4 -0.2 l -0.3 -3 l 2.7 -0.8 l 0 -1.7 l 3 -0.1 l 0.4 -2.9 l -0.9 -1.1 l 0.1 -2.2 l -0.9 -1.1 l 3.1 1.3 l 1 -2.3 l -0.7 -2.5 l 6.5 -0.8 l -0.3 -1.3 l 2.7 -0.8 l 0.7 0.7 l 4.4 1.6 l 1.1 1.7 l 2.4 2 l 2.3 -0.2 l 4.1 0.6 l 1.3 1.6 l 1.1 4.4 L 427.8 227.8 Z" />
        <b-tooltip target="Dacun-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>大村鄉</h1>
            <h3>Dacun</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Puxin-Township" @mouseover="getInfo('Puxin-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 431.2 295.4 l 0.5 4.7 l -2.8 0.6 l -0.7 -0.6 l -3.4 2 l -2.1 2.4 l -0.8 1.1 l -7.7 -0.4 l 0.7 1.7 L 411 308 l -4 1.7 l -1.5 -0.3 l -1.8 -2.2 l -1.3 -4.2 l -0.5 -1.5 l -4.2 -1 l -2.1 0.2 l -0.3 0.6 l -4.1 0.7 l -3 -1.5 l -2.7 2.6 l 3 4.7 l 0.1 2 l -3.3 -2.4 l -1.1 0.7 l -4 1.2 l -0.8 -1.1 l -3.1 -1.2 l 1.5 -1.8 l -0.6 -1.7 l -0.1 -2 l 3.2 -6.3 l 1.5 -2.1 l 0.6 -0.8 l -0.2 -4.1 l -1.1 -2.1 l 0.4 -1.7 l 1 -4.4 l 1.5 0.2 l 1 -2.6 l -0.3 -3.7 l -0.1 -4.3 l -5 -4.2 l 0.7 -5.5 l 2.6 -0.9 l 1 -1.2 l -2.5 -1.9 l -0.5 -2.7 l -2.3 -1.5 l -0.8 -1.3 l 1.1 0.2 l 2.8 3.1 l 3.8 2.5 l 1.9 -0.6 l 5.4 0.5 l 2.4 -0.6 l 3.6 0.6 l 3.3 -0.6 l 1.8 4.5 l 3.2 2.6 l 2.8 0.7 l 3.3 -3.1 l 1.6 -3 l 2.3 1 l -0.2 2.4 l -2 2.5 l -1.2 2.9 l 0.5 3.2 l 2.2 2.5 l 4 1.4 l 7.4 4.1 l 2.2 -0.4 l 1.1 -0.1 l 1.9 1.5 l 0.2 0.3 l 0.1 5.2 l 0.7 1.1 l 2.1 1.4 l -2.8 5.3 l -1.2 -0.5 l -1.1 1 L 431.2 295.4 Z" />
        <b-tooltip target="Puxin-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>埔心鄉</h1>
            <h3>Puxin</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Yuanlin-Township" @mouseover="getInfo('Yuanlin-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 454.5 253.2 l 4.1 -0.7 l 1.3 1 l 4.2 -3.6 l 5.3 -2.4 l 3.3 -2.2 l 3 -3.5 l 4.1 -0.1 l -1.1 4.1 l 1.8 0 l 2.1 2.9 l 0.1 -0.9 l -1.8 -2.5 l 0.9 0 l 2.7 4.1 l 0.9 -1.1 l 1.4 0.3 l 0.2 1.7 l 1.4 0.9 l -0.2 1.6 l 2.8 1.9 l -0.1 2.4 l 1.3 2 l -1.3 0.1 l 2.9 3.3 l 1.7 3.1 l -1.4 -0.6 l -0.6 1.2 l 2.7 3.3 l -0.8 0.5 l 4 2.3 l 0.6 1.5 l -1.9 -0.8 l 2 2.8 l -3 0.8 l 2.6 0.4 l 1.3 1.1 l 0 1.8 l -2.7 -0.4 l 0 0.9 l 6 1.4 l 1.3 2.4 l -2.3 -1.3 l -2.5 1.5 l -1.8 0.1 l 1.4 2.5 l 3.9 4.4 l 1.9 2.4 l -1.3 1 l -2.7 -2.1 l -0.6 1.9 l 2.6 2.1 l 1.2 1.8 l 3.1 2.7 l 0 1.5 l -1.5 -1.3 l -2.6 1.4 l -0.5 2.8 l -2.6 2.2 l -1.3 -0.2 l -4.7 0.6 l -7.4 -2.4 l -1.2 -1.1 l -5.3 -0.2 l -0.7 -0.6 l -2.7 0.9 l -3.2 -0.6 l -1.4 -1.4 l -4.2 1 l 0 0.9 l -4 0.6 l -1.6 0.2 l 0.5 2.7 l -2.1 4.4 l -1.6 2 l -8.7 2 l -2.1 -4.1 l -2.4 -9.6 l -1.6 2.5 L 440 304 l -2.4 0 l -3.2 -2.2 l -0.8 -2.3 l -2 0.6 l -0.5 -4.7 l -0.2 -3.5 l 1.1 -1 l 1.2 0.5 l 2.8 -5.3 l -2.1 -1.4 l -0.7 -1.1 l -0.1 -5.2 l -0.2 -0.3 l -1.9 -1.5 l -1.1 0.1 l -2.2 0.4 l -7.4 -4.1 l -4 -1.4 l -2.2 -2.5 l -0.5 -3.2 l 1.2 -2.9 l 2 -2.5 l 0.2 -2.4 l 0.9 0.7 l 1.4 0.1 l -0.5 -1.9 l 1.4 -1.1 l 3.5 -0.6 l 2.4 -1.5 l 6.7 -1 l -0.5 2.6 l 0.5 2.6 l -0.2 3.7 l 2.5 -0.3 l 2.8 -0.4 l 2 -1.2 l 0.4 0.4 l 5.8 -2 l 1.7 0.2 l 1 0.1 l -2.6 -3.6 l 4.2 -0.5 L 454.5 253.2 Z" />
        <b-tooltip target="Yuanlin-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>員林鎮</h1>
            <h3>Yuanlin</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Fangyuan-Township" @mouseover="getInfo('Fangyuan-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 169.5 263.7 l 3 -2.9 l 0.7 -2.4 l -0.1 -9.2 l 0.4 -3.9 l 2.3 -1.6 l 1 -1.6 l 4.7 -10.6 l 1.2 -1.9 l 4.8 -4.9 l 4.5 -3.7 l 3.2 -3.1 l 4.3 -2.8 l 2 -4.4 l 1.4 -13.4 l 0.4 -1.6 l 2.6 -4.3 l 1.1 -5 l 0.4 -9.3 l 7.4 2.9 l 11.6 4.1 l 11.1 3.6 l 2.8 0.8 l 3.5 8.8 l 1.9 2.4 l 2.4 1.6 l 0.4 1.2 l 3.6 5.9 l -0.1 2.9 l 2 1.3 l 0 2.7 l 0.7 0.5 l 0.1 2.7 l 2.2 0.4 l -0.7 3.1 l 4.4 2.3 l 1.5 1.4 l 3.7 1.7 l 2.7 -0.5 l 3.4 1.3 l 1.1 2.8 l 2.6 1 l -3.2 8.2 l 1.9 2.4 l -4.3 3.4 l -1.7 3.7 l 1.1 5.1 l -1.4 5.4 l 1.4 2.9 l -0.6 4 l -1.6 3.3 l -0.7 4.7 l 1.4 1.8 l 0.6 0.9 l -3.4 0.2 l -0.4 5.5 l -1.1 -0.1 l -0.1 1.8 l -3.9 -1.2 l -1.5 -1 l -3.4 6.4 l -3.8 0 l -1.4 -1.3 l -0.9 1 l -0.7 6.1 l 0.6 5.6 l -2.2 4.6 l 2.9 -0.2 l 0 1.4 l -1.5 7 l -4.2 1.1 l -1.5 2 l -1.5 -0.3 l -2.8 0.8 l -1.3 -0.4 l -2.4 0.6 l -1.7 2 l -1.8 -1.1 l -0.9 2.6 l 1.7 1 l -1.9 5.1 l -2.3 -0.8 l 0.6 6.1 l 1.4 1.7 l -2.8 1.3 l 0.9 3 l 0.5 3.2 l -1.7 0.3 l -6.7 -0.8 l -0.5 0.9 l 0.3 1.1 l 0.1 2.8 l 0.8 1.5 l -4.9 -1.8 l 0 3.8 l -0.6 0.1 l 1 1.7 l -3.9 9.1 l -0.8 0.4 l -1.9 6.6 l -4.2 -1.1 l -0.3 1.1 l -8.5 -2 l -2.7 1.2 l -1.8 -0.6 l -1.4 1.2 l -1 -1.5 l -5.9 -2 l 1 -3.2 l 1.9 -5.6 l 2.7 0.9 l 0.4 -1 l -5.8 -2 l 0.7 -2.9 l -3.8 -1.3 l -0.3 0.9 l -3 -1 l -1.8 6.6 l -1.2 -0.5 l -3.3 -1.4 l 0.2 -2.8 l -3.5 -1.6 l -3.2 -1 l -0.2 0.7 l -2.6 -1 l -5.7 -3 l -8.6 -5.2 l -7.2 -4.9 l -8.2 -6.2 l -7.3 -6.2 l 0.4 -1.5 l 2.8 -2.3 l 1.5 -2.1 l 2.1 -5 l 1.6 -2 l 0.4 -0.7 l 4.9 -1.6 l 1.5 0 l 3.4 -1.7 l 1 -2.6 l 0.8 -3.7 l 1 -4.7 l -1.1 -2.9 l -0.1 -3.2 l 1.2 -4 l 2.4 -3.7 l 2.2 -1.5 l 4.2 -1.2 l 1.6 -2.5 l 2.8 -3.1 l 4.2 -3.5 L 169.5 263.7 Z" />
        <b-tooltip target="Fangyuan-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>芳苑鄉</h1>
            <h3>Fangyuan</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Erlin-Township" @mouseover="getInfo('Erlin-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 227.9 341.7 l -0.5 -3.2 l -0.9 -3 l 2.8 -1.3 l -1.4 -1.7 l -0.6 -6.1 l 2.3 0.8 l 1.9 -5.1 l -1.7 -1 l 0.9 -2.6 l 1.8 1.1 l 1.7 -2 l 2.4 -0.6 l 1.3 0.4 l 2.8 -0.8 l 1.5 0.3 l 1.5 -2 l 4.2 -1.1 l 1.5 -7 l 0 -1.4 l -2.9 0.2 l 2.2 -4.6 l -0.6 -5.6 l 0.7 -6.1 l 0.9 -1 l 1.4 1.3 l 3.8 0 l 3.4 -6.4 l 1.5 1 l 3.9 1.2 l 0.1 -1.8 l 1.1 0.1 l 0.4 -5.5 l 3.4 -0.2 L 268 277 l -1.4 -1.8 l 0.7 -4.7 l 1.6 -3.3 l 0.6 -4 l -1.4 -2.9 l 1.4 -5.4 l -1.1 -5.1 l 1.7 -3.7 l 4.3 -3.4 l -1.9 -2.4 l 3.2 -8.2 l 1.4 0.4 l 2.4 2.2 l 2.1 3.2 l 1.7 3.7 l 2.9 4.3 l 2.5 3 l 0.5 2.5 l 2.1 1.8 l -0.6 2.6 l 1.8 2.1 l 2.1 1.3 l 1.9 2.2 l 0 1.3 l 1.4 1 l 1.9 0.7 l 5.8 1.3 l 2 1.1 l 2.2 2.5 l 3.8 7.5 l 0.6 1.3 l 1.7 2.6 l 4 7.8 l 2.6 7.6 l 3.7 4.7 l 2.8 2.4 l 4.5 2.5 l 1.2 1.7 l -7.1 4.7 l -0.8 -2.1 l -4.9 -0.7 l -0.3 -0.5 l -8.3 -0.1 l -0.3 12.8 l 1 0.1 l 1 3.4 l -1.8 7.3 l 1.7 0.2 l -0.4 1 l -3.3 0.2 l 0.1 5.4 l 0.1 2.4 l -2.3 0.5 l -0.4 3.2 l -0.1 3.3 l 2.4 0.5 l 0.9 2.2 l 2.5 0.8 l -1 2.8 l 2.2 3.3 l -0.8 1 l -2.3 0.4 l 1.3 1.2 l 0.7 3.7 l 1.1 1.4 l -0.5 3.7 l -1 1.1 l -1.6 -0.8 l -1.7 1.4 l -1.4 -0.1 l -4.4 -1.8 l -2.4 0.2 l -3.5 -2.8 l -2.2 -1.9 l -2.3 1.3 l -1.9 0.9 l -4.8 -8.1 l -0.4 -0.3 L 280 358 l -1 -5.9 l -2.7 1.6 l -1.8 3.4 l -4 0.2 l -2.4 1.8 l 1.7 3.5 l -0.3 5.1 l -2.1 -0.1 l -0.2 1.3 l 0.1 0.8 l 3.3 1 l -0.9 5.2 l -2.7 0.1 l -0.3 1.1 l 0.1 5.4 l -10.7 0.2 l -0.9 1.3 l -4.5 -0.7 l -0.7 1.5 l -1.9 -0.6 l -0.9 -0.2 l -2.4 -0.7 l -0.3 1 l -4.2 -0.9 l -2.8 0.1 l -1.6 6.6 l -1.4 4.1 l -0.9 -1.6 l -2 2.2 l -2.6 -2.8 l -2.2 -1 l -2.8 2 l -2.9 -1.2 l 0.6 -2.2 l -1.1 -1.9 l -2 0.9 l -1.1 -1 l -2 1.2 l -0.7 -0.6 l -0.7 -1.8 l 1.9 -6.1 l -4.1 -1.3 l 0.3 -0.9 l -5.5 -1.8 l 2.3 -8.8 l 1.9 -6.6 l 0.8 -0.4 l 3.9 -9.1 l -1 -1.7 l 0.6 -0.1 l 0 -3.8 l 4.9 1.8 l -0.8 -1.5 l -0.1 -2.8 l -0.3 -1.1 l 0.5 -0.9 l 6.7 0.8 L 227.9 341.7 Z" />
        <b-tooltip target="Erlin-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>二林鎮</h1>
            <h3>Erlin</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Pitou-Township" @mouseover="getInfo('Pitou-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 355.3 378.5 l -0.8 0.1 l -0.4 5.4 l 0.5 6.9 l 1.9 2.8 l -3.4 1.9 l -2.3 2.3 l -1.9 -1 l 0.2 -5.7 l 1.5 -2.1 l -1.8 -0.2 l -5.2 0.8 l 0.1 7.8 l 0 3.5 l -1.5 1.4 l -2.9 4.7 l -2.3 9.1 l 0.5 0.6 l -3 4 l 0.1 2.3 l -2.2 2.6 l -4.2 -10.2 l -0.8 0.3 l -1.6 -4.5 l -2.8 -0.7 l -2.8 -3.4 l -7.8 -9.2 l -0.2 -2.4 l -0.9 -3.5 l 3.8 -0.7 l -0.4 -1.7 l -0.3 -2.1 l -1.9 -3.4 l 0 -2.6 l -2.7 -4.7 l 0.5 -2.6 l 0.9 -0.6 l -1.3 -3.2 l 1.4 0.1 l 1.7 -1.4 l 1.6 0.8 l 1 -1.1 l 0.5 -3.7 l -1.1 -1.4 l -0.7 -3.7 l -1.3 -1.2 l 2.3 -0.4 l 0.8 -1 l -2.2 -3.3 l 1 -2.8 l -2.5 -0.8 l -0.9 -2.2 l -2.4 -0.5 l 0.1 -3.3 l 0.4 -3.2 l 2.3 -0.5 l -0.1 -2.4 l -0.1 -5.4 l 3.3 -0.2 l 0.4 -1 l -1.7 -0.2 l 1.8 -7.3 l -1 -3.4 l -1 -0.1 l 0.3 -12.8 l 8.3 0.1 l 0.3 0.5 l 4.9 0.7 l 0.8 2.1 l 7.1 -4.7 l 0.3 -0.2 l 7.7 11.3 l 0.8 -0.7 l 0.6 3.3 l -1.7 6.1 l 0.9 2.5 l 2.4 2 l 5 6.7 l 2 1.1 l 5.9 3.3 l 0.2 1.7 l 5.9 1.1 l 1.4 0.3 l 2.6 2.3 l 0.4 2.3 l -1.3 3.4 l 0.6 8.3 l 2.1 2.6 l 0.8 5.4 l 2 1.4 l 2.8 3.3 l 0.1 0.1 l -0.1 1.2 l -2.3 1.3 l -1.2 -0.4 l -1.8 1.6 l -4 0.8 l -4 0.9 l -2.3 0 L 355.3 378.5 Z" />
        <b-tooltip target="Pitou-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>埤頭鄉</h1>
            <h3>Pitou</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Yongjing-Township" @mouseover="getInfo('Yongjing-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 422.6 304.5 l 2.1 -2.4 l 3.4 -2 l 0.7 0.6 l 2.8 -0.6 l 2 -0.6 l 0.8 2.3 l 3.2 2.2 l 2.4 0 l 5.8 1.3 l -1.4 4.2 l -2.1 2 l 0.6 1.8 l 3.9 3.2 l -1.2 1.3 l 1.8 6 l -1.4 -0.1 l 0.6 2.7 l -6 0.5 l -4.1 2.3 l 2.5 6.6 l 0.3 1.3 l -4.7 1.5 l -2.4 0.4 l -5.5 1.1 l 0.7 4.2 l -1 0.1 l -1.4 -8.1 l -1 0.2 l -0.9 -2.4 l -1.8 -0.1 l -1.9 1.1 l -3.2 -0.6 l 0.8 5.9 l -7.1 1.1 l -2.3 -1.1 l 0.7 -6.4 l -2.5 -0.6 l -3.8 -4.1 l -2.8 -1.3 l -3.9 -1 l -1.9 -0.7 l -0.1 1.1 l -2.6 0 l -4.6 -0.7 l -1.4 0.8 l -3.8 -2.3 l -0.9 -0.2 l 0.5 -2.1 l -4.3 -1.3 l -4 -2.7 l -1.5 -2.8 l -1.1 0.3 l -1.8 -2.1 l -2.4 -0.7 l -2 0.6 l -0.6 -2.1 l 1.1 0.1 l 0.9 -2.8 l 2.8 -0.6 l 2.4 1.4 l 0.5 -3.6 l 1.5 -0.2 l 4.4 -3.3 l 0.9 0.2 l 0.6 1.7 l -1.5 1.8 l 3.1 1.2 l 0.8 1.1 l 4 -1.2 l 1.1 -0.7 l 3.3 2.4 l -0.1 -2 l -3 -4.7 l 2.7 -2.6 l 3 1.5 l 4.1 -0.7 l 0.3 -0.6 l 2.1 -0.2 l 4.2 1 l 0.5 1.5 l 1.3 4.2 l 1.8 2.2 l 1.5 0.3 l 4 -1.7 l 3.9 -1.1 l -0.7 -1.7 l 7.7 0.4 L 422.6 304.5 Z" />
        <b-tooltip target="Yongjing-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>永靖鄉</h1>
            <h3>Yongjing</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Tianwei-Township" @mouseover="getInfo('Tianwei-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 395.4 327.1 l 3.9 1 l 2.8 1.3 l 3.8 4.1 l 2.5 0.6 l -0.7 6.4 l 2.3 1.1 l 7.1 -1.1 l -0.8 -5.9 l 3.2 0.6 l 1.9 -1.1 l 1.8 0.1 l 0.9 2.4 l 1 -0.2 l 1.4 8.1 l 1 -0.1 l -0.7 -4.2 l 5.5 -1.1 l 2.4 -0.4 l 1.7 10.7 l 2.1 5.8 l 0.6 2 l 1.9 2.7 l -4.5 -1.8 l -3.4 0.2 l -2.9 0 l -0.4 2.3 l 1.1 1.4 l -1.3 0.6 l -1.7 1.1 l -1.3 7.1 l -4.5 -2 l -0.4 3.7 l 1.4 2.2 l 1.6 0.3 l 0.3 1.2 l -6.9 -0.7 l -0.7 -1.6 l -0.4 -6 l -0.5 -1.6 L 415 362 l -2.1 -1.4 l -4.4 -1.5 l -3.5 0.2 l -0.7 0.8 l -3.1 -0.3 l -6 1.9 l -2.1 -0.4 l -2.8 -1.5 l -1.1 -3.9 l -3.5 -1.5 l -0.7 -0.8 l -4.2 -2.3 l -3.8 -1.5 l -4 -0.9 l -2.2 0.2 l -1.8 -1.1 l -2.6 -2.3 l -1.4 -0.3 l -5.9 -1.1 l -0.2 -1.7 l -5.9 -3.3 l -2 -1.1 l -5 -6.7 l -2.4 -2 l -0.9 -2.5 l 1.7 -6.1 l -0.6 -3.3 l 1.2 0.9 l 5.9 0.8 l 1.7 1.2 l 0.7 -0.8 l 5.8 -0.2 l 0.5 -4.1 l 3.2 0 l 0.7 -1.2 l 2 -0.6 l 2.4 0.7 l 1.8 2.1 l 1.1 -0.3 l 1.5 2.8 l 4 2.7 l 4.3 1.3 l -0.5 2.1 l 0.9 0.2 l 3.8 2.3 l 1.4 -0.8 l 4.6 0.7 l 2.6 0 l 0.1 -1.1 L 395.4 327.1 Z" />
        <b-tooltip target="Tianwei-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>田尾鄉</h1>
            <h3>Tianwei</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Beidou-Township" @mouseover="getInfo('Beidou-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 408.5 359.2 l 4.4 1.5 l 2.1 1.4 l 1.6 4.1 l 0.5 1.6 l 0.4 6 l 0.7 1.6 l 6.9 0.7 l -0.3 5.7 l 1.5 0.3 l 5.8 4.6 l 1.1 2.5 l 1.5 -4.8 l 2 3.8 l 4.1 2.6 l 1.4 -0.1 l 1.9 0.6 l 1.8 2.3 l -6.5 7.8 l -2.1 -1.4 l -1.7 1 l -5.4 -0.6 l -1.7 -0.7 l 0.7 1.7 l 3.8 4.5 l -3 2.6 l -3 -2.7 l -3.6 -1.9 l -2.1 -0.2 l -8 -3.7 l -1.3 -2.6 l -3.7 -1.4 l -7.6 -0.4 l 4.3 12.2 l -3.2 -1.8 l -1.9 -2.9 l -1.5 -1.1 l -1.9 -3.2 l -4.1 -4.6 l -1.2 -0.8 l 1.5 -4.1 l -1.5 -2.1 l -3.4 -4.6 l -2.4 -0.4 l -3.9 0.9 l -1.8 -2.2 l 3.4 -4.6 l -3.5 -0.9 l -3.3 -0.5 l -0.1 -0.1 l -2.8 -3.3 l -2 -1.4 l -0.8 -5.4 l -2.1 -2.6 l -0.6 -8.3 l 1.3 -3.4 l -0.4 -2.3 l 1.8 1.1 l 2.2 -0.2 l 4 0.9 l 3.8 1.5 l 4.2 2.3 l 0.7 0.8 l 3.5 1.5 l 1.1 3.9 l 2.8 1.5 l 2.1 0.4 l 6 -1.9 l 3.1 0.3 l 0.7 -0.8 L 408.5 359.2 Z" />
        <b-tooltip target="Beidou-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>北斗鎮</h1>
            <h3>Beidou</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Xizhou-Township" @mouseover="getInfo('Xizhou-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 355.3 378.5 l 5.3 1.5 l 2.3 0 l 4 -0.9 l 4 -0.8 l 1.8 -1.6 l 1.2 0.4 l 2.3 -1.3 l 0.1 -1.2 l 3.3 0.5 l 3.5 0.9 l -3.4 4.6 l 1.8 2.2 l 3.9 -0.9 l 2.4 0.4 l 3.4 4.6 l 1.5 2.1 l -1.5 4.1 l 1.2 0.8 l 4.1 4.6 l 1.9 3.2 l 1.5 1.1 l 1.9 2.9 l 3.2 1.8 l -4.3 -12.2 l 7.6 0.4 l 3.7 1.4 l 1.3 2.6 l 8 3.7 l 2.1 0.2 l 3.6 1.9 l 3 2.7 l -1.4 1.2 l 4.2 4.9 l 4.5 -3.7 l 5.5 6.8 l 0.7 0.9 l 1.5 -1.2 l 6.3 7.6 l 2.5 -2.1 l 4.8 5.4 l 4.1 3.4 l 4.9 1.1 l 5.7 -1.4 l 0.7 0.6 l -1.1 0.9 l -3.7 4.9 l -3.8 2.5 l -2.4 1 l -2.2 -0.2 l -1.7 1.6 l -1.2 2.4 l -1.5 1.2 l -2.5 2 l -1.3 2.4 l 1.8 6 l 0 4.9 l -5.7 -2.2 l -4.8 -1.2 l -13.3 -2 l -2.1 -1.4 l -7.4 -1.9 l -5.1 -0.4 l -5.4 0.5 l -4.4 -0.3 l -1.9 0.2 l -5.5 2.2 l -1.2 0.1 l -6.7 -0.8 l -9.4 -0.3 l -4.7 -0.8 l -7.9 -2.6 l -1.4 -0.6 l -15.6 -3.3 l -8.1 -2.8 l -12.9 -5.7 l -4.6 -2.2 l -2.8 -0.6 l 0 -7.3 l -0.5 -8.7 l 2.5 -2.5 l 2.1 -0.9 l 0.8 -0.3 l 4.2 10.2 l 2.2 -2.6 l -0.1 -2.3 l 3 -4 l -0.5 -0.6 l 2.3 -9.1 l 2.9 -4.7 l 1.5 -1.4 l 0 -3.5 l -0.1 -7.8 l 5.2 -0.8 l 1.8 0.2 l -1.5 2.1 l -0.2 5.7 l 1.9 1 l 2.3 -2.3 l 3.4 -1.9 l -1.9 -2.8 l -0.5 -6.9 l 0.4 -5.4 L 355.3 378.5 Z" />
        <b-tooltip target="Xizhou-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>溪州鄉</h1>
            <h3>Xizhou</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Shetou-Township" @mouseover="getInfo('Shetou-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" stroke-miterlimit="10" d="M 445.2 347.5 L 445.2 347.5 l -6.8 7.5 l -2.1 -5.8 l -1.7 -10.7 l 4.7 -1.5 l -0.3 -1.3 l -2.5 -6.6 l 4.1 -2.3 l 6 -0.5 l -0.6 -2.7 l 1.4 0.1 l -1.8 -6 l 1.2 -1.3 l -3.9 -3.2 l -0.6 -1.8 l 2.1 -2 l 1.4 -4.2 l 1.6 -2.5 l 2.4 9.6 l 2.1 4.1 l 8.7 -2 l 1.6 -2 l 2.1 -4.4 l -0.5 -2.7 l 1.6 -0.2 l 4 -0.6 l 0 -0.9 l 4.2 -1 l 1.4 1.4 l 3.2 0.6 l 2.7 -0.9 l 0.7 0.6 l 5.3 0.2 l 1.2 1.1 l 7.4 2.4 l 4.7 -0.6 l 0 1.3 l 2.6 1.3 l 1.7 0.7 l 1.5 2 l 3.1 2.3 l -0.3 1.5 l 0.3 1.5 l -1.9 0.2 l 1.2 2.5 l -1.7 -0.7 l -1.4 0.6 l 1.4 2 l -1.6 2.2 l 1.4 3 l -1.7 -0.8 l 0.5 1.6 l -1.8 2.2 l 1.3 1 l -2.6 1.1 l 3.1 0.5 l -0.1 1.8 l -1.4 -0.4 l 0.1 2.5 l 0.9 0.3 l -1.4 1.6 l 1.9 0.2 l 1.4 1.3 l -1.1 1.8 l 1.3 1.5 l -0.7 2.1 l -1.5 0 l 1.3 1.7 l -1.9 3.6 l 1.7 0.2 l -2.1 2.8 l -2.5 0 l -0.5 4.3 l 0.6 0.9 l -2.1 1.4 l -1.2 4 l 0.3 0.6 l -1.9 2.6 l -3.7 -0.7 l -3.7 -1.8 l -5.1 -1.3 l -7.4 0.5 l -0.4 -1 l -6.9 -0.4 l -1.8 -2.1 l -2.2 0.3 l -1.4 0.4 l -0.2 3.1 l 0.4 3.2 l -7.8 0.2 l -1.5 0.3 l -0.6 0.1 l -1.7 -0.4 l -0.6 0.4 l -1.2 0.8 l -0.4 0.3 l -0.6 -0.6 l -0.4 -0.1 l -0.3 -0.1 l -0.1 0 l -2.5 -2 l -0.1 -0.4 l -0.5 -1.5 l 0 -0.5 l 0 0 l 0.1 -0.2 l 0.6 -0.8 l 0.1 -0.1 l 0.1 -0.2 l 0.1 -0.1 l 0.1 -0.1 l 0.1 -0.2 l 0 0 l 0 -0.1 l 0 0 l 0 -0.1 l -0.8 -2.5 l -0.7 -4.7 l -0.1 -1.9 l 1 -0.9 l -0.9 -2.3 L 445.2 347.5 Z" />
        <b-tooltip target="Shetou-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>社頭鄉</h1>
            <h3>Shetou</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Tianzhong-Township" @mouseover="getInfo('Tianzhong-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 496.3 368.1 l 1 2 l -0.7 3.5 l -1.3 0.7 l 0.2 2.8 l -2.5 -1 l -1.7 1.6 l 0.7 0.5 l -0.1 3.2 l 0.1 1.5 l 1.4 0.2 l 1.6 1.8 l -0.5 1.7 l 1.9 2.2 l 1.6 -0.1 l 0.2 1.2 l 1.2 0 l -1.8 1.9 l -0.1 4.1 l -3 2.5 l -0.3 1.2 l -3.3 -1.1 l 0.1 1.1 l 4.1 1.3 l -2.1 1.1 l -0.3 2.2 l -3 0.3 l 1.3 1 l -1.4 1 l 0.6 1 l -3.4 1.2 l -3.2 1.9 l -2 0.4 l -1.6 1.6 l -2.6 1.2 l -0.9 1.4 l -2.7 -3.4 l -2.6 0.5 l -3.5 -0.2 l -1.7 -1.7 l 1.1 2.4 l 1.9 2.4 l -0.3 4.3 l 1.7 0.4 l 0.6 5.4 l 1.3 0.2 l 0.4 2.7 l 2.1 3.5 l -1.1 0.2 l -0.7 -0.6 l -5.7 1.4 l -4.9 -1.1 l -4.1 -3.4 l -4.8 -5.4 l -2.5 2.1 l -6.3 -7.6 l -1.5 1.2 l -0.7 -0.9 l -5.5 -6.8 l -4.5 3.7 l -4.2 -4.9 l 1.4 -1.2 l 3 -2.6 l -3.8 -4.5 l -0.7 -1.7 l 1.7 0.7 l 5.4 0.6 l 1.7 -1 l 2.1 1.4 l 6.5 -7.8 l -1.8 -2.3 l -1.9 -0.6 l -1.4 0.1 l -4.1 -2.6 l -2 -3.8 l -1.5 4.8 l -1.1 -2.5 l -5.8 -4.6 l -1.5 -0.3 l 0.3 -5.7 l -0.3 -1.2 l -1.6 -0.3 l -1.4 -2.2 l 0.4 -3.7 l 4.5 2 l 1.3 -7.1 l 1.7 -1.1 l 1.3 -0.6 l -1.1 -1.4 l 0.4 -2.3 l 2.9 0 l 3.4 -0.2 l 4.5 1.8 L 439 357 l -0.6 -2 l 6.8 -7.5 l 0 0 l -0.3 2.9 l 0.9 2.3 l -1 0.9 l 0.1 1.9 l 0.7 4.7 l 0.8 2.5 l 0 0.1 l 0 0 l 0 0.1 l 0 0 l -0.1 0.2 l -0.1 0.1 l -0.1 0.1 l -0.1 0.2 l -0.1 0.1 l -0.6 0.8 l -0.1 0.2 l 0 0 l 0 0.5 l 0.5 1.5 l 0.1 0.4 l 2.5 2 l 0.1 0 l 0.3 0.1 l 0.4 0.1 l 0.6 0.6 l 0.3 -0.2 l 0.1 -0.1 l 1.2 -0.8 l 0.6 -0.4 l 1.7 0.4 l 0.6 -0.1 l 1.5 -0.3 l 7.8 -0.2 l -0.4 -3.2 l 0.2 -3.1 l 1.4 -0.4 l 2.2 -0.3 l 1.8 2.1 l 6.9 0.4 l 0.4 1 l 7.4 -0.5 l 5.1 1.3 l 3.7 1.8 L 496.3 368.1 Z" />
        <b-tooltip target="Tianzhong-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>田中鎮</h1>
            <h3>Tianzhong</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Ershui-Township" @mouseover="getInfo('Ershui-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 522.7 439.8 l 1.3 0.4 l 4.3 -0.8 l 2.5 -1.5 l 3.9 -0.9 l 2.7 0.4 l -0.3 -1.4 l 2.9 -0.3 l 2.4 -2.1 l 4.7 -1.7 l 1.9 0.8 l 2.5 3.3 l -0.9 2.5 l 0.5 3.3 l -0.1 3.1 l 0.6 2.7 l 3.6 -0.1 l 0.9 0.7 l 0.5 4.5 l -4.1 -0.3 l -4.9 2 l -5.6 4.1 l -3.1 2.8 l -4.3 2.1 l -4.3 0.8 l -10.2 3.8 l -3.5 1 l -2.2 1.2 l -7.7 -1.1 l -1.9 -2.4 l -2.5 -0.8 l -12.9 -1.3 l -2.8 -0.6 l -5.3 0.1 l -18 0.1 l -6 -1 l -3.1 -1.4 l 0 -4.9 l -1.8 -6 l 1.3 -2.4 l 2.5 -2 l 1.5 -1.2 l 1.2 -2.4 l 1.7 -1.6 l 2.2 0.2 l 2.4 -1 l 3.8 -2.5 l 3.7 -4.9 l 1.1 -0.9 l 1.1 -0.2 l -2.1 -3.5 l -0.4 -2.7 l -1.3 -0.2 l -0.6 -5.4 l -1.7 -0.4 l 0.3 -4.3 l -1.9 -2.4 l -1.1 -2.4 l 1.7 1.7 l 3.5 0.2 l 2.6 -0.5 l 2.7 3.4 l 0.9 -1.4 l 2.6 -1.2 l 1.6 -1.6 l 2 -0.4 l 3.2 -1.9 l 0.8 1.3 l 2 0.5 l 0.3 -1.7 l 2.6 -1.4 l 1 1 l -1.3 1.6 l 3.2 -0.3 l 2.1 -2.5 l 0.3 1.6 l 2.1 2.9 l -2.9 0.3 l -0.7 0.9 l 5.4 -0.3 l -1.9 1.4 l 2.9 0.2 l -0.9 1.1 l 3.5 0.3 l -0.1 0.6 l -4.8 1.9 l -3.9 0.3 l -2 1.8 l 0.8 1 l 3.8 -2.2 l 3.1 -1.3 l -0.1 1.4 l 2.9 -1.9 l 3.8 0 l 1.5 1.6 l -2.4 -0.3 l 2.2 3 l -2.2 1.2 l 3.5 0.5 l -1.8 1.2 l 2.2 1.5 l -2.9 -0.9 l -0.1 1.2 l 2.3 0.3 l -1.4 0.9 l 2.7 2.7 l -0.3 0.6 l 3.8 2.9 l 5 2.4 L 522.7 439.8 Z" />
        <b-tooltip target="Ershui-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>二水鄉</h1>
            <h3>Ershui</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Dacheng-Township" @mouseover="getInfo('Dacheng-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 173.7 431.4 l -0.7 0 l -14.9 -4.3 l -6.2 -1.7 l -21.9 -6.2 l -11.2 -3.4 l -6 -3.6 l -3.5 -2.7 l -6 -5.2 l -4 -4 l -5.1 -5.8 l -3.5 -4.4 l -7.3 -10 l 4 -4.6 l 1.9 -4.3 l -0.3 -1.8 l 1 -2.2 l 3.9 -3.1 l 2.8 -3.3 l 1.9 -2 l 3.1 -2.2 l 2.3 -0.8 l 6.6 -0.6 l 3.4 -2.6 l 1.7 -1 l 3.1 -2.8 l 2.6 -5.7 l -2.2 -4.5 l 0.6 -5 l 2.5 -3.6 l 2.2 -4.4 l -0.3 -3.7 l 7.3 6.2 l 8.2 6.2 l 7.2 4.9 l 8.6 5.2 l 5.7 3 l 2.6 1 l 0.2 -0.7 l 3.2 1 l 3.5 1.6 l -0.2 2.8 l 3.3 1.4 l 1.2 0.5 l 1.8 -6.6 l 3 1 l 0.3 -0.9 l 3.8 1.3 l -0.7 2.9 l 5.8 2 l -0.4 1 l -2.7 -0.9 l -1.9 5.6 l -1 3.2 l 5.9 2 l 1 1.5 l 1.4 -1.2 l 1.8 0.6 l 2.7 -1.2 l 8.5 2 l 0.3 -1.1 l 4.2 1.1 l -2.3 8.8 l 5.5 1.8 l -0.3 0.9 l 4.1 1.3 l -1.9 6.1 l 0.7 1.8 l 0.7 0.6 l 2 -1.2 l 1.1 1 l 2 -0.9 l 1.1 1.9 l -0.6 2.2 l 2.9 1.2 l 2.8 -2 l 2.2 1 l 2.6 2.8 l 1.1 1.7 l -1 4.9 l 4.6 2.9 l 8 -0.1 L 244 407 l -7.1 2.4 l 4.6 12.7 l -4.9 0.1 l -10.4 5.9 l -7.9 1 l -13.8 0.1 l -5.8 -0.1 l -17.1 2.5 L 173.7 431.4 Z" />
        <b-tooltip target="Dacheng-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>大城鄉</h1>
            <h3>Dacheng</h3>
          </div>
        </div>
        </b-tooltip>
        <path id="Zhutang-Township" @mouseover="getInfo('Zhutang-Township')" fill="#ffffff" pointer-events="initial" stroke="#000000" d="M 299.5 366.4 l 3.5 2.8 l 2.4 -0.2 l 4.4 1.8 l 1.3 3.2 l -0.9 0.6 l -0.5 2.6 l 2.7 4.7 l 0 2.6 l 1.9 3.4 l 0.3 2.1 l 0.4 1.7 l -3.8 0.7 l 0.9 3.5 l 0.2 2.4 l 7.8 9.2 l 2.8 3.4 l 2.8 0.7 l 1.6 4.5 l -2.1 0.9 l -2.5 2.5 l 0.5 8.7 l 0 7.3 l -3.4 -0.7 l -1.3 -1.5 l -3.5 -2.3 l -3.3 -1.6 l -3.1 -3.2 l -1.4 -2 l -6.6 -3.7 l -8.3 0 l -7.2 3.7 l -1.8 0.1 l -6 0.5 l -7.5 -0.7 l -14.4 -1.2 l -7.3 -0.6 l -6.7 -0.1 l -4.6 -12.7 l 7.1 -2.4 l 0.2 -2.8 l -8 0.1 l -4.6 -2.9 l 1 -4.9 l -1.1 -1.7 l 2 -2.2 l 0.9 1.6 l 1.4 -4.1 l 1.6 -6.6 l 2.8 -0.1 l 4.2 0.9 l 0.3 -1 l 2.4 0.7 l 0.9 0.2 l 1.9 0.6 l 0.7 -1.5 l 4.5 0.7 l 0.9 -1.3 l 10.7 -0.2 l -0.1 -5.4 l 0.3 -1.1 l 2.7 -0.1 l 0.9 -5.2 l -3.3 -1 l -0.1 -0.8 l 0.2 -1.3 l 2.1 0.1 l 0.3 -5.1 l -1.7 -3.5 l 2.4 -1.8 l 4 -0.2 l 1.8 -3.4 l 2.7 -1.6 l 1 5.9 l 7.9 0.2 l 0.4 0.3 l 4.8 8.1 l 1.9 -0.9 l 2.3 -1.3 L 299.5 366.4 Z" />
        <b-tooltip target="Zhutang-Township" placement="righttop" triggers="hover">
        <div>
          <div>
            <h1>竹塘鄉</h1>
            <h3>Zhutang</h3>
          </div>
        </div>
        </b-tooltip>
      </svg>
    </div>
    <div class="title col-md-4 col-12 d-flex flex-column">
      <h1 class="titleh1 ml-5 ml-md-0">ChangHua<span>///</span><br>Old House Location</h1>
      <hr/>
      <h3 class="ml-5 ml-md-0">{{showdata.chinese_name}}</h3>
      <h3 class="ml-5 ml-md-0">{{showdata.english_name}}</h3>
      <h3 class="ml-5 ml-md-0">{{showdata.old_house}}</h3>
      <br>
      <div class="text-right mr-5 w-75">
        <router-link class="titlebtn" to="location">
          More
          <mdb-icon  icon="angle-double-right" class="pl-1" />
        </router-link>
      </div>
    </div>
  </div>
</section>
<section id="section03" class="p-5">
  <div style="text-align:center">
    <h1 class="titleh1 pb-4">
      New Life///
    </h1>
  </div>
  <carousel :margin="20" :responsive="{0:{items:1,nav:false},576:{items:2,nav:false},1280:{items:3,nav:false}}" class="carousel03">
    <!-- 01 -->
    <div>
      <mdb-card>
        <mdb-view hover>
          <a href="#!">
            <mdb-card-image :src="require('@/assets/card/1.jpg')"></mdb-card-image>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            2/1Room
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
            學習和植物與老屋共生
            <ul style="padding:1rem;">
              <li>建築年份:1970年之前</li>
              <li>建築材料:磚造建築
              <li>使用方式:宿舍</li>
            </ul>
          </mdb-card-text>
          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>
    <!-- 02 -->
    <div>
      <mdb-card>
        <mdb-view hover>
          <a href="#!">
            <mdb-card-image :src="require('@/assets/card/2.jpg')"></mdb-card-image>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            棲身habitat
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
            用心與手感空間相遇
            <ul style="padding:1rem;">
              <li>建築年份:1959年</li>
              <li>建築材料:磚造建築
              <li>使用方式:住家</li>
            </ul>
          </mdb-card-text>
          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>
    <!-- 03 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/3.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            大路畔柑仔店
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          串起家族社區的老屋，等待遊子歸鄉
            <ul style="padding:1rem;">
              <li>建築年份:推測原建築超過200年</li>
              <li>建築材料:磚造建築
              <li>使用方式:聚落</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 04-->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/4.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            女人香臭豆腐
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          老屋裡的味覺與美學實踐
            <ul style="padding:1rem;">
              <li>建築年份:推測1920年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:店面</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 05 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/5.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            小艾謙和人文民宿
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
            在九曲巷弄為老屋停留一夜
            <ul style="padding:1rem;">
              <li>建築年份:1885年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:住家</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 06 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/6.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            半線屋
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          時間允許，讓老屋陪伴你
            <ul style="padding:1rem;">
              <li>建築年份:1967年</li>
              <li>建築材料:磚造建築</li>
              <li>使用方式:住家</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 07 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/7.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            咖啡 烟
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          共築老建築與老客人的夢想之處
            <ul style="padding:1rem;">
              <li>建築年份:推測原建築超過100年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:碾米工廠</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 08 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/8.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            品 • 茗茶丘好 good_tea_hil
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          在老屋裡，品嚐時間的味道
            <ul style="padding:1rem;">
              <li>建築年份:1970年之前</li>
              <li>建築材料:磚造建築</li>
              <li>使用方式:宿舍</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 09 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/9.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            百年品牌的百年老屋。泰豐號
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          百年後的相遇，攜手塑造鹿港老街
            <ul style="padding:1rem;">
              <li>建築年份:1895年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:店面</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 10 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/10.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            茉莉東興聯合辦公室
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          為老屋保存努力尋找答案
            <ul style="padding:1rem;">
              <li>建築年份:1784年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:住家</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 11 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/11.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            維新醫院x糖鎮製造
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          打開家族記憶寶盒，創造另一個時代的想像
            <ul style="padding:1rem;">
              <li>建築年份:1933年開業</li>
              <li>建築材料:磚造建築</li>
              <li>使用方式:醫院</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 12 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/12.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            滴答咖啡
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          永續的社群生活，貼近地方的脈動
            <ul style="padding:1rem;">
              <li>建築年份:1960年</li>
              <li>建築材料:竹造+磚造建築</li>
              <li>使用方式:銀樓</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>

    <!-- 13 -->
    <div>
      <mdb-card>
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image :src="require('@/assets/card/13.jpg')"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
          <mdb-card-title>
            齊造園
          </mdb-card-title>
          <hr/>
          <mdb-card-text>
          一起打造家園，一起分享生活
            <ul style="padding:1rem;">
              <li>建築年份:1962年</li>
              <li>建築材料:磚造建築</li>
              <li>使用方式:宿舍</li>
            </ul>
          </mdb-card-text>

          <router-link class="link-text d-flex justify-content-end" to="story">
            <h5>Read more
            <mdb-icon  icon="angle-double-right" class="pl-1" />
            </h5>
          </router-link>
      </mdb-card-body>
    </mdb-card>
    </div>
</carousel>
</section>
<section id="section04" class="pt-4">
    <div style="text-align:center">
      <h1 class="titleh1">
        //Match//
      </h1>
      <button class="user_unregistered-signup mr-4" id="signup-button">我有老屋</button>
      <button class="user_registered-login" id="login-button">我要找老屋</button>
    </div>
  <div class="container04">
    <div class="user_options-container">
    <div class="user_options-text">
      <div class="user_options-unregistered">
        <h4>你有租用老屋空間的需求嗎？</h4>
      </div>
      <div class="user_options-registered">
        <h4>你有閒置的老屋沒有在使用嗎？</h4>
      </div>
    </div>
    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <h2 class="forms_title">填表尋屋</h2>
        <p style="color:gray
        ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis ipsum, dicta placeat ea eligendi!</p>
        <form class="forms_form">
          <div class="forms_buttons">
            <router-link to="find" class="forms_buttons-action">
              More
              <mdb-icon  icon="angle-double-right" class="pl-1" />
            </router-link>
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">屋主登入</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" v-model="username" placeholder="User Name" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="email" v-model="email" placeholder="Email" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="password" v-model="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons d-flex justify-content-between">
            <router-link to="login" class="forms_buttons-forgot">
              註冊帳號.
            </router-link>
            <input type="submit" value="登入" @click="login" class="forms_buttons-action">
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</section>

<section id="section05">
  <div style="text-align:center">
    <h1 class="titleh1">
      Q & A
    </h1>
    <h1 class="titleh1">
      ///
    </h1>
  </div>
  <div v-for="(que,index) in questions" :key="index">
    <div class="question">
      <div class="index">Q{{ index+1 }}</div>
      <div class="queQ align-self">{{ que.Q }}</div>
      <span @click="start(index)" :class="[que.rotate ? 'go' : 'aa']">
      <mdb-btn color="green" @click.native.prevent="que.id === true ? que.id  = false : que.id  = true">
        <font-awesome-icon icon="times" size="2x" style="color:white;">
        </font-awesome-icon>
      </mdb-btn>
    </span>
    </div>
      <mdb-container>
          <mdb-card v-if='que.id===true'>
            <card-body >
              <p class="pb-2 m-auto" v-html="que.content"></p>
            </card-body>
          </mdb-card>
      </mdb-container>
  </div>
</section>

<section id="section06" class="pattern-9">
  <b-container fluid class="p-4">
  <div style="text-align:center">
    <h1 class="titleh1">
      Partner Community///
    </h1>
  </div>
  <div style="text-align:center;font-size:6rem;margin-top:4rem">
    <mdb-row>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/12roomart/" target="_blank">
            <img src="../assets/FB/1.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">2/1Room</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/hibitat/" target="_blank">
            <img src="../assets/FB/2.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">棲身<br>habitat cafe</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/pages/category/Township/%E5%A4%A7%E8%B7%AF%E7%95%94%E6%9F%91%E4%BB%94%E5%BA%97-412816072405596/" target="_blank">
            <img src="../assets/FB/3.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">大路畔</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/%E5%A5%B3%E4%BA%BA%E9%A6%99%E8%87%AD%E8%B1%86%E8%85%90-1831213460466126/?ref=br_rs" target="_blank">
            <img src="../assets/FB/4.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">女人香<br>臭豆腐</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/smalleyesecond/?eid=ARAZrDtE5ORhe2yN3ZbZC8k4_h-pMuxBKQQRIkmw62t7lZy8LcIxOSRsiRQo6ZmCkNWxZBkah857lApL" target="_blank">
            <img src="../assets/FB/5.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">小艾謙和<br>人文民宿</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/B.S.WU.TW/?ref=page_internal" target="_blank">
            <img src="../assets/FB/6.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">半線屋</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/yan.cafe1222/" target="_blank">
            <img src="../assets/FB/7.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">咖啡烟</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/goodteahill/" target="_blank">
            <img src="../assets/FB/8.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">品.茗茶丘好<br>good_tea_hill</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/%E7%99%BE%E5%B9%B4%E8%80%81%E5%BA%97-%E7%8E%89%E7%8F%8D%E9%BD%8B-137630252926270/" target="_blank">
            <img src="../assets/FB/9.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">泰豐號</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <img src="../assets/FB/10.jpg" class="img-fluid z-depth-1 aaa" alt="zoom">
          <div class="mask flex-center waves-effect waves-light">
            <p class="white-text p-small">茉莉東興<br>聯合辦公室</p>
          </div>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/ShihuRecreativeProject" target="_blank">
            <img src="../assets/FB/11.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">維新醫院<br>x<br>糖鎮製造</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/didotcafe/" target="_blank">
            <img src="../assets/FB/12.jpg" class="img-fluid z-depth-1" alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">滴答咖啡</p>
            </div>
          </a>
        </div>
      </mdb-col>
      <mdb-col xl="5" md="4" class="mb-3 text-center m-5">
        <div class="view overlay zoom fb-img">
          <a href="https://www.facebook.com/%E9%BD%8A%E9%80%A0%E5%9C%92-1915401918542744/" target="_blank">
            <img src="../assets/FB/13.jpg" class="img-fluid z-depth-1 " alt="zoom">
            <div class="mask flex-center waves-effect waves-light">
              <p class="white-text p-small">齊造園</p>
            </div>
          </a>
        </div>
      </mdb-col>
    </mdb-row>
  </div>
  </b-container>
</section>
</div>
</template>

<script>
import $ from 'jquery'
import carousel from 'vue-owl-carousel'
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbIcon } from 'mdbvue'
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      showdata: {},
      place_data: [
        {
          tag: 'Shengang-Township',
          chinese_name: '伸港鄉',
          english_name: 'Shengang Township',
          old_house: '老屋件數: 🏠🏠🏠🏠'
        },
        {
          tag: 'Xianxi-Township',
          chinese_name: '線西鄉 ',
          english_name: 'Xianxi Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Hemei-Township',
          chinese_name: '和美鎮',
          english_name: 'Hemei Township',
          old_house: '老屋件數: 🏠🏠🏠'
        },
        {
          tag: 'Zhanghua-City',
          chinese_name: '彰化市',
          english_name: 'Zhanghua City',
          old_house: '老屋件數: 🏠🏠🏠🏠🏠'
        },
        {
          tag: 'Lugang-Township',
          chinese_name: '鹿港鎮',
          english_name: 'Lugang Township',
          old_house: '老屋件數: 🏠'
        },
        {
          tag: 'Fuxing-Township',
          chinese_name: '福興鄉',
          english_name: 'Fuxing Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Puyan-Township',
          chinese_name: '埔鹽鄉',
          english_name: 'Puyan Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Xiushui-Township',
          chinese_name: '秀水鄉',
          english_name: 'Xiushui Township',
          old_house: '老屋件數: 🏠'
        },
        {
          tag: 'Huatan-Township',
          chinese_name: '花壇鄉',
          english_name: 'Huatan Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Fenyuan-Township',
          chinese_name: '芬園鄉',
          english_name: 'Fenyuan Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Xihu-Township',
          chinese_name: '溪湖鎮',
          english_name: 'Xihu Township',
          old_house: '老屋件數: 🏠🏠🏠🏠'
        },
        {
          tag: 'Dacun-Township',
          chinese_name: '大村鄉',
          english_name: 'Dacun Township',
          old_house: '老屋件數: 🏠🏠🏠'
        },
        {
          tag: 'Puxin-Township',
          chinese_name: '埔心鄉',
          english_name: 'Puxin Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Yuanlin-Township',
          chinese_name: '員林鎮',
          english_name: 'Yuanlin Township',
          old_house: '老屋件數: 🏠🏠🏠🏠'
        },
        {
          tag: 'Fangyuan-Township',
          chinese_name: '芳苑鄉',
          english_name: 'Fangyuan Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Erlin-Township',
          chinese_name: '二林鎮',
          english_name: 'Erlin Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Pitou-Township',
          chinese_name: '埤頭鄉',
          english_name: 'Pitou Township',
          old_house: '老屋件數: 🏠🏠🏠🏠'
        },
        {
          tag: 'Yongjing-Township',
          chinese_name: '永靖鄉',
          english_name: 'Yongjing Township',
          old_house: '老屋件數: 🏠🏠🏠🏠'
        },
        {
          tag: 'Tianwei-Township',
          chinese_name: '田尾鄉',
          english_name: 'Tianwei Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Beidou-Township',
          chinese_name: '北斗鎮',
          english_name: 'Beidou Township',
          old_house: '老屋件數:🏠🏠🏠🏠🏠🏠'
        },
        {
          tag: 'Xizhou-Township',
          chinese_name: '溪州鄉',
          english_name: 'Xizhou Township',
          old_house: '老屋件數:🏠🏠'
        },
        {
          tag: 'Shetou-Township',
          chinese_name: '社頭鄉',
          english_name: 'Shetou Township',
          old_house: '老屋件數:🏠🏠🏠🏠'
        },
        {
          tag: 'Tianzhong-Township',
          chinese_name: '田中鎮',
          english_name: 'Tianzhong Township',
          old_house: '老屋件數:🏠🏠🏠🏠'
        },
        {
          tag: 'Ershui-Township',
          chinese_name: '二水鄉',
          english_name: 'Ershui Township',
          old_house: '老屋件數: 🏠🏠'
        },
        {
          tag: 'Dacheng-Township',
          chinese_name: '大城鄉',
          english_name: 'Dacheng Township',
          old_house: '老屋件數:🏠🏠🏠🏠'
        },
        {
          tag: 'Zhutang-Township',
          chinese_name: '竹塘鄉',
          english_name: 'Zhutang Township',
          old_house: '老屋件數: 🏠🏠🏠🏠🏠🏠'
        }
      ],
      questions: [
        {
          Q: '老屋補助詳細規範及相關申請書件表單要去哪裡下載？',
          rotate: false,
          id: 'collapse01',
          content: '<span style:margin:1rem;>（一）彰化縣文化局官網-熱門主題-老屋補助 <a href="https://ppt.cc/f3enCx" target="_blank" style="color:white;background:rgba(93,155,132,0.7);">https://ppt.cc/f3enCx</a></span><br><br><span>（二）文化部私有老建築保存再生計畫官網  <a href="https://obs.moc.gov.tw/home/zh-tw" target="_blank" style="color:white;background:rgba(93,155,132,0.7);">https://obs.moc.gov.tw/home/zh-tw</a></span>'
        },
        {
          Q: '彰化縣有哪些老屋補助計畫可以申請？',
          rotate: false,
          id: 'collapse02',
          content: '<span>目前本縣推動的老屋計畫有三種</span><br>（一）彰化縣歷史老屋活化再利用補助計畫。<br>（二）彰化縣鹿港鎮歷史老屋活化再利用補助計畫。<br>（三）文化部私有老建築保存再生計畫。'
        },
        {
          Q: '申請老屋補助的基本資格是什麼？',
          rotate: false,
          id: 'collapse03',
          content: '<span>（一）建築物位於彰化縣內。</span><br><span>（二）非具文化資產保存法規範之身分。【有無文化資產身分可至「文化部文化資產局國家文化資產網」查詢：  <a href="https://ppt.cc/fdJpLx" target="_blank" style="color:white;background:rgba(93,155,132,0.7);";>https://ppt.cc/fdJpLx</a>】</span><br><span>（三）建築物是在民國六十年以前興建完成，具有歷史、文化，並有保存再生價值者。</span>'
        },
        {
          Q: '彰化縣歷史老屋補助計畫的補助類別和金額？',
          rotate: false,
          id: 'collapse04',
          content: '<span>（一）小型修繕類：補助恢復老屋原有風貌之工項為原則，每案補助比例不超過總修繕經費的50%，並以新臺幣50萬元為上限。<br>（二）文化經營類：補助老屋承租人（經營者）房屋租金，每月租金補助以新臺幣5,000元為上限。</span>'
        },
        {
          Q: '鹿港鎮歷史老屋補助計畫的補助類別和金額？',
          rotate: false,
          id: 'collapse05',
          content: '<span>（一）小型修繕類：補助恢復老屋原有風貌之工項為原則，每案補助比例不超過總修繕經費的50%，並以新臺幣60萬元為上限；若同意修繕後無償提供文化局經營使用5年者，最高可補助新臺幣90萬元。<br>（二）文化經營類：補助老屋承租人（經營者）房屋租金，每月租金補助以新臺幣8,000元為上限。</span>'
        },
        {
          Q: '申請小型修繕類或文化經營類的補助，需要注意什麼事情？',
          rotate: false,
          id: 'collapse06',
          content: '<span>（一）小型修繕類</span><ol><li>老屋修繕完成後，3年內應適度開放給公眾使用、參觀或消費。並應保存老屋原有形貌至少5年，且不得進行有損壞老屋完整，遮蓋老屋外貌與觀覽通道之營建行為。</li><li>修繕內容不得用於違章增（改）建或危及建築構造安全、公共使用安全之施作。<br><b>※房屋所有權人異動（如買賣、繼承等），也同樣要遵守上述規範喔！</b></li></ol><br><span>（二）文化經營類</span><ol><li>於歷史老屋從事有助於提升在地生活、文化藝術或傳統技藝等經營事項，並適度提供公益性回饋項目。</li><li>以年度為單位，得連續申請。</li></ol>'
        }
      ]
    }
  },
  methods: {
    getInfo (name) {
      this.showdata = this.place_data.filter(place => {
        return place.tag === name
      })[0]
    },
    start (index) {
      this.questions[index].rotate = !this.questions[index].rotate
      console.log(this.rotate)
    },
    beforeEnter (el) {
      this.elHeight = el.scrollHeight
    },
    enter (el) {
      el.style.height = this.elHeight + 'px'
    },
    beforeLeave (el) {
      el.style.height = 0
    },
    login () {
      this.axios.post('http://localhost:5000/login', { username: this.username, email: this.email, password: this.password })
        .then(res => {
          if (res.data.success) {
            alert('登入成功')
            this.$store.commit('login', res.data.user)
            this.$router.push('/provider')
          } else {
            alert(res.data.message)
          }
        })
    }

  },
  mounted () {
    const signupButton = document.getElementById('signup-button')
    const loginButton = document.getElementById('login-button')
    const userForms = document.getElementById('user_options-forms')
    $('.carousel-control-prev, .carousel-control-next,#btn-login,#btn-register,[data-toggle="pill"],#nav-tab .nav-item').on('click', function (event) {
      event.preventDefault()
      $('html,body').stop()
    })

    signupButton.addEventListener(
      'click',
      () => {
        userForms.classList.remove('bounceRight')
        userForms.classList.add('bounceLeft')
      },
      false
    )

    loginButton.addEventListener(
      'click',
      () => {
        userForms.classList.remove('bounceLeft')
        userForms.classList.add('bounceRight')
      },
      false
    )
  },
  components: {
    carousel,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon
  },
  computed: {

  }
}
</script>

<style scoped>
  /* section04 */
.container04{
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

  button {
    background-color: transparent;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  input {
    background-color: transparent;
    padding: 0;
    border: 0;
    outline: 0;
  }
  input[type="submit"] {
    cursor: pointer;
  }
  input::-webkit-input-placeholder {
    font-size: 0.85rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }
  input::-moz-placeholder {
    font-size: 0.85rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }
  input:-ms-input-placeholder {
    font-size: 0.85rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }
  input::-ms-input-placeholder {
    font-size: 0.85rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }
  input::placeholder {
    font-size: 0.85rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }

  /**
   * Bounce to the left side
   */
  @-webkit-keyframes bounceLeft {
    0% {
      -webkit-transform: translate3d(100%, -50%, 0);
              transform: translate3d(100%, -50%, 0);
    }
    50% {
      -webkit-transform: translate3d(-30px, -50%, 0);
              transform: translate3d(-30px, -50%, 0);
    }
    100% {
      -webkit-transform: translate3d(0, -50%, 0);
              transform: translate3d(0, -50%, 0);
    }
  }
  @keyframes bounceLeft {
    0% {
      -webkit-transform: translate3d(100%, -50%, 0);
              transform: translate3d(100%, -50%, 0);
    }
    50% {
      -webkit-transform: translate3d(-30px, -50%, 0);
              transform: translate3d(-30px, -50%, 0);
    }
    100% {
      -webkit-transform: translate3d(0, -50%, 0);
              transform: translate3d(0, -50%, 0);
    }
  }
  /**
   * Bounce to the left side
   */
  @-webkit-keyframes bounceRight {
    0% {
      -webkit-transform: translate3d(0, -50%, 0);
              transform: translate3d(0, -50%, 0);
    }
    50% {
      -webkit-transform: translate3d(calc(100% + 30px), -50%, 0);
              transform: translate3d(calc(100% + 30px), -50%, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, -50%, 0);
              transform: translate3d(100%, -50%, 0);
    }
  }
  @keyframes bounceRight {
    0% {
      -webkit-transform: translate3d(0, -50%, 0);
              transform: translate3d(0, -50%, 0);
    }
    50% {
      -webkit-transform: translate3d(calc(100% + 30px), -50%, 0);
              transform: translate3d(calc(100% + 30px), -50%, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, -50%, 0);
              transform: translate3d(100%, -50%, 0);
    }
  }
  /**
   * Show Sign Up form
   */
  @-webkit-keyframes showSignUp {
    100% {
      opacity: 1;
      visibility: visible;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
  }
  @keyframes showSignUp {
    100% {
      opacity: 1;
      visibility: visible;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
  }
  /**
   * Page background
   */
  .user {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
  }
  .user_options-container {
    position: relative;
    width: 80%;
  }
  .user_options-text {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    background-color:rgba(65, 53, 77);
    border-radius: 3px;
    height: 250px;
  }

  /**
   * Registered and Unregistered user box and text
   */
  .user_options-registered,
  .user_options-unregistered {
    width: 50%;
    padding: 75px 45px;
    color: #fff;
    font-weight: 300;
    margin: auto;
  }

  .user_registered-title,
  .user_unregistered-title {
    margin-bottom: 15px;
    font-size: 1.66rem;
    line-height: 1em;
  }

  .user_unregistered-text,
  .user_registered-text {
    font-size: 0.83rem;
    line-height: 1.4em;
  }

  .user_registered-login,
  .user_unregistered-signup {
    margin-top: 30px;
    border: 1px solid rgb(255, 209, 149);
    border-radius: 3px;
    padding: 10px 30px;
    color: rgb(255, 209, 149);
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 0.2rem;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  .user_registered-login:hover,
  .user_unregistered-signup:hover {
    color:rgb(222, 126, 68);
    background-color:rgb(218, 218, 218);
  }

  /**
   * Login and signup forms
   */
  .user_options-forms {
    position: absolute;
    top: 50%;
    left: 30px;
    width: calc(50% - 30px);
    min-height: 420px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    -webkit-transform: translate3d(100%, -50%, 0);
            transform: translate3d(100%, -50%, 0);
    -webkit-transition: -webkit-transform 0.4s ease-in-out;
    transition: -webkit-transform 0.4s ease-in-out;
    transition: transform 0.4s ease-in-out;
    transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
  }
  .user_options-forms .user_forms-login {
    -webkit-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  }
  .user_options-forms .forms_title {
    margin-bottom: 45px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    text-transform: uppercase;
    color: rgb(93,155,132);
    letter-spacing: 0.1rem;
  }
  .user_options-forms .forms_field:not(:last-of-type) {
    margin-bottom: 20px;
  }
  .user_options-forms .forms_field-input {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 6px 20px 6px 6px;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: gray;
    letter-spacing: 0.1rem;
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }
  .user_options-forms .forms_field-input:focus {
    border-color: gray;
  }
  .user_options-forms .forms_buttons {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
            align-items: center;
    margin-top: 35px;
  }
  .user_options-forms .forms_buttons-forgot {
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    color: #ccc;
    text-decoration: underline;
    -webkit-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
  .user_options-forms .forms_buttons-forgot:hover {
    color: #b3b3b3;
  }
  .user_options-forms .forms_buttons-action {
    background-color: rgba(93,155,132,0.8);
    border-radius: 3px;
    padding: 10px 35px;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;
  }
  .user_options-forms .forms_buttons-action:hover {
    background-color:rgb(93,155,132);
  }
  .user_options-forms .user_forms-signup,
  .user_options-forms .user_forms-login {
    position: absolute;
    top: 70px;
    left: 40px;
    width: calc(100% - 80px);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, -webkit-transform 0.5s ease-in-out;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, -webkit-transform 0.5s ease-in-out;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
  }
  .user_options-forms .user_forms-signup {
    -webkit-transform: translate3d(120px, 0, 0);
            transform: translate3d(120px, 0, 0);
  }
  .user_options-forms .user_forms-signup .forms_buttons {
    -webkit-box-pack: end;
            justify-content: flex-end;
  }
  .user_options-forms .user_forms-login {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    opacity: 1;
    visibility: visible;
  }

  /**
   * Triggers
   */
  .user_options-forms.bounceLeft {
    -webkit-animation: bounceLeft 1s forwards;
            animation: bounceLeft 1s forwards;
  }
  .user_options-forms.bounceLeft .user_forms-signup {
    -webkit-animation: showSignUp 1s forwards;
            animation: showSignUp 1s forwards;
  }
  .user_options-forms.bounceLeft .user_forms-login {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(-120px, 0, 0);
            transform: translate3d(-120px, 0, 0);
  }
  .user_options-forms.bounceRight {
    -webkit-animation: bounceRight 1s forwards;
            animation: bounceRight 1s forwards;
  }

@media(max-width:576px){
  .user_options-text {
    height: 400px;
  }
  h2.forms_title{
    font-size: 20px !important;
  }
  .user_options-forms {
    left: -10px;
    min-height: 450px;
    width: calc(60% - 30px)
  }
  /* .forms_buttons{
    flex-direction: column;
  } */
  .forms_form{
    margin: auto !important;
  }
  .user_options-registered{
    margin-left: 2rem;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .user_options-text {
    height: 350px;
  }
  /* .forms_buttons{
    flex-direction: column;
  } */
}
@media(min-width:768px){

}
.user_options-forms .forms_buttons-action{
  padding: 6px;
}
</style>
