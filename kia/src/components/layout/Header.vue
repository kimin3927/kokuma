<template>
  <div id='header'>
    <app-content></app-content>
    <div id='topHeader'>
      <div v-for="i in element.topHeader.title" :key="i" class='topHeaderItemDiv'> <!-- numbers가 아니라 i in element.topHeader.title을 사용하고 싶었으나 에러로 대체. 불필요하게 numbers를 사용함 안만들어도 됐을 것 !-->
        <a v-for="title in i" :key="title" :href="element.topHeader.links[0]" class='topHeaderItem'>{{title}}</a>|
      </div>
    </div>
    <div id='middleHeader'>
      <div class='middleHeaderItemDiv'>
        <router-link to="" @click.native="showSubmenu" v-for="title in element.middleHeader.title[0]" :key="title" class='middleHeaderItem'>{{ title }}</router-link>
      </div>
      <div class='middleHeaderItemDiv logoDiv'>
        <router-link to='/'>
          <img src="https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/09/13140152/%E1%84%80%E1%85%B5%E1%84%8B%E1%85%A1-KIA-%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-%E1%84%90%E1%85%AE%E1%84%86%E1%85%A7%E1%86%BC.png">
        </router-link>
      </div>
      <div class='middleHeaderItemDiv'>
        <router-link v-for="title in element.middleHeader.title[1]" :key="title" to="/" class='middleHeaderItem'>{{title}}</router-link>
      </div>
    </div>
    <div id='bottomHeader'>
      <div id='bottomFirstDiv'>
        <router-link id='productName' to="/">{{ this.testComputed }}</router-link>
      </div>
      <div id='bottomSecondDiv'>
        <router-link to="/" class='bottomSecondDivItem'>특징</router-link>
        <router-link to="/Gallery" class='bottomSecondDivItem'>갤러리</router-link>
        <router-link to="/Dimension" class='bottomSecondDivItem'>제원</router-link>
        <router-link to="/Price" class='bottomSecondDivItem'>가격</router-link>
      </div>
      <div v-if="element.slideMenu.carView" id="slideMenu">
        <div v-for="id in element.slideMenu.id" :key="id" :id="id">
          <div v-for="(img) in element.slideMenu.carImg[0]" :key="img" class='carDiv'>
            <router-link to=""><img src="../../assets/carImg/sedan1.png"></router-link>
          </div>
        </div>
      </div>
      <div id='bottomLastDiv'>
        <router-link id='productCategory' to="">쏘렌토</router-link>
      </div>
    </div>

  </div>
  
</template>

<script>

export default { 
    name: "Header",
    props: [
      'message',
    ],
    data: function () {
      return {
        numbers: [0,1],
        element: {
          topHeader: {
            title: [["기아소식", "인재채용", "EN Brochure"], ["로그인", "회원가입", "마이기아", "SEARCH"]],
            links: ["https://www.naver.com/", "https://www.daum.net", "wwww.youtube.com"]
          },
          middleHeader: {
            title: [["차량", "구매정보", "체험센터", "이벤트","고객센터"], ["브랜드" , "Kia EV", "기아멤버스"]]
          },
          slideMenu: {
            id : ["vehicle", "buyInfo", "testCenter", "event", "customerService"],
            carImg : [[
              "../../assets/carImg/sedan1.png",
              "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan2.png",
              "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan3.png",
              "C:\Users\k\Desktop\Kevin\src\assets\carImg\sedan4.png",
            ]],
            carView : false,
          } 
        }
      }
    },
    computed: {
      // 계산된 getter
      testComputed: function () {
        let result;
        console.log(this.message.message);
        if(this.message.message === "1") { result = "숫자로들어왔네"}
        else {result=  "문자네" ;}
        return result;
      }
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
  width: 15vw
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

    .middleHeaderItemDiv > a > img {
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

   #productName{
     color: white;
     font-size: 170%;
   }

    #productName:hover{
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

   #bottomLastDiv{
     float:right;
     margin-right: 500px;;
     padding-top: 10px;

   }

   #productCategory{
     color: white;
     font-size: 110%;
   }

   #productCategory:hover{
     text-decoration: underline !important;
   }
</style>
