<template>
    <header>
        <p contenteditable="true">김기민 목차관리</p>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style>

header{
    grid-area: h;
    background-color: rgb(185, 202, 228);
    border-radius: 10px;
    margin: 0.5vw;
    padding: 1vw;
    text-align: left;
}

p{
    margin:0;
}
</style>