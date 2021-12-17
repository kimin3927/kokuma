<template>
  <div id='header'>
    <div id='topHeader'>
      <div class='topHeaderItemDiv'><a href="https://www.kia.com/kr/about-kia/prcenter/news-list.html" class='topHeaderItem'>기아소식</a>  | <a href="http://career.kia.com/kfront/main.do?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_recruit" class='topHeaderItem'>인재채용</a> | <a href="" class='topHeaderItem'>EN Brochure</a></div>
      <div class='topHeaderItemDiv'><a href="" class='topHeaderItem'>로그인</a>  | <a href="" class='topHeaderItem'>회원가입</a> | <a href="" class='topHeaderItem'>마이기아</a> | <a href="" class='topHeaderItem'>SEARCH</a></div>
    </div>
    <div id='middleHeader'>
      <div class='middleHeaderItemDiv'><a class='middleHeaderItem' @click="kimin">차량</a><a href="" class='middleHeaderItem'>구매정보</a><a href="" class='middleHeaderItem'>체험센터</a><a href="" class='middleHeaderItem'>이벤트</a><a href="" class='middleHeaderItem'>고객센터</a></div>
      <div class='middleHeaderItemDiv logoDiv'><a href='/'><img src="https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/09/13140152/%E1%84%80%E1%85%B5%E1%84%8B%E1%85%A1-KIA-%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-%E1%84%90%E1%85%AE%E1%84%86%E1%85%A7%E1%86%BC.png"></a></div>
      <div class='middleHeaderItemDiv'><a href="" class='middleHeaderItem'>{{ this.message.message }}</a><a href="" class='middleHeaderItem'>Kia EV</a><a href="" class='middleHeaderItem'>기아멤버스</a></div>
    </div>
    <div id='bottomHeader'>
      <div id='bottomFirstDiv'><a id='productName' href='/'>{{ this.testComputed }}</a></div>
      <div id='bottomSecondDiv'><a href="/" class='bottomSecondDivItem'>특징</a>  <router-link to="/Gallery" class='bottomSecondDivItem'>갤러리</router-link><a href="/Dimension" class='bottomSecondDivItem'>제원</a><a href="/Price" class='bottomSecondDivItem'>가격</a></div>
      <div id='bottomLastDiv'><a id='productCategory' href="">쏘렌토</a></div>
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
        Header: document.querySelector("#header"),
        person: {
          koko: 'kimin'
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
      kimin(){
        alert(this.person)
        // console.log(this.Header)
        // console.log(this.person.koko)
      }
    }
}

</script>

<style>
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
     height: 5vh;
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
