<template>
  <div class="home">
    <img src="https://files.porsche.com/filestore/image/multimedia/none/992-carrera-360-exterior-001/normal/f244be45-796a-11ea-80c9-005056bbdc38;sK;twebp;c1350;gc/porsche-normal.webp" alt="">
    <div id='basicInfo'>
      <div class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_1.png">
        </div>
        <span class='basicInfoSpanOne'>FROM 차량기본가격</span>
        <span class='basicInfoSpanTwo'>&#8361;37,260,000</span>
        <span class='basicInfoSpanThree'>(개별소비세 5%기준)</span>
      </div>
      <div class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_2.png">
        </div>
        <span class='basicInfoSpanOne'>UP TO 복합연비</span>
        <span class='basicInfoSpanTwo'>15.3km/ℓ</span>
        <span class='basicInfoSpanThree'></span>
      </div>
      <div class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_3.png">
        </div>
        <span class='basicInfoSpanOne'>UP TO 배기량</span>
        <span class='basicInfoSpanTwo'>1,598cc</span>
        <span class='basicInfoSpanThree'></span>
      </div>
      <div class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_4.png">
        </div>
        <span class='basicInfoSpanOne'>UP TO 최고출력(ps/rpm)</span>
        <span class='basicInfoSpanTwo'>180/5,500</span>
        <span class='basicInfoSpanThree'></span>
      </div>
      <div class='basicInfoItem' style="borderRight: 1px solid grey;">
        <div class='basicInfoImgDiv'>
          <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_5.png">
        </div>
        <span class='basicInfoSpanOne'>HEV 전용 부품</span>
        <span class='basicInfoSpanTwo'>10년/20만km</span>
        <span class='basicInfoSpanThree'></span>
      </div>
    </div>
    <img src="https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-22/zoom2/637a33d7-c4a9-11e9-80c5-005056bbdc38;sI;twebp/porsche-zoom2.webp" alt="">
    <div id='outsideDetail'>
      <img class='outsideDetailImg' src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_full_led_headlamps_w.jpg" alt="">
      <img class='outsideDetailImg' src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_led_rear_combination-lamp_w.jpg" alt="">
      <img class='outsideDetailImg' src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_hidden_rear_wiper_w.jpg" alt="">
      <img class='outsideDetailImg' src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20210708/sorento-hev_pe_exterior_detail_04.jpg" alt="">
    </div>
    <img src="https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-07/zoom2/a3f1236f-e75d-11e8-bec8-0019999cd470;sI;twebp/porsche-zoom2.webp" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
  .home{
    width:100%;
  }

  img{
    width: 100%;
  }

  h1{
    text-align: left;
  }

  #outsideDetail{
    width:100%;
  }

  #basicInfo{
    display: flex;
    justify-content: center;
  }
  

  .basicInfoItem{
    display: flex;
    width: 220px;
    height: 18vh;
    text-align: center;
    flex-direction: column;
    line-height: 30px;
    border-left: 1px solid grey;
  }

  .basicInfoImgDiv{
    height: 45%;
    display: flex;
    padding-bottom: 6px;
    justify-content: center;
    align-items: flex-end;
  }

  .basicInfoImgDiv > img{
    height: 70%;
    object-fit: contain;
    text-align: center;
  }

  .basicInfoItem > img{
    width: 60px !important;
  }

  .basicInfoSpanOne{
    font-size: 2vh;
  }

  .basicInfoSpanTwo{
    font-size: 3vh;
    font-weight: 800;
  }

  .outsideDetailImg{
    width:25%;
    height: 300px;
    border: 1px solid white;
}
</style>