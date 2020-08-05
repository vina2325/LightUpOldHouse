<template>
  <div id="find">
    <div class="container-find">
      <mdb-container>
        <!-- <h2 class="text-center mb-3 findh2"><b>待活化空間</b></h2> -->
        <!-- 01 -->
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="../assets/待整修/1.jpg" alt="Sample image" />
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="find-text" href="https://goo.gl/maps/w9VahX5wQDYnmTvk8" target="blank">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="map-marker-alt" class="pr-2" />Location</h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>彰化縣鹿港鎮金盛巷52號</strong>
            </h3>
            <ul>
              <li>建物樓層：1樓</li>
              <li>建築材料：磚造</li>
              <li>建物現況：需修繕</li>
              <li>原使用方式：住宅</li>
              <li>地籍面積：45平方公尺</li>
            </ul>
            <mdb-btn size="md" class="waves-light find-btn" @click.native="contact = true">我有興趣
            </mdb-btn>
            <mdb-modal :show="contact" @close="contact = false">
              <mdb-modal-header class="text-center pt-2">
                <mdb-modal-title tag="h4" bold class="w-100">我有興趣</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="mx-3 grey-text">
                <mdb-input label="你的姓名" icon="user" class="mb-5"/>
                <mdb-input label="你的信箱" icon="envelope" type="email" class="mb-5"/>
                <mdb-input label="你的電話" icon="phone" class="mb-5"/>
                <mdb-textarea icon="pencil-alt" label="備註"/>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn @click.native="contact = false" class="find-btn">送出 <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
        <!-- 02 -->
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="../assets/待整修/2.jpg" alt="Sample image" />
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="find-text" href="https://goo.gl/maps/tDkKJQfn63EUt21QA" target="blank">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="map-marker-alt" class="pr-2" />Location</h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>彰化縣鹿港鎮中山路435號</strong>
            </h3>
            <ul>
              <li>建物樓層：2樓</li>
              <li>建築材料：鋼筋混凝士</li>
              <li>建物現況：需修繕</li>
              <li>原使用方式：商業用</li>
              <li>地籍面積：130平方公尺</li>
            </ul>
            <mdb-btn size="md" class="waves-light find-btn" @click.native="contact = true">我有興趣
            </mdb-btn>
            <mdb-modal :show="contact" @close="contact = false">
              <mdb-modal-header class="text-center pt-2">
                <mdb-modal-title tag="h4" bold class="w-100">我有興趣</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="mx-3 grey-text">
                <mdb-input label="你的姓名" icon="user" class="mb-5"/>
                <mdb-input label="你的信箱" icon="envelope" type="email" class="mb-5"/>
                <mdb-input label="你的電話" icon="phone" class="mb-5"/>
                <mdb-textarea icon="pencil-alt" label="備註"/>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn @click.native="contact = false" class="find-btn">送出 <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
        <!-- 03 -->
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="../assets/待整修/3.jpg" alt="Sample image" />
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="find-text" href="https://goo.gl/maps/2PBKfqegRDTTEvGC8" target="blank">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="map-marker-alt" class="pr-2" />Location</h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>彰化縣鹿港鎮中山路194號</strong>
            </h3>
            <ul>
              <li>建物樓層：3樓</li>
              <li>建築材料：磚造</li>
              <li>建物現況：需修繕</li>
              <li>原使用方式：住宅</li>
              <li>地籍面積：340平方公尺</li>
            </ul>
            <mdb-btn size="md" class="waves-light find-btn" @click.native="contact = true">我有興趣
            </mdb-btn>
            <mdb-modal :show="contact" @close="contact = false">
              <mdb-modal-header class="text-center pt-2">
                <mdb-modal-title tag="h4" bold class="w-100">我有興趣</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="mx-3 grey-text">
                <mdb-input label="你的姓名" icon="user" class="mb-5"/>
                <mdb-input label="你的信箱" icon="envelope" type="email" class="mb-5"/>
                <mdb-input label="你的電話" icon="phone" class="mb-5"/>
                <mdb-textarea icon="pencil-alt" label="備註"/>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn @click.native="contact = false" class="find-btn">送出 <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
        <!-- 04 -->
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="../assets/待整修/4.jpg" alt="Sample image" />
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="find-text" href="https://goo.gl/maps/NijktDWdLXLM4iTW7" target="blank">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="map-marker-alt" class="pr-2" />Location</h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>彰化縣鹿港鎮金盛巷83號</strong>
            </h3>
            <ul>
              <li>建物樓層：2樓</li>
              <li>建築材料：磚造、木造</li>
              <li>建物現況：需修繕</li>
              <li>原使用方式：空屋</li>
              <li>地籍面積：39平方公尺</li>
            </ul>
            <mdb-btn size="md" class="waves-light find-btn" @click.native="contact = true">我有興趣
            </mdb-btn>
            <mdb-modal :show="contact" @close="contact = false">
              <mdb-modal-header class="text-center pt-2">
                <mdb-modal-title tag="h4" bold class="w-100">我有興趣</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="mx-3 grey-text">
                <mdb-input label="你的姓名" icon="user" class="mb-5"/>
                <mdb-input label="你的信箱" icon="envelope" type="email" class="mb-5"/>
                <mdb-input label="你的電話" icon="phone" class="mb-5"/>
                <mdb-textarea icon="pencil-alt" label="備註"/>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn @click.native="contact = false" class="find-btn">送出 <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
        <!-- 05 -->
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="../assets/待整修/5.jpg" alt="Sample image" />
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="find-text" href="https://goo.gl/maps/KsAf9eyD2natsTZE9" target="blank">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="map-marker-alt" class="pr-2" />Location</h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>彰化縣鹿港鎮金盛巷84號</strong>
            </h3>
            <ul>
              <li>建物樓層：2樓</li>
              <li>建築材料：磚造、木造</li>
              <li>建物現況：需修繕</li>
              <li>原使用方式：空屋</li>
              <li>地籍面積：30平方公尺</li>
            </ul>
            <mdb-btn size="md" class="waves-light find-btn" @click.native="contact = true">我有興趣
            </mdb-btn>
            <mdb-modal :show="contact" @close="contact = false">
              <mdb-modal-header class="text-center pt-2">
                <mdb-modal-title tag="h4" bold class="w-100">我有興趣</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="mx-3 grey-text">
                <mdb-input label="你的姓名" icon="user" class="mb-5"/>
                <mdb-input label="你的信箱" icon="envelope" type="email" class="mb-5"/>
                <mdb-input label="你的電話" icon="phone" class="mb-5"/>
                <mdb-textarea icon="pencil-alt" label="備註"/>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn @click.native="contact = false" class="find-btn">送出 <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
      </mdb-container>
    </div>
  </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbMask, mdbIcon, mdbView, mdbBtn, mdbModal, mdbTextarea, mdbModalBody, mdbInput, mdbModalFooter } from 'mdbvue'
export default {
  name: 'find',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn,
    mdbModal,
    mdbModalBody,
    mdbInput,
    mdbModalFooter,
    mdbTextarea
  },
  data () {
    return {
      contact: false
    }
  }
}
</script>
<style>
@media(max-width:576px){
  .container-find{
    padding-top: 10rem;
    padding-bottom: 2rem;
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .container-find{
    padding-top: 10rem;
    padding-bottom: 5rem;
    margin: auto;
    width: 80%;
  }
}
@media(min-width:768px){
  .container-find{
    padding-top: 20rem;
    padding-bottom: 5rem;
    margin: auto;
    max-width: 80%;
  }
}
#find{
    width: 100vw;
}
h2.findh2{
  color:rgb(93,155,132);
}
.find-text{
  color:rgb(93,155,132) !important;
}
button.btn-default{
  background-color:rgb(93,155,132) !important ;
}
</style>
