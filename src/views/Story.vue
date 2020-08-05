<template>
  <div id="story">
    <div class="container_story">
      <mdb-row>
        <mdb-col md="12" class="d-flex justify-content-center mb-5">
          <mdb-btn @click.native="show1 = 'all'" outline="orange" class="filter" dark-waves>全部</mdb-btn>
          <mdb-btn @click.native="show1 = '1'" outline="orange" class="filter" dark-waves>女人香臭豆腐</mdb-btn>
          <mdb-btn @click.native="show1 = '2'" outline="orange" class="filter" dark-waves>小艾謙和人文民宿</mdb-btn>
        </mdb-col>
      </mdb-row>

      <transition @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
        <div v-if="show1 === 'all' || show1 === '1'" class="mb-3 pics all 2 animation" style="">
        <Photoswipe>
          <mdb-container>
            <h3 class="story-h2 text-center">女人香臭豆腐</h3>
            <p class="text-center">老屋裡的味覺與美學實踐</p>
            <ul style="padding:1rem;" class="list-unstyled">
              <li>建築年份:推測1920年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:店面</li>
            </ul>
            <hr class="my-2" />
            <div class="ml-2">
              <p>
                在小時候生活的老街上，找一間老房子，用自己喜歡的物件裝飾，在這裡製作一塊最健康的臭豆腐，與大家共同度過理想的一天，店長黃小莉眼裡閃爍著光芒說著自己的夢想與實現。
              </p>
              <p>
                「女人香臭豆腐」位於田中的老街上，是一間日治時期就存在的老屋，過去是經營布匹批發，後來販售成衣、最後是修改衣服的店面，這大致上也是田中鎮多年的變化樣貌，從人口密集的城鎮，慢慢變成了人口外移的老街區，當然也因此留下了這樣的老屋。
              </p>
              <p>
                一樓目前是製作臭豆腐的攤位，同時也有用餐的地方；二樓則保留原貌作為展場使用，提供學校以及學生還有社區大學使用，讓大家透過這個空間去發展更多不同的故事。
              </p>
              <p>
                熱愛老屋的店長原本就承租一間三合院，早期從早午餐店做起，後來因為自己對於美感特別感興趣而開始擔任展覽空間的策展人，嘗試跟許多藝術家合作、策展。後來承租老屋開店，希望能夠延續策展的興趣，同時也透過空間、食物、擺設、老物的欣賞，推展地方美學教育。
              </p>
              <p>
                除了社區大學之外，當地的學生、文史工作者，熱愛老屋的日本人，喜歡嘗試新口味的外國人都成了這裡的客人。除了餐飲之外，也不定期舉辦演出、音樂會，並與當地導覽人員合作體驗活動，從老屋介紹到飲食創作等等，老屋就成了一種生活的展場，不斷去嘗試地方生活美學與味覺的各種可能。
              </p>
              <p>
                店內的裝潢與物件都是黃小莉多年來收藏的老物，原本僅僅只是單純對老物的喜愛，沒想到有一天會派上用場，而這些老物也與來訪用餐的客人連結出更多的故事，像是在用餐區的桌椅是在附近國小拍賣時買下，某次來訪用餐的客人竟發現那是自己小時候使用過的桌椅，如同時光機一樣的相遇，讓奇妙的物件緣份搭起了「女人香臭豆腐」與訪客的橋樑，老物也有了更多被珍惜的理由。
              </p>
              <p>
                談起未來，黃小莉把自己當作一個地方創生可能的起點，在這個老街區做出不同的創生嘗試，或許很理想、很夢幻，但也很辛苦。在這樣的辛苦的過程中一點一滴的去找出方法，如果成功的存留下來，就有成為讓更多人加入的理由。用心保存老屋，也可以吸引更多人來到這裡用自己的方式生活。
              </p>
            </div>
            <mdb-row>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/1.jpg')" v-pswp="require('../assets/女人香/1.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/2.jpg')" v-pswp="require('../assets/女人香/2.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/3.jpg')" v-pswp="require('../assets/女人香/3.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/4.jpg')" v-pswp="require('../assets/女人香/4.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/5.jpg')" v-pswp="require('../assets/女人香/5.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/6.jpg')" v-pswp="require('../assets/女人香/6.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/7.jpg')" v-pswp="require('../assets/女人香/7.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/8.jpg')" v-pswp="require('../assets/女人香/8.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/女人香/9.jpg')" v-pswp="require('../assets/女人香/9.jpg')">
              </mdb-col>
            </mdb-row>
            <div style="margin-bottom:5rem;"></div>
          </mdb-container>
        </Photoswipe>
        </div>
      </transition>
      <transition @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
        <div v-if="show1 === 'all' || show1 === '2'" class="mb-3 pics all 2 animation" style="">
        <Photoswipe>
          <mdb-container>
            <h3 class="story-h2 text-center">小艾謙和人文民宿</h3>
            <p class="text-center">在九曲巷弄為老屋停留一夜</p>
            <ul style="padding:1rem;" class="list-unstyled">
              <li>建築年份:1885年</li>
              <li>建築材料:磚造+木造建築</li>
              <li>使用方式:住家</li>
            </ul>
            <hr class="my-2" />
            <div class="ml-2">
              <p>
                在名為「謙和」的老屋裡，感受一場新舊靈魂的交流
              </p>
              <p>
                老屋是否可以當作民宿呢？小艾謙和民宿有了答案。
              </p>
              <p>
                將老屋作為民宿的重點與難度不是只有房子的維修，更重要的是對地方歷史與文化的理解，並透過這些對地方的人與生活的連結與實踐，去呈現出一間老屋民宿獨特存在的可能。
              </p>
              <p>
                謙和人文民宿是由鹿港在地經驗豐富的老屋修繕與經營團隊小鎮資產管理有限公司所規劃設計，團隊以重生100間老屋為最重要的目標，從這樣的過程中找出老屋再生的循環，在老屋重生的過程中進行包括人才培育、空間再生、在地經濟以及文化觀光的各種方式為老屋賦予各種重要任務。
              </p>
              <p>
                小艾謙和民宿從外觀開始盡量保留原本的狀態，細節經過整理與強化，門口設計草地、老車以及磚花跟木料的重新整理，讓老屋保存古樸的風味同時表現出低調的現代風格，磚牆與草地剛好與磚花的顏色搭配，穩重卻帶有年輕的氣息。
              </p>
              <p>
                包棟民宿是小艾謙和民宿的整修規劃方向，一樓設定為共用活動空間，包含有電視、廚房、書桌與浴廁空間。由於老屋本身已經超過百年以上，光是建築結構的強化、腐蝕木料的抽換並保持原本的風格就需要花許多的時間，說起整修過程最辛苦的部份莫過於建築牆面的傾斜的處理，還好經驗豐富的團隊，透過現代的建築技法去強化，讓整間老屋得以兼顧安全與原始樣貌的保存下去。
              </p>
              <p>
                一樓的廚具規格與挑選也花了許多時間的整理，從尺寸的丈量、功能運用到設計圖的配合與修改，才讓廚具能夠不過度突顯並方便被使用。
              </p>
              <p>
                往二樓的樓梯是謙和老屋整修的一大亮點，由於百年老屋過去的樓梯皆為木作且角度非常陡，這種樓梯在現代建築其實已經不敷使用，並且作為民宿也不適合。於是設計團隊重新構思，在有限的空間裡減少坡度並增加安全性。在原有的空間底下設計出符合謙和老屋風貌的旋轉式樓梯，並透過深色鐵件與木作梯面，讓這梯子的存在幾乎不會感受到突兀。
              </p>
              <p>
                二樓為通舖以及浴廁空間，牆面經過強化並留下許多磚牆外觀的樣式設計，透露建築本身的時間感，屋頂與梁柱也都保持外露，並保留部份修復痕跡，讓不同時代的使用者可以在同一個空間裡展現彼此對於老屋的用心。
              </p>
              <p>
                二樓陽台可以看見九曲巷的紋理，還可以遠眺鹿港知名的十宜樓二樓廊道，由於鹿港老屋樓層不高，可以看見錯落的甕牆與老屋，這也是在鹿港才有的風景，也是謙和存在的另一層涵義。
              </p>
              <p>
                謙和為許姓的堂號，主人的娘家過去原為布莊，在鹿港也有著相當深厚的關係，雖然家族已經不再居住於此，但這建築的故事透過使用可以持續保留著，在地的團隊則把人、故事、空間、與觀光連結在一起，這也是地方文化旅宿存在的重要意義。
              </p>
            </div>
            <mdb-row>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/1.jpg')" v-pswp="require('../assets/小艾/1.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/2.jpg')" v-pswp="require('../assets/小艾/2.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/3.jpg')" v-pswp="require('../assets/小艾/3.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/4.jpg')" v-pswp="require('../assets/小艾/4.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/5.jpg')" v-pswp="require('../assets/小艾/5.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/6.jpg')" v-pswp="require('../assets/小艾/6.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/7.jpg')" v-pswp="require('../assets/小艾/7.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/8.jpg')" v-pswp="require('../assets/小艾/8.jpg')">
              </mdb-col>
              <mdb-col col="4" class="mt-md-3 mt-4">
                <img class="img-fluid" :src="require('../assets/小艾/9.jpg')" v-pswp="require('../assets/小艾/9.jpg')">
              </mdb-col>
            </mdb-row>
            <div style="margin-bottom:5rem;"></div>
          </mdb-container>
        </Photoswipe>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mdbRow, mdbCol, mdbBtn } from 'mdbvue'

export default {
  components: {

    mdbRow,
    mdbCol,
    mdbBtn
  },
  data () {
    return {
      show1: 'all',
      visible: false,
      index: 0
    }
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    },
    enter (el) {
      el.style.opacity = 0
    },
    afterEnter (el) {
      el.style.opacity = 1
    },
    beforeLeave (el) {
      el.style.opacity = 0
    }
  }
}
</script>

<style>
  @media(max-width:576px){
  .container_story{
    padding-top: 10rem;
    padding-bottom: 2rem;
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .container_story{
    padding-top: 10rem;
    padding-bottom: 5rem;
    margin: auto;
    width: 80%;
  }
}
@media(min-width:768px){
  .container_story{
    padding-top: 20rem;
    padding-bottom: 5rem;
    margin: auto;
    max-width: 80%;
  }
}
  #story{
    width: 100vw;
  }
</style>
