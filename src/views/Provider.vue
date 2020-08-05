<template>
  <div id="provider">
    <div class="container-provider">
      <mdb-container>
      <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5"><mdb-icon icon="user-circle" size="1x" class="blue-text mr-2"/>提供者資料</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col md="12" class="md-0 mb-5">
          <form>
            <mdb-row>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-name" label="Your name" />
                </div>
              </mdb-col>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <select class="browser-default custom-select">
                    <option disabled>Choose your gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-email" label="Your email" />
                </div>
              </mdb-col>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-phone" label="Your phone" />
                </div>
              </mdb-col>
            </mdb-row>
          </form>
        </mdb-col>
      </mdb-row>
      <!-- 老屋資料 -->
      <h2 class="h1-responsive font-weight-bold text-center my-5"><mdb-icon icon="home" size="1x" class="blue-text mr-2"/>老屋資訊</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col md="12" class="md-0 mb-5">
          <form>
            <mdb-row>
              <mdb-col md="3">
                <div class="md-form mb-0">
                  <select class="browser-default custom-select">
                    <option selected disabled>彰化縣</option>
                  </select>
                </div>
              </mdb-col>
              <mdb-col md="3">
                <div class="md-form mb-0">
                  <select class="browser-default custom-select">
                    <option selected disabled>選擇鄉鎮</option>
                    <option value="1">500 彰化市</option>
                    <option value="2">502 芬園鄉</option>
                    <option value="3">503 花壇鄉</option>
                    <option value="4">504 秀水鄉</option>
                    <option value="5">505 鹿港鎮</option>
                    <option value="6">506 福興鄉</option>
                    <option value="7">507 線西鄉</option>
                    <option value="7">508 和美鄉</option>
                    <option value="8">509 伸港鄉</option>
                    <option value="9">503 花壇鄉</option>
                    <option value="10">510 員林市</option>
                    <option value="11">511 社頭鄉</option>
                    <option value="12">512 永靖鄉</option>
                    <option value="13">513 埔心鄉</option>
                    <option value="14">514 溪湖鎮</option>
                    <option value="15">515 大村鄉</option>
                    <option value="16">516 埔鹽鄉</option>
                    <option value="20">520 田中鄉</option>
                    <option value="21">521 北斗鎮</option>
                    <option value="22">522 田尾鄉</option>
                    <option value="23">523 埤頭鄉</option>
                    <option value="24">524 溪州鄉</option>
                    <option value="25">525 竹塘鄉</option>
                    <option value="26">526 二林鄉</option>
                    <option value="27">527 大城鄉</option>
                    <option value="28">528 芳苑鄉</option>
                    <option value="30">528 二水鄉</option>
                  </select>
                </div>
              </mdb-col>
              <mdb-col md="6">
                <div class="md-form mb-0">
                  <mdb-input type="text" id="contact-name" label="Your address" />
                </div>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="12">
                  <div class="md-form mb-0">
                    <mdb-textarea id="form-contact-message" label="老屋說明"/>
                  </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="6">
                <div class="input-group">
                  <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                  <label class="custom-file-label" for="inputGroupFile01">選擇檔案</label>
                </div>
                </div>
              </mdb-col>
              <mdb-col md="6">
                <div class="input-group">
                  <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                  <label class="custom-file-label" for="inputGroupFile01">選擇檔案</label>
                </div>
                </div>
              </mdb-col>
            </mdb-row>
          </form>
          <div class="text-center text-md-centerd mt-5">
            <mdb-btn color="primary" size="md">Send</mdb-btn>
          </div>
        </mdb-col>
      </mdb-row>
      </section>
    </mdb-container>
    </div>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea } from 'mdbvue'
export default {
  name: 'ContactPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea
  }
}
</script>
<style>
  @media(max-width:576px){
  .container-provider{
    padding-top: 10rem;
    padding-bottom: 2rem;
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 578px) and (max-width: 768px) {
  .container-provider{
    padding-top: 10rem;
    padding-bottom: 5rem;
    margin: auto;
    width: 80%;
  }
}
@media(min-width:768px){
  .container-provider{
    padding-top: 20rem;
    padding-bottom: 5rem;
    margin: auto;
    max-width: 80%;
  }
}
</style>
