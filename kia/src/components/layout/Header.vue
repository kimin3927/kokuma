<template>
  <div id='header'>
    <div id='topHeader'>
      <div class="topHeaderItemDiv" v-for="(div,i) in element.topHeader" :key=i>
        <router-link v-for="title in div" :key="title.name" :to="title.link" class='topHeaderItem'>{{ title.name }}</router-link>
      </div>
    </div>
    <div id='middleHeader'>
      <div class="middleGroupOne">
        <ul>
          <li class="middleHeaderItem">
            <span @click="showSubmenu">차량</span>
            <div @click="closeModal" class="slideDownModal"></div>
            <div class="vehicle">
              <div class="vehicleSelectDiv">
                <div class="vehicleInputDiv"><input class="vehicleInput" type="radio" name="vehicle">EV</div>
                <div class="vehicleInputDiv"><input class="vehicleInput" type="radio" name="vehicle">승용</div>
                <div class="vehicleInputDiv"><input class="vehicleInput" type="radio" name="vehicle">RV</div>
                <div class="vehicleInputDiv"><input class="vehicleInput" type="radio" name="vehicle">상용/택시/버스</div>
              </div>
              <div id="vehicleContents">
              <div id="vehicleContentsFriends">
                <div v-for="div in element.middleHeader.vehicle.vehicleFriends.EV" :key="div.text" class="vehicleFriends">
                  <img :src="div.img" class="vehicleImg" />
                  <span > {{ div.text }}</span>
                </div>
              </div>
              <div>
              <span class="vehicleTOC" v-for="text in element.middleHeader.vehicle.arrowMenu" :key="text.text"><a href="">
                {{ text.text }}
              </a></span>
              </div>
              </div>
            </div>
          </li>
          <li class="middleHeaderItem">
            <span @click="showSubmenu">구매정보</span>
            <div @click="closeModal" class="slideDownModal"></div>
            <div class="slideMenu">
              <ul class="downMenu">
                <li><a href="">온라인 견적</a></li>
                <li><a href="">상품추천</a></li>
                <li><a href="">모델 비교</a></li>
                <li><a href="">카탈로그/가격표</a></li>
                <li><a href="">이달의 구매혜택</a></li>
                <li><a href="">영업망 안내</a></li>
                <li><a href="">구매상담신청</a></li>
                <li><a href="">구매 가이드</a></li>
                <li><a href="">기아렌터카</a></li>
                <li><a href="">기아플렉스</a></li>
              </ul>
            </div>
          </li>
          <li class="middleHeaderItem">
            <span @click="showSubmenu">체험센터</span>
            <div @click="closeModal" class="slideDownModal">3333</div>
          </li>
          <li class="middleHeaderItem">
            <span @click="showSubmenu">이벤트</span>
            <div @click="closeModal" class="slideDownModal">4444</div>
          </li>
          <li class="middleHeaderItem">
            <span @click="showSubmenu">고객센터</span>
            <div @click="closeModal" class="slideDownModal">555</div>
          </li>
        </ul>
      </div>
      <div>
        <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/common/logo.png" alt="">
      </div>
      <div>
        <a class="middleHeaderItem" href="https://www.kia.com/kr/vehicles/theallnewkianiro/microsite.html"></a>
        <a class="middleHeaderItem" href="https://www.kia.com/kr/kia-ev/brand.html">Kia EV</a>
        <a class="middleHeaderItem" href="https://www.kia.com/kr/service/information/q-trust.html">기아 멤버스</a>
      </div>
    </div>
    <div id='bottomHeader'>
      <div v-for="div in element.bottomHeader" :key="div.name" :id='div.name'>
        <router-link v-for="item in div.contents" :key="item.name" :class="item.class" :to="item.link">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div v-if="element.slideMenu.carView" id="slideMenu">
      <div v-for="id in element.slideMenu.id" :key="id" :id="id">
        <div v-for="(img) in element.slideMenu.carImg[0]" :key="img" class='carDiv'>
          <router-link to=""><img src="../../assets/carImg/sedan1.png"></router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default { 
  name: "Header",
  data: function () {
    return {
      element: {
        topHeader: [
          [
            {name: "기아소식", link: "https://www.naver.com/"},
            {name: "인재채용", link: "https://www.naver.com/"},
            {name: "EN Brochure", link: "https://www.naver.com/"}
          ],
          [
            {name: "로그인", link: "https://www.naver.com/"},
            {name: "회원가입", link: "https://www.naver.com/"},
            {name: "마이기아", link: "https://www.naver.com/"},
            {name: "SEARCH", link: "https://www.naver.com/"}
          ]
        ],
        middleHeader : {
          vehicle : {
            arrowMenu : [
              { text:"온라인견적", link : ""},
              { text:"카탈로그/가격표", link : ""},
              { text: "이달의 구매혜택", link : ""},
              { text: "구매 상담신청", link : ""},
              { text: "시승 예약", link : ""},
            ],
            vehicleFriends :{
              EV : [
                {text: "EV6", img : "	https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/img_ev6.png"},
                {text: "니로 EV", img : "https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/img_niro-ev.png"},
                {text: "봉고Ⅲ EV", img : "https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/img_bongo3-ev.png"},
                {text: "탑차 EV", img : "https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/img_top_car-ev.png"},
                {text: "성력 EV", img : "	https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/img_construct_sung-ev.png"},
              ],
            }
          }
        },
        bottomHeader: [
          {
            name: "bottomFirstDiv", 
            contents : [{
              name : "쏘렌토",
              class: "productName",
              link : "/"
            }]
          },
          {
            name: "bottomSecondDiv", 
            contents : [
              {
                name : "특징",
                class: "bottomSecondDivItem",
                link : "/"
              },
              {
                name: "갤러리",
                class: "bottomSecondDivItem",
                link : "/"
              },
              {
                name: "제원",
                class: "bottomSecondDivItem",
                link : "/"
              },
              {
                name: "가격",
                class: "bottomSecondDivItem",
                link : "/Price"
              }
            ]
          },
          {
            name: "bottomLastDiv", 
            contents : [{
              name : "쏘렌토",
              class: "productCategory",
              link : "/"
            }]
          }
        ],
        slideMenu: {
          id : ["vehicle", "buyInfo", "testCenter", "event", "customerService"],
          carImg : [[
            "../../assets/carImg/sedan1.png",
            "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan2.png",
            "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan3.png",
            "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan4.png",
          ]],
          carView : false,
        } ,
        carView: false
      }
    }
  },
  computed:{
  },
  watch: {
  },
  mounted(){
  },
    methods:{
      showSubmenu(e){
        this.closeModal();
        const targetList = e.currentTarget.closest("li");
        const subDiv = targetList.querySelectorAll("div")
        for(let i = 0; i < 2; i++){
          subDiv[i].classList.add("on")
        }
      },
      closeModal(){
        const onModals = document.querySelectorAll(".on")
        if(onModals){
          for(let div of onModals){
            div.classList.remove("on")
          }
        }
      }
    }
}

</script>

<style>

li{
  list-style-type: none;
}

*{
  box-sizing:content-box !important;
}

.slideMenu{
  text-align: center;
  position: absolute;
  display: none;
  top:12vh;
  width:fit-content;
  background-color: white;
  transition: linear 500ms;
  z-index: 2;
}


.vehicle{
  position: absolute;
  display: none;
  top:12vh;
  left: 0;
  width:fit-content;
  transition: linear 500ms;
  z-index: 2;
  width: 100%;
  height: 22vh;
  background-color: white;
}

.vehicleSelectDiv{
  height: 5vh;
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(184, 182, 182);
  border-bottom: 1px solid rgb(184, 182, 182);
}

.slideMenu a {
  padding: 10px 55px 10px 18px;
  width: 15vh;
  display: inline-block;
}

.slideDownModal{
  position: absolute;
  top: 12vh;
  left:0vh;
  width:100%;
  height: 100vh;
  display: none;
  background-color: rgba(140, 140, 140, 0.4);
  z-index: 1;
  transition: linear 300ms;
}

#middleHeader a {
  color: black;
}

a:hover{
	text-decoration-line: underline !important;
}

.middleGroupOne li {
  float: left;
  height: 3vh;
}

.middleGroupOneItem{
  height: 3vh;
}

.on{
  display: block;
}

.carDiv{
  display: inline;
  margin-right: 3vw;
}

.carDiv img {
  width: 15vw;
}

#buyInfo{
  border: 1px solid white;
  width:50%;
  background-color: burlywood;
  height: 100px;
  display: none;
}

#testCenter{
  border: 1px solid white;
  width:50%;
  background-color: burlywood;
  height: 100px;
  display: none;
}

.downMenu li{
  float:none;
  text-align: left;
  height: 5vh;
  font-size: 0.8em;
  border-top: 1px solid rgb(165, 165, 165);
}

#event{
  border: 1px solid white;
  width:50%;
  background-color: burlywood;
  height: 100px;
  display: none;
}
#customerService{
  border: 1px solid white;
  width:50%;
  background-color: burlywood;
  height: 100px;
  display: none;
}
  #header{
    z-index: 1;
    width: 100%;
  }

  #topHeader{
    display: flex;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    height: 3vh;
  }

  .vehicleInput{
    margin: 0 0.4vw 0 0.4vw;
  }

  #vehicleContents{
    text-align: left;
    height: 77%;
    justify-content: space-between;
  }

  #vehicleContentsFriends{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgb(184, 182, 182);
  }

  .vehicleTOC{
    font-size: 0.6em;
    margin: 0 1em 0 1em;
  }

  .vehicleInputDiv{
    float: left;
    margin: 0 0.6vw 0 0.6vw;
    font-size: 0.8em;
  }

  .vehicleFriends{
    float : left;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .vehicleFriends img{
    width: 17vh;
  }


  a{
    text-decoration: none !important;
  }
  
  .topHeaderItemDiv{
    margin-left: 10.1%;
    margin-right: 12%
  }

  .topHeaderItem{
  color: rgb(179, 177, 177) !important;
  font-size: 75%;
  padding-left: 15px;
  padding-right: 15px;
  }

  .topHeaderItem:hover{
    text-decoration: underline !important;
  }

  #middleHeader{
    background-color: rgba(255, 255, 255, 0.744);
    height: 9vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul{
    margin-bottom: 0 !important;
    padding-left: 0 !important;
  }

  .logoDiv{
    margin-left: 30px;
    margin-right: 240px;
  }

  .middleHeaderItem{
    font-size: 120%;
    color: black !important;
    padding-left: 0.8em;
    padding-right: 0.8em;
    font-weight: bolder;
  }

  #bottomHeader{
    background-color: black;
    height: 6vh;
    line-height: 0;
    vertical-align: middle;
    display: flex;
    align-items: center;
  }

  .middleHeaderItem span:hover{
    cursor: pointer;
    color: black !important;
    text-decoration: underline !important;
  }

  .productName{
    color: white;
    font-size: 1.5em;
  }

  .productName:hover{
    color: white;
    text-decoration: underline !important;
  }

  #bottomFirstDiv{
    display: flex;
    align-items: center;
    margin-left: 10.7%;
    margin-right: 4%;
  }

  #bottomSecondDiv{
    float:left;
    padding-top: 10px;
  }
  
  .bottomSecondDivItem{
    color: rgb(179, 177, 177) !important;
    font-size: 100%;
    padding-right: 18px;
  }

  .bottomSecondDivItem:hover{
    text-decoration-line: underline !important;
  }

  #bottomLastDiv{
    float:right;
    margin-right: 500px;;
    padding-top: 10px;

  }

  .productCategory{
    color: white;
    font-size: 100%;
  }

  .productCategory:hover{
    text-decoration: underline !important;
  }
</style>
