<template>
	<div id='footerDiv'>
		<div id='footerWrapperFirst'>
			<div class="footeridChild" id='footerFirst'>
				<router-link to='/'>김기민</router-link>
				<router-link to='/'>온라인 견적</router-link>
				<router-link to='/'>구매 상담 신청</router-link>
				<router-link to='/'>이달의 구매혜택</router-link>
				<router-link to='/'>시승 예약</router-link>
				<router-link to='/'>카탈로그/가격표</router-link>
				<router-link to='/'>영업망 안내</router-link>
				<router-link to='/'>기아렌터카</router-link>
				<router-link to='/'>모델 비교</router-link>
				<router-link to='/'>진행중인 이벤트</router-link>
				<router-link to='/'>고객센터</router-link>
				<router-link to='/'>사이트맵</router-link>
			</div>
			<div class="footeridChild" id='footerSecond'>
				<router-link to='/'>EV</router-link>
				<router-link to='/'>EV6</router-link>
				<router-link to='/'>니로 EV</router-link>
				<router-link to='/'>봉고Ⅲ EV </router-link>
				<router-link to='/'>탑차 EV</router-link>
				<router-link to='/'>성력 EV</router-link>
			</div>
			<div class="footeridChild" id='footerThird'>
				<router-link to='/'>모닝</router-link>
				<router-link to='/'>레이</router-link>
				<router-link to='/'>K3</router-link>
				<router-link to='/'>K3 GT</router-link>
				<router-link to='/'>K5</router-link>
				<router-link to='/'>K5 HEV</router-link>
				<router-link to='/'>스팅어</router-link>
				<router-link to='/'>K8</router-link>
				<router-link to='/'>K8 HEV</router-link>
				<router-link to='/'>K9</router-link>
			</div>
			<div class="footeridChild" id='footerFourth'>
				<router-link to='/'>니로 HEV</router-link>
				<router-link to='/'>니로 PHEV</router-link>
				<router-link to='/'>셀토스</router-link>
				<router-link to='/'>스포티지</router-link>
				<router-link to='/'>스포티지 HEV</router-link>
				<router-link to='/'>쏘렌토</router-link>
				<router-link to='/'>쏘렌토 HEV</router-link>
				<router-link to='/'>모하비</router-link>
				<router-link to='/'>카니발</router-link>
				<router-link to='/'>카니발 하이리무진</router-link>
			</div>
			<div class="footeridChild" id='footerFifth'>
				<div class="awardDiv"></div>
				<div class="awardDiv">2</div>
				<div class="awardDiv">3</div>
				<div class="awardDiv">4</div>
				<div class="awardDiv">5</div>
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
		padding-left:9%;
		padding-right:9%;
		line-height: 30px;
		text-align: left;
	}

	#footerWrapperFirst{
		border: 2px solid peru;
	}

	a{
		color: white !important;
		font-size: 110%;
	}

	.footeridChild{
		display: inline-flex;
		width: 150px;
		height: 500px;
		flex-direction: column;
		margin-right: 130px;
		border: 2px solid yellow;
		text-align: left;
	}

	#footerFirst{
		font-weight: 800;	
	}

	#footerFifth{
		margin: 0;
		font-weight: 800;	
	}

	.awardDiv{
		width: 350px;
		height: 100px;
		border: 1px dashed white; 
	}
</style>