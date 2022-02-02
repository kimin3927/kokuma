<template>
  <div class="sorentoHybrid">
    <div class="firstDiv" style="display:relative">
      <!-- <img :src='element.bigImg[0]'> -->
      <div class="comment1">
        <h1>
          새로운 시대의 플레이</br>
          The 2022 쏘렌토 하이브리드
        </h1>
      </div>
      <div class="comment1_5">
      <span>※ 상기 차량 이미지와 사양 구성은 트림, 인승 모델별, 엔진, 선택 사양에 따라 다르게 적용되며 색상은 실제 색상과 차이가 있을 수 있습니다.</span>
    </div>
    </div>
    <div id='basicInfo'>
      <div v-for="(text, i) in element.basicInfo.text" :key="text" class='basicInfoItem'>
        <div class='basicInfoImgDiv'>
          <img :src="element.basicInfo.imgSrc[i]"> 
        </div>
        <span v-for="(number, j) in element.basicInfo.classForSpan" :key="j" :class='element.basicInfo.classForSpan[j]'>{{element.basicInfo.text[i][j]}}</span>
      </div>
    </div>
    <div id="secondDiv" :style="{backgroundImage:'url(' + element.bigImg[1] + ')'}">
      <div class="comment1">
        <h2>외장</h2>
        <h1>Refined Boldness</h1>
        <h2>혁신으로 완성된 정제된 강렬함, SUV의 새로운 디자인을 제시하다.</h2>
      </div>
    </div>    
    <div id='outsideDetail'>
      <div v-for="div in element.outSideImg" :key="div.src" :style="{backgroundImage:'url('+ div.src +')'}" class='outsideDetailImg' :src="imgSrc">
      <h3>{{div.comment}}</h3>
      </div>
    </div>
    <div id="thirdDiv" :style="{backgroundImage:'url(' + element.bigImg[2] + ')'}">
      <div class="comment1">
        <h3>그래비티</h3>
        <h2>존재감 있는 블랙포인트로 강인함을 더하다</h2>
        <h3>*라디에이터 그릴 상단 몰딩, 루프랙, 서라운드 몰딩, 1열 도어 사이드 가니쉬</h3>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'sorentoHybrid',
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
        outSideImg : [
          {src:"https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_full_led_headlamps_w.jpg", comment:"프로젝션 LED 헤드램프"},
          {src:"https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_led_rear_combination-lamp_w.jpg", comment:"LED 리어 콤비네이션램프"},
          {src:"https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20200706/20200706/4thsorento-hev_exterior_hidden_rear_wiper_w.jpg", comment:"히든 리어와이프"},
          {src:"https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/features/20210708/sorento-hev_pe_exterior_detail_04.jpg", comment:"19인치 전면가공휠"},
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

  * {
    box-sizing: content-box !important;
  }

  template{
    position: relative;    
  }

  .sorentoHybrid{
    height:100%;
    position: relative;
  }

  .comment1{
    position: relative;
    display: inline-block;
    top : 10vh;
    left : 30vh; 
  }

  .firstDiv{
    position: relative;
    text-align: left;
    width: 100%;
    height: 102vh;
    background-size: 100vw 100vh;
    background-image: url(https://files.porsche.com/filestore/image/multimedia/none/992-carrera-360-exterior-001/normal/f244be45-796a-11ea-80c9-005056bbdc38;sK;twebp;c1350;gc/porsche-normal.webp);
  }

  #secondDiv {
    position: relative;
    text-align: left;
    width: auto;
    height: 102vh;
    background-size: cover;
    background-repeat: no-repeat;
  }

  #thirdDiv{
    position: relative;
    text-align: left;
    width: auto;
    height: 102vh;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .comment1 h1 {
    text-align: left;
    font-size: 5vh;
    letter-spacing: -0.05em;
    font-weight: 600;
    color: white;
    text-shadow: rgb(80 80 80) 0 0 5px !important;
  }

  .comment1 h2{
    text-align: left;
    font-size: 3vh;
    letter-spacing: -0.05em;
    color: white;
    text-shadow: rgb(80 80 80) 0 0 5px !important;
  }

  .comment1 h3{
    text-align: left;
    font-size: 2vh;
    letter-spacing: -0.05em;
    color: white;
    text-shadow: rgb(80 80 80) 0 0 5px !important;
  }

  .comment1_5{
    position: absolute;
    bottom : 2vh;
    left : 10vh;
  }

  .comment1_5 span{
    color: white;
    font-size: 2vh;
  }
  img{
    width: 100%;
  }

  h1, h2, h3{
    text-align: left;
  }

  #outsideDetail{
    width:100%;
    display: flex;
  }

  #basicInfo{
    display: flex;
    justify-content: center;
  }

  .basicInfoItem{
    display: flex;
    width: 13%;
    height: 19vh;
    text-align: center;
    flex-direction: column;
    line-height: 3vh;
    border-left: 1px solid grey;    
    border-collapse: collapse;
  }

  .basicInfoItem:last-child{
    border-right: 1px solid grey;
  }

  .basicInfoImgDiv{
    height: 45%;
    display: flex;
    padding-bottom: 1vh;
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
    font-size: 3.5vh;
    font-weight: 800;
  }

  .basicInfoSpanThree{
    font-size: 1vh;
  }

  .outsideDetailImg{
    width:25%;
    height: 300px;
    border: 1px solid white;
    text-align: left;
  }

  .outsideDetailImg h3{
    display: inline-block;
    position: relative;
    font-size: 1.5em;
    top: 3vh;
    left: 3vh;
    color: white;
  }

  .outsideDetailImg:nth-child(4) h3{
    display: inline-block;
    position: relative;
    font-size: 1.5em;
    top: 3vh;
    left: 3vh;
    color: black;
  }

</style>