<template>
  <div id='header'>
    <div id='topHeader'>
      <div class='topHeaderItemDiv'><a href="" class='topHeaderItem'>기아소식</a>  | <a href="" class='topHeaderItem'>인재채용</a> | <a href="" class='topHeaderItem'>EN Brochure</a></div>
      <div class='topHeaderItemDiv'><a href="" class='topHeaderItem'>로그인</a>  | <a href="" class='topHeaderItem'>회원가입</a> | <a href="" class='topHeaderItem'>마이기아</a> | <a href="" class='topHeaderItem'>SEARCH</a></div>
    </div>
    <div id='middleHeader'>
      <div class='middleHeaderItemDiv'><a href="" class='middleHeaderItem'>차량</a><a href="" class='middleHeaderItem'>구매정보</a><a href="" class='middleHeaderItem'>체험센터</a><a href="" class='middleHeaderItem'>이벤트</a><a href="" class='middleHeaderItem'>고객센터</a></div>
      <div class='middleHeaderItemDiv logoDiv'><img src="https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/09/13140152/%E1%84%80%E1%85%B5%E1%84%8B%E1%85%A1-KIA-%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9-%E1%84%90%E1%85%AE%E1%84%86%E1%85%A7%E1%86%BC.png"></div>
      <div class='middleHeaderItemDiv'><a href="" class='middleHeaderItem'>브랜드</a><a href="" class='middleHeaderItem'>Kia EV</a><a href="" class='middleHeaderItem'>기아멤버스</a></div>
    </div>
    <div id='bottomHeader'>
      <div id='bottomFirstDiv'><a id='productName' href=''>쏘렌토 하이브리드</a></div>
      <div id='bottomSecondDiv'><a href="" class='bottomSecondDivItem'>특징</a><a href="" class='bottomSecondDivItem'>갤러리</a><a href="" class='bottomSecondDivItem'>제원</a><a href="" class='bottomSecondDivItem'>가격</a></div>
      <div id='bottomLastDiv'><a id='productCategory' href="">쏘렌토</a></div>
    </div>
  </div>
</template>

<script>

export default { 
    name: "Header",
}

</script>

<style>
  #topHeader{
    display: flex;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    height: 40px;
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
    padding-left: 15px;
    padding-right: 15px;
   }

    #middleHeader{
      background-color: white;
      height: 110px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .middleHeaderItemDiv{
      /* margin-left: 11%;
      margin-right: 11%; */
    }

    .middleHeaderItemDiv > img {
      width: 120px;
    }

    .logoDiv{
      margin-left: 30px;
      margin-right: 240px;
    }

    .middleHeaderItem{
      font-size: 150%;
      color: black;
      padding-left: 25px;
      padding-right: 25px;
      font-weight: bolder;
    }

   #bottomHeader{
     background-color: black;
     height: 60px;
     padding-top: 8px;
   }

   #productName{
     color: white;
     font-size: 200%;
   }

    #productName:hover{
     color: white;
     font-size: 200%;
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
     font-size: 120%;
   }

   #productCategory:hover{
     text-decoration: underline !important;
   }
</style>
