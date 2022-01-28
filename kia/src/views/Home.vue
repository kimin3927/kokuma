<template>
  <div class="home">
    <img :src='element.bigImg[0]'>
    <div id='basicInfo'>
      <div v-for="(text, i) in element.basicInfo.text" :key="text" class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img :src="element.basicInfo.imgSrc[i]"> <!--이런식으로 말고, 반복문의 i를 사용해서 methods 또는 computed를 활용해서 넣을 수는 없는지?? !-->
        </div>
        <span v-for="(number, j) in element.basicInfo.classForSpan" :key="j" :class='element.basicInfo.classForSpan[j]'>{{element.basicInfo.text[i][j]}}</span>
      </div>
    </div>
    <img :src='element.bigImg[1]'>
    <div id='outsideDetail'>
      <img v-for="imgSrc in element.outSideImgSrc" :key="imgSrc" class='outsideDetailImg' :src="imgSrc">
    </div>
    <img :src='element.bigImg[2]'>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      element: {
        basicInfo: {
          text: [["FROM 차량기본가격", "₩37,260,000", "(개별소비세 5%기준)"], ["UP TO 복합연비", "15.3km/ℓ"], ["UP TO 배기량", "1,598cc"], ["UP TO 최고출력(ps/rpm)", "180/5,500"], ["HEV 전용 부품", "10년/20만km"]],
          classForSpan: ["basicInfoSpanOne", "basicInfoSpanTwo", "basicInfoSpanThree"],
          imgSrc: [
            "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_1.png", 
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_2.png",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_3.png",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_4.png",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_5.png"]
        },
        outSideImgSrc : [
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_full_led_headlamps_w.jpg",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_led_rear_combination-lamp_w.jpg",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_hidden_rear_wiper_w.jpg",
          "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20210708/sorento-hev_pe_exterior_detail_04.jpg"
        ],
        bigImg : [
          "https://files.porsche.com/filestore/image/multimedia/none/992-carrera-360-exterior-001/normal/f244be45-796a-11ea-80c9-005056bbdc38;sK;twebp;c1350;gc/porsche-normal.webp",
          "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-22/zoom2/637a33d7-c4a9-11e9-80c5-005056bbdc38;sI;twebp/porsche-zoom2.webp",
          "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-07/zoom2/a3f1236f-e75d-11e8-bec8-0019999cd470;sI;twebp/porsche-zoom2.webp",
        ]
      },
    }
  },
  computed : {
    selectBasicInfo: function(i){
      const basicSrc = "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/icon_kv_spec_"
      return basicSrc + i + "png"
    }
  },
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
    width: 13%;
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

  .basicInfoSpanThree{
    margin-top: 2%;
  }

  .outsideDetailImg{
    width:25%;
    height: 300px;
    border: 1px solid white;
}
</style>