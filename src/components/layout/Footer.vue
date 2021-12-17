<template>
    <div id='footerDiv'>
        <div id='footerWrapperFirst'>
            <div id='footerFirst'>
                <a href="">김기민</a>
                <a href=""> 온라인 견적</a>
                <a href=""> 구매 상담 신청</a>
                <a href=""> 이달의 구매혜택</a>
                <a href=""> 시승 예약</a>
                <a href=""> 카탈로그/가격표</a>
                <a href=""> 영업망 안내</a>
                <a href=""> 기아렌터카</a>
                <a href=""> 모델 비교</a>
                <a href=""> 진행중인 이벤트</a>
                <a href=""> 고객센터</a>
                <a href=""> 사이트맵</a>
            </div>
        </div>
    </div>
</template>

<script>

export default { 
    name: "Footer",
}

</script>

<style>
    #footerDiv{
        width:100%;
        background-color: #1a4977;
        height: 820px;
        padding-top:4%;
        padding-left:11%;
        padding-right:11%;
        line-height: 30px;
    }
    a{
        color: white !important;
        font-size: 110%;
    }

    #footerFirst{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-weight: 800;
    }

    #footerWrapperFisrt{
    }
</style>