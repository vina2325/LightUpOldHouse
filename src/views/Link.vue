<template>
  <div id="link">
    <div class="container-link">
      <div>
        <!--合作夥伴 -->
        <b-button
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
        class="link-btn"
        >
        合作夥伴
        </b-button>
        <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <b-card>
          <div class="mt-3">
          <b-card-group deck>
            <a href="https://www.facebook.com/12roomart/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                2/1Room
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/12roomart/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                棲身habitat cafe
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/pages/category/Township/%E5%A4%A7%E8%B7%AF%E7%95%94%E6%9F%91%E4%BB%94%E5%BA%97-412816072405596/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                大路畔
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/%E5%A5%B3%E4%BA%BA%E9%A6%99%E8%87%AD%E8%B1%86%E8%85%90-1831213460466126/?ref=br_rs" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                女人香臭豆腐
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/smalleyesecond/?eid=ARAZrDtE5ORhe2yN3ZbZC8k4_h-pMuxBKQQRIkmw62t7lZy8LcIxOSRsiRQo6ZmCkNWxZBkah857lApL" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                小艾謙和人文民宿
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/B.S.WU.TW/?ref=page_internal" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                半線屋
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/yan.cafe1222/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                咖啡烟
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/goodteahill/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                品.茗茶丘好good_tea_hill
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/%E7%99%BE%E5%B9%B4%E8%80%81%E5%BA%97-%E7%8E%89%E7%8F%8D%E9%BD%8B-137630252926270/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                泰豐號
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/ShihuRecreativeProject" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                維新醫院X糖鎮製造
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/didotcafe/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                滴答咖啡
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.facebook.com/%E9%BD%8A%E9%80%A0%E5%9C%92-1915401918542744/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color">
                <b-card-text class="text01">
                齊造園
                </b-card-text>
              </b-card>
            </a>
        </b-card-group>
        </div>
        </b-card>
        </b-collapse>
        <!--國內老屋組織 -->
        <b-button
        :class="visible1 ? null : 'collapsed'"
        :aria-expanded="visible1 ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible1 = !visible1"
        class="link-btn"
        >
        國內老屋組織
        </b-button>
        <b-collapse id="collapse-4" v-model="visible1" class="mt-2">
          <b-card>
          <div class="mt-3">
          <b-card-group deck>
            <a href="https://www.facebook.com/GooddoFans/?tn-str=k*F" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color2">
                <b-card-text>
                古都保存再生文教基金會
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www2.villagetaipei.net/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color2">
                <b-card-text>
                台北村落之聲
                </b-card-text>
              </b-card>
            </a>
            <a href="http://housepower.chiayi.gov.tw/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color2">
                <b-card-text>
                舊屋力
                </b-card-text>
              </b-card>
            </a>
            <a href="http://www.fapda.com/chiayi/web.htm" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color2">
                <b-card-text>
                能量城市
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www.keelungoldhouse.com/" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color2">
                <b-card-text>
                老屋偵探社
                </b-card-text>
              </b-card>
            </a>
            <a href="http://oldisgood.tainan.gov.tw/index.php?lang=cht" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color2">
                <b-card-text>
                好舊。好
                </b-card-text>
              </b-card>
            </a>
            <a href="http://oldhouse.taipei/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color2">
                <b-card-text>
                老房子文化運動
                </b-card-text>
              </b-card>
            </a>
            <a href="https://www2.villagetaipei.net/citywalker/" target="blank" class="d-block mb-3">
              <b-card  text-variant="white" class="text-center link-color2">
                <b-card-text>
                老房子-找到台北城市散步
                </b-card-text>
              </b-card>
            </a>
        </b-card-group>
        </div>
        </b-card>
        </b-collapse>
        <!--國外老屋組織 -->
        <b-button
        :class="visible2 ? null : 'collapsed'"
        :aria-expanded="visible2 ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible2 = !visible2"
        class="link-btn"
        >
        國外老屋組織
        </b-button>
        <b-collapse id="collapse-4" v-model="visible2" class="mt-2">
          <b-card>
          <div class="mt-3">
          <b-card-group deck>
            <a href="http://penangshophouse.com.my/?page_id=57" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color3">
                <b-card-text class="text02">
                Penang Shophouse
                </b-card-text>
              </b-card>
            </a>
            <a href="http://kitakyu.renovationschool.net/outline" target="blank" class="d-block mb-3">
              <b-card text-variant="white" class="text-center link-color3">
                <b-card-text class="text02">
                北九州老屋再生學校
                </b-card-text>
              </b-card>
            </a>
        </b-card-group>
        </div>
        </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      visible1: true,
      visible2: true
    }
  }
}
</script>

<style>
@media(max-width:576px){
  .container-link{
    padding-top: 10rem;
    padding-bottom: 2rem;
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .container-link{
    padding-top: 10rem;
    padding-bottom: 5rem;
    margin: auto;
    width: 80%;
  }
}
@media(min-width:768px){
  .container-link{
    padding-top: 20rem;
    padding-bottom: 5rem;
    margin: auto;
    max-width: 80%;
  }
}
#link{
  width: 100vw;
}
.link-btn{
  display:block !important;
  width: 100%;
  background: rgba(65, 53, 77) !important;
}
#link .btn-secondary{
  background: rgba(65, 53, 77,0.8) !important ;
  color: white !important;
}
#link .card-deck{
  margin-left: 5px ;
}
#link .link-color{
  border: solid 1px rgba(222, 126, 68,0.8);
}

#link .link-color2{
  background-color:rgba(255, 209, 149,1);
}

#link .link-color3{
  background-color:rgba(93,155,132,0.8);
}

#link .card .card-body .text01{
  color: rgba(222, 126, 68);
}

#link .card .card-body .text02{
  color: rgb(255, 255, 255);
}
</style>
