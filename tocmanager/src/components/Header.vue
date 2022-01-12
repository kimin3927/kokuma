<template>
    <header>
		<p>김기민 목차관리</p>
		<chart></chart>
    </header>
</template>

<script>
import ddd from "./ddd.vue"

export default {
	name: 'Header',
	components: {
		'chart': ddd
	}
};
</script>


<style>


header{
	grid-area: h;
	background-color: rgb(185, 202, 228);
	border-radius: 10px;
	margin: 0.5vw;
	padding: 0 1vw 0 1vw;
	text-align: left;
}

p{
	margin:0;
}

canvas{
	height: 50px;
}
</style>