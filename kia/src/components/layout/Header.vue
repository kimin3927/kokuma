<template>
  <div id='header'>
    <div id='topHeader'>
      <div class="topHeaderItemDiv" v-for="(div,i) in element.topHeader" :key=i>
        <router-link v-for="title in div" :key="title.name" :to="title.link" class='topHeaderItem'>{{ title.name }}</router-link>
      </div>
    </div>
    <div id='middleHeader'>
      <div v-for="(div,i) in element.middleHeader" :key=i>
        <router-link v-for="title in div" :key="title.name" :to="title.link" class='middleHeaderItem'>
          <img v-if="title.src"  :src="element.middleHeader[i][0].src" alt="">
          {{ title.text }}
        </router-link>
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
        middleHeader: [
          [
            {text: "차량", name: "차량", link: "https://www.naver.com/"},
            {text: "구매정보", name: "구매정보", link: "https://www.naver.com/"},
            {text: "체험센터", name: "체험센터", link: "https://www.naver.com/"},
            {text: "이벤트", name: "이벤트", link: "https://www.naver.com/"},
            {text: "고객센터", name: "고객센터", link: "https://www.naver.com/"}
          ],
          [
            {name: "mainLogo", src: "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/logo.png", link: "https://www.naver.com/"},
          ],
          [
            {text: "브랜드", name: "브랜드", link: "https://www.naver.com/"},
            {text: "kia EV", name: "kia EV", link: "https://www.naver.com/"},
            {text: "기아멤버스", name: "기아멤버스", link: "https://www.naver.com/"},
          ]
        ],
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
                link : "/"
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
  mounted(){
    
  },
    methods:{
      showSubmenu(e){
        console.log(this.element.slideMenu.carView)
        this.element.slideMenu.carView = !this.element.slideMenu.carView;
        // if(this.element.slideMenu.carView == "false"){
        //   this.element.slideMenu.carView = "true";
        // } else this.element.slideMenu.carView = "false";
      }
    }
}

</script>

<style>

#slideMenu{
  text-align: center;
  transition: linear 3000ms;
}

.carDiv{
  display: inline;
  margin-right: 3vw;
}

.carDiv img {
  width: 15vw;
  display: 
}

#vehicle{
  width: 90vw;
  min-height: 20vh;
  height: 100%;
  display: inline-block;
  position: relative;
  top: -4.7vh;
  background-color: rgba(218, 201, 179, 0.8);
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
    position: fixed;
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
    justify-content: space-evenly;
    align-items: center;
  }

  .middleHeaderItem:hover{
    color: black !important;
    text-decoration: underline !important;
  }

  #middleHeader img {
    width: 120px;
  }

  .logoDiv{
    margin-left: 30px;
    margin-right: 240px;
  }

  .middleHeaderItem{
    font-size: 120%;
    color: black !important;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: bolder;
  }

  #bottomHeader{
    background-color: black;
    border-bottom: grey 1px solid;
    height: 6vh;
    padding-top: 5px;
  }

  .productName{
    color: white;
    font-size: 170%;
  }

  .productName:hover{
    color: white;
    text-decoration: underline !important;
  }

  #bottomFirstDiv{
    float:left;
    margin-left: 10.7%;
    margin-right: 4%;
  }

  #bottomSecondDiv{
    float:left;
    padding-top: 10px;
  }
  
  .bottomSecondDivItem{
    color: rgb(179, 177, 177) !important;
    font-size: 120%;
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
    font-size: 110%;
  }

  .productCategory:hover{
    text-decoration: underline !important;
  }
</style>
