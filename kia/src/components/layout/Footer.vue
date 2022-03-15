<template>
	<div id='footerDiv'>
		<div id='footerWrapperFirst'>
			<div class="footeridChild" id='footerFirst'>
				<a v-for="title in element.first.first" :key="title.name" :href="title.link">{{ title.name }}</a>
			</div>
			<div class="footeridChild" id='footerSecond'>EV
				<a v-for="title in element.first.second" :key="title.name" :href="title.link">{{ title.name }}</a>
			</div>
			<div class="footeridChild" id='footerThird'>승용
				<a v-for="title in element.first.third" :key="title.name" :href="title.link">{{ title.name }}</a>
			</div>
			<div class="footeridChild" id='footerFourth'>RV
				<a v-for="title in element.first.fourth" :key="title.name" :href="title.link">{{ title.name }}</a>
			</div>
			<div class="footeridChild" id='footerFifth'>
				Award
				<div v-for="div in element.first.fifth" :key="div.text1" class="awardDiv">
					<div>
						<img :src="div.imgSrc" alt="">
					</div>
					<div>
						<span v-for="(text,i) in div.text" :key="i">{{text}}</br></span>
					</div>
				</div>
			</div>
		</div>
		<div id='footerWrapperSecond'>
			<div class="familyLink2">
				<a v-for="title in element.second.familyLink1" :key="title.name" :href="title.link" :class="title.class" target="_blank"></a>
			</div>
			<div class="familyLink">
				<div>
					<a class="nationFlag" href="https://www.kia.com/kr/util/Kia-Motors-Global.html"></a>
					<a href="https://www.kia.com/kr/util/Kia-Motors-Global.html">한국</a>
				</div>
				<div @click="familyLink2Handler" class="dropDownLink reverseTriangle">
					<span>Family Site</span>
					<div id="familyList" v-if="settings.familyLink2Open">
						<ul>
							<li v-for="text in element.second.familyLink2" :key="text.name"> 
								<a :href="text.href" target="_blank">{{text.name}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id='footerWrapperThird'>
			<div>
				<a v-for="link in element.third" :key="link.title" :href="link.href"><span :class="link.class"> {{link.title}}</span></a>
			</div>
			<span class="address">사업자 기아㈜ 대표 송호성, 최준영 사업자등록번호 119-81-02316 06797 서울특별시 서초구 헌릉로 12 (양재동)</span>
		</div>
		<div id='footerWrapperFourth'>
			<div style="margin-left:16px;"><a class="home" href="/"><span>홈</span></a></div>
			<div>Ⓒ Kia CORP. ALL RIGHTS RESERVED</div>
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
							text : ["21년 국가고객만족도(NCSI)","RV(6년 연속), 경형(7년 연속),","중형(2년 연속), 대형승용부문 1위"]
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark01.jpg",
							text : ["21년 한국 산업의 서비스 품질지수","우수 콜센터 선정 (18년 연속)"]
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark02.jpg",
							text : ["20년 한국산업의 서비스 품질지수", "자동차 A/S부문 1위(7년 연속)", ""]
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark03.jpg",
							text : ["21년 대한민국 국가브랜드 대상", "자동차 멤버십 부문 1위(10년 연속)", ""]
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark07.jpg",
							text : ["21년 한국서비스품질지수(KS-SQI)", "자동차 판매서비스 부문 1위", ""]
						},
						{
							imgSrc : "https://www.kia.com/content/dam/kwcms/kr/ko/images/common/new/f_mark06.png",
							text : ["웹 접근성 품질인증", "", ""]
						},
					]
				},
				second : {
					familyLink1 :
					[
						{link: "https://members.kia.com/kr/view/kindex.do?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_redmembers", name: "기아멤스", class: "helpLink kiared"},
						{link: "https://play.kia.com/main.do?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_playkia", name: "기아공식블로그", class: "helpLink playkia"},
						{link: "https://m.post.naver.com/my.nhn?memberNo=40524516&navigationType=push?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_footer_naverpost", name: "카피엔스", class: "helpLink naver"},
						{link: "https://www.facebook.com/kia.co.kr?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_footer_facebook", name: "facebook", class: "helpLink facebook"},
						{link: "https://www.instagram.com/kia.kor", name: "instagram", class: "helpLink instagram"},
						{link: "https://www.youtube.com/c/KiaKorea", name: "youtube", class: "helpLink youtube"},
					], familyLink2 : [
						{name:"현대자동차그룹", href:"http://www.hyundai.co.kr/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_hyundai"},
						{name:"브랜드", href:"http://www.kia.com/worldwide/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_worldwide"},
						{name:"기아블로그 'PLAY Kia' ", href:"http://play.kia.com/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_playkiablog"},
						{name:"기아 드라이빙 아카데미", href:"https://drivingexperience.kia.com"},
						{name:"인재 채용", href:"http://career.kia.com/kfront/main.do?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_recruit"},
						{name:"IR", href:"https://worldwide.kia.com/kr/company/ir"},
						{name:"동반성장", href:"http://winwin.hyundai.com/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_winwin"},
						{name:"지속가능경영", href:"https://worldwide.kia.com/kr/company/sustainability/csr/how-it-works"},
						{name:"글로벌경영연구소", href:"http://gbic.hyundai.com/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_gbic"},
						{name:"기아 타이거즈", href:"http://www.tigers.co.kr/?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_tigers"},
						{name:"기아군용", href:"http://military.kia.com/kr/main.do?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_footer_military"},
						{name:"Kia Connect", href:"http://uvo.kia.com/main/index.html?utm_source=kmc_kr&amp;utm_medium=website&amp;utm_campaign=kia_uvo"}
					]
				},
				third : [
					{title:"개인정보 처리방침", href: "https://www.kia.com/kr/legal/privacy/all-account.html", class:"terms verticalLine"},
					{title:"이용약관", href: "https://www.kia.com/kr/terms/website.html", class:"terms verticalLine"},
					{title:"윤리경영 사이버감사실", href: "http://audit.hyundai.com/?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_pr_audit", class:"terms verticalLine"},
					{title:"전자공고", href: "http://pr.kia.com/ko/company/ir/electronic-notices-and-disclosures/electronic-notice.do?utm_source=kmc_kr&utm_medium=website&utm_campaign=kia_footer_e_notices", class:"terms verticalLine"},
					{title:"사이트맵", href: "https://www.kia.com/kr/sitemap.html", class:"terms"},
				]
			},
			settings:{
				familyLink2Open: false
			}
		}
	},
	mounted(){
		console.log(typeof this.element.first.first[0].link)
	},
	methods:{
		familyLink2Handler(){
			this.settings.familyLink2Open = !this.settings.familyLink2Open;
		}
	}
}
</script>

<style>

	#footerDiv{
		display: flex;
		flex-direction: column;
		background-color: #05141f;
		height: 86vh;
		padding-top: 8vh;
		padding-left:15%;
		padding-right:15%;
		line-height: 3vh;
		text-align: left;
		font-size: 1.5vh;
	}

	#footerWrapperFirst{
		font-size: 1.8vh;
		display: flex;
		justify-content: space-between;
	}

	.footeridChild{
		display: inline-flex;
		flex-grow: 1;
		flex-direction: column;
		height: 50vh;
		color: white;
		font-size: 1em;
		text-align: left;
	}

	.footeridChild a{
		color: rgba(255,255,255, 0.6);
		font-size: 0.8em;
		font-weight: 500;
	}

	#footerFifth{
		flex-grow: 0.1;
	}

	.footeridChild a:hover{
		color: white;
		text-decoration-line: underline !important;
		font-weight: 500;
	}

	#footerFirst{
		line-height: 4vh;
		flex-grow: 2;
	}

	#footerFirst a{
		color: white !important;
		font-weight: 600;	
		font-size: 1em;
	}

	#footerFifth{
		margin: 0;
		font-weight: 800;	
		color:white
	}

	.awardDiv{
		display: flex;
		justify-content:left;
		width: 35vh;
		margin-bottom: 2em;
		font-size: 0.7em;
		font-weight: 500;
		line-height: 1.5em;
		color:rgba(255,255,255, 0.6);
	}

	.awardDiv div{
		margin-right: 1em;
	}

	.awardDiv img{
	width: 5em;
	height: 3em;
	}
	
	#footerWrapperSecond{
		display: flex;
		margin-top: 5vh;
		justify-content: space-between;
	}

	.familyLink2{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.familyLink{
		display: flex;
		position: absolute;
		right: 15%;
		justify-content: space-between;
		align-items: flex-start;
		width: 40vh;
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
	
	.dropDownLink{
		display: inline-block;
		text-align: left;
		text-indent: 10px;
		cursor: pointer;
		width: 60%;
		border: 1px solid rgba(63, 65, 68, 0.411);
		color: rgb(223, 223, 223);
	}

	.dropDownLink:active{
		background-color: rgba(46, 45, 45, 0.562);
		color: rgb(160, 160, 160);
	}

	#familyList{
		background-color: white;
		height: 150px;
		overflow-y: auto;
	}

	#familyList ul{
		list-style-type: none;
		padding: 0;
	}

	#familyList li{
		margin: 5px;
	}

	#familyList li:hover{
		background-color: rgba(201, 199, 199, 0.548);
	}

	#familyList a{
		color: black;
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
		width: 110px;
		background-position: 0px 11px;
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

	.reverseTriangle::before{
    position: absolute;
		top: 14px;
    left: 95%;
    width: 7px;
    height: 2px;
    background: #f8fafc;
    transform: rotate(45deg);
    transition-duration: 300ms;
    content: '';
	}

	.reverseTriangle::after{
    position: absolute;
		top: 14px;
    right: 2.5%;
    width: 7px;
    height: 2px;
    background: #f8fafc;
    transform: rotate(130deg);
    transition-duration: 300ms;
    content: '';
	}

	#footerWrapperThird{
		margin: 3vh 0 2vh 0;
		line-height: 120%;
	}

	.terms{
		color: rgba(255,255,255, 0.6);
		font-size: 0.7em;
	}

	.terms:hover{
		color:white;
		text-decoration-line: underline;
	}

	.verticalLine{
		padding-right: 1.5em;
		margin-right: 1em;
		border-right: 1px solid white;
	}

	.address{
		color: rgba(255,255,255, 0.6);
		font-size: 0.6em;
	}
	#footerWrapperFourth{
		display: flex;
		justify-content: space-between;
		line-height: 0;
	}

	#footerWrapperFourth span{
		color: rgba(255,255,255, 0.6) !important;
		font-size: 1em;
	}

	.home:after {
    content: '';
    height: 0;
    width: 0;
    display: block;
    position: relative;
    top: -0.5em;
    left: -18px;
    border: 9px solid transparent;
    border-bottom-color: rgba(255,255,255,0.6);
    border-width: 0 6px 7px 6px;
	}

	.home:before {
    content: '';
    height: 5px;
    width: 10px;
    display: block;
    position: relative;
    top: 0.3em;
    left: -17.2px;
    background: rgba(255,255,255,0.6);
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