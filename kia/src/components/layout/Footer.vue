<template>
	<div id='footerDiv'>
		<div id='footerWrapperFirst'>
			<div class="footeridChild" id='footerFirst'>
				<router-link v-for="title in element.first.first" :key="title.name" :to="title.link">{{ title.name }}</router-link>
			</div>
			<div class="footeridChild" id='footerSecond'>EV
				<router-link v-for="title in element.first.second" :key="title.name" :to="title.link">{{ title.name }}</router-link>
			</div>
			<div class="footeridChild" id='footerThird'>승용
				<router-link v-for="title in element.first.third" :key="title.name" :to="title.link">{{ title.name }}</router-link>
			</div>
			<div class="footeridChild" id='footerFourth'>RV
				<router-link v-for="title in element.first.fourth" :key="title.name" :to="title.link">{{ title.name }}</router-link>
			</div>
			<div class="footeridChild" id='footerFifth'>
				Award
				<div v-for="div in element.first.fifth" :key="div.text1" class="awardDiv">
					<div>
						<img :src="div.imgSrc" alt="">
					</div>
					<div>
						{{div.text1}}</br>
						{{div.text2}}</br>
						{{div.text3}}</br>
					</div>
				</div>
			</div>
		</div>
		<div id='footerWrapperSecond'>
			<div>
				<a v-for="title in element.second" :key="title.name" :href="title.link" :class="title.class" target="_blank"></a>
			</div>
			<div class="familyLink">
				<a class="nationFlag" href="https://www.kia.com/kr/util/Kia-Motors-Global.html"></a>
				<a href="https://www.kia.com/kr/util/Kia-Motors-Global.html">한국</a>
			</div>	
		</div>
	</div>
</template>

<script>

export default { 
	name: "Footer",
	data(){
		return {
			element : {
				first : {
					first : [
					{name: "온라인 견적", link : "https://www.naver.com"},
					{name: "구매 상담 신청", link : "https://www.naver.com"},
					{name: "이달의 구매혜택", link : "https://www.naver.com"},
					{name: "시승 예약", link : "https://www.naver.com"},
					{name: "카탈로그/가격표", link : "https://www.naver.com"},
					{name: "영업망 안내", link : "https://www.naver.com"},
					{name: "기아렌터카", link : "https://www.naver.com"},
					{name: "모델 비교", link : "https://www.naver.com"},
					{name: "진행중인 이벤트", link : "https://www.naver.com"},
					{name: "고객센터", link : "https://www.naver.com"},
					{name: "사이트맵", link : "https://www.naver.com"},
					],
					second : [
						{name:"EV6", link: "/"},
						{name:"니로 EV", link: "/"},
						{name:"봉고Ⅲ EV ", link: "/"},
						{name:"탑차 EV", link: "/"},
						{name:"성력 EV", link: "/"},
					],
					third : [
						{name : "모닝", link : "/"},
						{name : "레이", link : "/"},
						{name : "K3", link : "/"},
						{name : "K3 GT", link : "/"},
						{name : "K5", link : "/"},
						{name : "K5 HEV", link : "/"},
						{name : "스팅어", link : "/"},
						{name : "K8", link : "/"},
						{name : "K8 HEV", link : "/"},
						{name : "K9", link : "/"},
					],
					fourth : [
						{name : "니로", link : "/"},
						{name : "셀토스", link : "/"},
						{name : "스포티지", link : "/"},
						{name : "스포티지 HEV", link : "/"},
						{name : "쏘렌토", link : "/"},
						{name : "쏘렌토 HEV", link : "/"},
						{name : "모하비", link : "/"},
						{name : "카니발", link : "/"},
						{name : "카니발 하이리무진", link : "/"},
					],
					fifth : [
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark05.jpg",
							text1 : "21년 국가고객만족도(NCSI)",
							text2 : "RV(6년 연속), 경형(7년 연속),",
							text3 : "중형(2년 연속), 대형승용부문 1위"
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark01.jpg",
							text1 : "21년 한국 산업의 서비스 품질지수",
							text2 : "우수 콜센터 선정 (18년 연속)",
							text3 : ""
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark02.jpg",
							text1 : "20년 한국산업의 서비스 품질지수",
							text2 : "자동차 A/S부문 1위(7년 연속)",
							text3 : ""
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark03.jpg",
							text1 : "21년 대한민국 국가브랜드 대상",
							text2 : "자동차 멤버십 부문 1위(10년 연속)",
							text3 : ""
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark07.jpg",
							text1 : "21년 한국서비스품질지수(KS-SQI)",
							text2 : "자동차 판매서비스 부문 1위",
							text3 : ""
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark06.png",
							text1 : "웹 접근성 품질인증",
							text2 : "",
							text3 : ""
						},
					]
				},
				second : [
					{link: "https://members.kia.com/kr/view/kindex.do?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_redmembers", name: "기아멤스", class: "helpLink kiared"},
					{link: "https://play.kia.com/main.do?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_playkia", name: "기아공식블로그", class: "helpLink playkia"},
					{link: "https://m.post.naver.com/my.nhn?memberNo=40524516&navigationType=push?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_footer_naverpost", name: "카피엔스", class: "helpLink naver"},
					{link: "https://www.facebook.com/kia.co.kr?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_footer_facebook", name: "facebook", class: "helpLink facebook"},
					{link: "https://www.instagram.com/kia.kor", name: "instagram", class: "helpLink instagram"},
					{link: "https://www.youtube.com/c/KiaKorea", name: "youtube", class: "helpLink youtube"},
				]
			}
		}	
	},
	mounted(){
		console.log(typeof this.element.first.first[0].link)
	}
}
</script>

<style>
	#footerDiv{
		background-color: #05141f;
		height: 820px;
		padding-top: 6%;
		padding-left:17%;
		padding-right:17%;
		line-height: 30px;
		text-align: left;
	}

	.footeridChild{
		display: inline-flex;
		flex-direction: column;
		width: 150px;
		height: 500px;
		margin-right: 60px;
		color: white;
		font-size: 14px;
		text-align: left;
	}

	.footeridChild a{
		color: rgba(255,255,255, 0.6);
		font-size: 14px;
		font-weight: 500;
	}

	.footeridChild a:hover{
		color: white;
		text-decoration: green wavy underline;
		font-size: 14px;
		font-weight: 500;
	}

	#footerFirst{
		margin-right: 270px;
		line-height: 40px;
	}

	#footerFirst a{
		color: white;
		font-weight: 600;	
		font-size: 17px;
	}

	#footerFifth{
		margin: 0;
		font-weight: 800;	
		color:white
	}

	.awardDiv{
		display: flex;
		justify-content:left;
		width: 280px;
		margin-bottom: 20px;
		font-size: 12px;
		font-weight: 500;
		line-height: 160%;
		color:rgba(255,255,255, 0.6);
	}

	.awardDiv div{
		margin-right: 10px;
	}

	.awardDiv img{
	width: 50px;
	height: 30px;
	}
	
	#footerWrapperSecond{
		display: flex;
		justify-content: space-between;
	}

	.familyLink{
		display: table-cell;
		vertical-align: middle;
		border: 1px solid yellow;
		width: 400px;
	}

	.familyLink .nationFlag{
		display: inline-block;
		width: 50px;
		height: 30px;
		background-image: url(https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/img_kor.jpg);
		background-repeat:no-repeat;
	}

	.familyLink a{
		color:white;
		vertical-align: middle;
	}

	.familyLink a:hover{
		color:white;
		text-decoration-line: underline !important;
	}
	

	.helpLink {
		height: 50px;
		display:inline-block;
		background-image: url(https://www.kia.com/content/dam/kwcms/kr/ko/images/common/sp_sns.png);
		background-repeat:no-repeat;
	}

	.helpLink:hover {
		color: transparent;
	}

	.kiared{
		width: 120px;
		background-position: 10px 11px;
	}

	.playkia{
		width: 50px;
		background-position: -115px 11px;
	}

	.naver{
		width: 50px;
		background-position: -170px 11px;
	}

	.instagram{
		width: 50px;
		background-position: -290px 11px;
	}
	
	.facebook{
		width: 50px;
		background-position: -228px 11px;
	}

	.youtube{
		width: 50px;
		background-position: -350px 11px;
	}

@media screen and (max-width: 1000px) { 
	#footerDiv{
		background-color: #05141f;
		height: 740px;
		padding-top: 15%;
		padding-left:5%;
		padding-right:5%;
		line-height: 30px;
		text-align: left;
	}

	#footerFirst{
		margin-right: 100px;
		line-height: 40px;
	}

	.footeridChild{
		display: inline-flex;
		flex-direction: column;
		width: 150px;
		height: 500px;
		margin-right: 20px;
		color: white;
		font-size: 14px;
		text-align: left;
	}

	#footerFifth{
		display: none;
		margin: 0;
		font-weight: 800;	
		color:white
	}

}

</style>