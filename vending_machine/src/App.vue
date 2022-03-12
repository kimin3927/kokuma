<template>
  <div id="app"  @dragover="dragOverKimin">
    <div id="left">
      <h1 >Vending Machine Project</h1>  
      <div id="machine" >
        <div id="showWindow">
          <div v-for="drink in drinks" :key="drink.name"  class="drinks">
            <div :class="drink.class"></div>
            <span 
            v-html="Kwon + drink.price"
            @click="selectDrink(drink)"
            ></span>
          </div>
        </div>
        <div id="bodyWrap">
          <div id="display">
            <p id="displayComment">
              <MARQUEE>현금을 투입하거나 카드를 태그하세요 / Insert Coin or Tag CreditCard </MARQUEE>
            </p>
            <div id="amountDisplayCover">
              <div id="rest">
                <span>잔</span>
                <span>액</span>
              </div>
              <div id="restMoney"> {{ moneyComputed }}</div>
            </div>
          </div>
          <div id="moneyEntry">
            <div id=paperCoinCover>
              <div id="paperSlot">지폐 투입구
                <div
                  id="paper"
                  
                  @drop="dropKimin"
                  @dragover="dragOverKimin"
                  @dragleave="dragLeaveKimin"
                >
                <hr>
                </div>
              </div>
              <div id="cover">
                <div id="returnLever">
                  <svg width="55px" viewBox="2 2 20 20">
                    <path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12M15.6 13.72A4 4 0 0 0 16 12A4 4 0 0 0 12 8V10L8.88 7L12 4V6A6 6 0 0 1 18 12A5.9 5.9 0 0 1 17.07 15.19M6 12A5.9 5.9 0 0 1 6.93 8.81L8.4 10.28A4 4 0 0 0 8 12A4 4 0 0 0 12 16V14L15 17L12 20V18A6 6 0 0 1 6 12Z" />
                  </svg>
                </div>
                <div id="coinSlot" 
                  
                  @dragover="dragOverKimin"
                  @dragleave="dragLeaveKimin"
                  @drop="dropKimin"
                  >
                    <svg viewBox="2 2 20 20">
                      <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M14,7H10V9H11V15H10V17H14V15H13V9H14V7Z" />
                    </svg>
                </div>
              </div>
            </div>
            <div id="cardSlot">카드투입구
              <div 
              @drop="dropKimin"
              @dragover="dragOverKimin"
              @dragleave="dragLeaveKimin"
              id="cardCover">
                <div id="cardSlotLeft"></div>
                <div id="cardSlotRight"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="productExit">
        </div>
      </div>
    </div>
    <div id="right">
      <div id="wallet"
      
      @drop="dropKimin"
      >
        <div v-for="(money,i) in wallet" :key="i"
        :id="money.id"
        :class="money.class+' money'"
        draggable="true"
        @dragstart="dragKimin"
        >
          {{ money.value }}
        </div>  
      </div>
    </div>
  </div> 
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
      moneyAmount: "0",
      Kwon: "&#8361;",
      wallet:[
        { 
          id: "a1",
          class: "cheonWon",
          value: 1000
        },
        { 
          id: "a2",
          class: "cheonWon",
          value: 1000
        },
        { 
          id: "a3",
          class: "oBaekWon",
          value: 500
        },
        { 
          id: "a4",
          class: "oBaekWon",
          value: 500
        },
        { 
          id: "a5",
          class: "beakWon",
          value: 100
        },
        { 
          id: "a6",
          class: "beakWon",
          value: 100
        },
        { 
          id: "a7",
          class: "card",
          value: 10000
        },
        ],
      drinks : [
        {
          name: "coke",
          price: "1,100",
          class : "coke",
          quantity: 3
        },
        {
          name: "water",
          price: "600",
          class : "fureWater",
          quantity: 3
        },
        {
          name: "coffee",
          price: "700",
          class : "coffee",
          quantity: 3
        }
      ]
    }
  },
  methods :{
    dragKimin(e){
      console.log(e)
      console.warn('drag Start');
      e.dataTransfer.setData('targetId',e.target.id);
      e.dataTransfer.dropEffect = "move";
    },
    dragOverKimin(e){
      e.preventDefault();
      const target = e.currentTarget;
      target.style.border="3px solid red";
    },
    dragLeaveKimin(e){
      const target = e.currentTarget;
      target.style.border="none";
    },
    dropKimin(e){
      console.log("dropped")
      const target = e.currentTarget;
      target.style.border="none";
      var targetId = e.dataTransfer.getData('targetId');
      const target2 = document.querySelector(`#${targetId}`);
      target2.classList.remove("money")
      if(target2.classList.contains("cheonWon") && target.id == "paper"){
        console.log("지폐")
        this.takeMoney(target, target2, "paper")
      } else if(target2.classList.contains("card") && target.id == "cardCover"){
        console.log("card")
        this.takeMoney(target, target2, "card")
      } else if((target2.classList.contains("beakWon") || target2.classList.contains("oBaekWon")) && target.id == "coinSlot"){
        this.takeMoney(target, target2, "coin")
      }      
    },
    takeMoney(target, target2, kind){
      target.appendChild(target2)
      const moneySize = target2.textContent * 1;
      setTimeout(()=>{
        if(kind == "coin"){
          target2.classList.add("insertCoin")
        } else if(kind == "paper"){
          target2.classList.add("rotate")
          setTimeout(()=>{
            target2.classList.add("insertPaper")
          },500) 
        } else if(kind == "card"){
          target2.classList.add("rotateCard")
          setTimeout(()=>{
            target2.classList.add("insertCard")
          },800) 
        }
      }, 0)
      setTimeout(()=>{
        target.removeChild(target2)
        this.moneyAmount = this.moneyComputed.replaceAll(/,|원/g, "") * 1 + moneySize;
      }, 1300)
    },
    selectDrink(drink){
      const can = document.createElement('div')
      console.log(!drink.quantity)
      if(!drink.quantity || this.moneyAmount < drink.price) return;
      if(drink.quantity){
        const price = drink.price.replaceAll(",","")*1
        this.moneyAmount -= price;
        drink.quantity--
        const productExit = document.querySelector("#productExit")
        productExit.appendChild(can)
        can.classList.add(drink.class)
        can.classList.add("drinks")
        can.classList.add("drop")
      }      
    }
  },
  computed: {
    moneyComputed(){
      return String(this.moneyAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  watch:{
    moneyAmount(){
      const drinks = document.querySelector("#showWindow").querySelectorAll(".drinks");
      for(let i of drinks){
        const priceSpan = i.querySelector("span")
        const drinkValue = priceSpan.textContent.match(/\d/g).join().replaceAll(",","")*1
        if(drinkValue <= this.moneyAmount){
          priceSpan.style.color = "white";
          priceSpan.style.backgroundColor = "rgb(25,100,20)";
          priceSpan.style.border = "1px solid #55c855"
        } else {
          priceSpan.style.color = "rgb(200,200,200)";
          priceSpan.style.backgroundColor = "black"
          priceSpan.style.border = "none";
        }
      }
    }
  }
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#left{
  height: 100%;
  width: 50%;
  min-width: 380px;
}

#right{
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}

@font-face {
	font-family: 'LAB디지털';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

h1{
  color: blue;
}

body{
	width: 100vw;
	height: 100vh;
	background-color: beige;
	margin: 0;
	color:white;
}

div{
	box-sizing: border-box;
}

#machine{
	width: 600px;
	height: 800px;
  color: white;
	padding: 10px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	border: 5px solid grey;
  border-radius: 10px;
  background-color: rgb(63, 73, 170);
}

#showWindow{
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 40%;
	background-color: rgba(135, 207, 235, 0.486);
  border-radius: 10px;
  box-shadow: 3px 3px 3px 2px rgb(81, 106, 112) inset;
}

.drinks{
	display: flex;
  justify-content: flex-end;
	flex-direction: column;
	align-items: center;
  background-repeat: no-repeat;
}

.drinks div{
	background-repeat: no-repeat;
}

.drinks span{
  width: 80px;
  height: 25px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  letter-spacing: 3px;
	font-family: LAB디지털;
  font-size: 15px;
  background-color: black;
  color:rgb(200, 200, 200);
	text-shadow: 
	0 0 7px #fff, 
	0 0 10px #fff, 
	0 0 21px #fff, 
	0 0 42px #0fa,
	0 0 82px #0fa,
	0 0 92px #0fa;
  cursor: pointer;
}

.coffee{
  width: 80px;
  height: 120px;
	background-image: url("./assets/canCoffee1.png");
	background-position: 3px 10px;
  background-size: contain;
}

.fureWater{
  width: 80px;
  height: 200px;
	background-image: url( "./assets/fureWater.png" );
  background-size: 153%;
	background-position: -23px -10px;
}

.coke{
  width: 80px;
  height: 120px;
	background-image: url( "./assets/coke.png" );
	background-position: -5px 10px;
  background-size: 110%;
}

#display{
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: black;
	width: 50%;
  margin-right: 10px;
}

#displayComment{
	margin: 0;
  text-align: center;
  flex-basis: 1;
  border-bottom: 0.5px dashed rgba(0, 255, 170, 0.3);
	text-shadow: 
	0 0 7px #fff, 
	0 0 10px #fff, 
	0 0 21px #fff, 
	0 0 42px #0fa,
	0 0 82px #0fa,
	0 0 92px #0fa
}

MARQUEE{
  border-radius:10px 10px 0 0;
}

#amountDisplayCover{
	display: flex;
  flex: 1;
}

#rest{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-right: 0.1px dashed rgba(0, 255, 170, 0.3);
	font-size: 4vh;
	font-family: LAB디지털;
	color: rgb(191, 236, 191);
  text-shadow: 
	0 0 6px #fff, 
	0 0 2px #fff, 
	0 0 5px #0fa
}

#restMoney{
	flex:1;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  padding-right: 20px;
  background-color: black;
	font-size: 6vh;
	font-family: LAB디지털;
	color: rgb(191, 236, 191);
  text-shadow: 
	0 0 7px #fff, 
	0 0 10px #fff, 
	0 0 21px #fff, 
	0 0 42px #0fa,
	0 0 82px #0fa,
	0 0 92px #0fa
}

#moneyEntry{
	width:50%;
  display: flex;
}

#bodyWrap{
  margin-top: 5%;
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: flex-end;
}

#productExit{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;	
	height: 20%;  
  margin-top: 15%;
  background-color: rgba(99, 98, 98, 0.308);
	border: 3px solid black;
  border-radius: 10px;
  border-style: inset;
}

#paperSlot{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
	width: 100%;
	height: 40%;
}

#paperSlot > div{
  width: 115px;
  height: 35%;
  background-color: rgba(22, 18, 63, 0.684);
  border-radius: 10px;
}


hr{
  width: 80%;
  border: none;
  border-top: 8px solid black;
}

#paperCoinCover{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  height: 100%;
}

#cardSlot{
  width:35%;
	height: 100%;
  writing-mode: vertical-lr;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

#cardCover{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  height: 80%;
  background-color: rgba(20, 16, 58, 0.445);
  border-radius: 10px;
  margin-left: 5px;
}

#cardSlotLeft{
  width: 40%;
  height: 100%;
  background-color: black;
  border-radius:  3px 15px 15px 3px;
}

#cardSlotRight{
  width: 40%;
  height: 100%;
  background-color: black;
  border-radius: 15px 3px 3px 15px;
}

#cover{
	display: flex;
  align-items: center;
  justify-content: space-evenly;
	width: 100%;
	height: 40%;
  padding-top: 10px;
}

#returnLever{
	text-align: center;
  transition: 300ms;
  cursor: grab;
}

#returnLever:active{
  transform: rotate( -100deg );
  cursor: grabbing;
}

#returnLever svg {
  width: 5vh;
  height: 5vh;
  transition: 500ms;
}

#coinSlot{
  height: 55px;
  box-sizing: content-box;
  border-radius: 50%;
  text-align: center;
}

#coinSlot svg{ 
  width: 5vh;
  height: 5vh;
}

.drop{
  transform: rotate( -90deg );
  display: inline-block;
  margin: 0;
}


#wallet{
  width: 500px;
  height: 300px;
  background-color: rgba(165, 42, 42, 0.363);
  border: 3px solid brown;
  border-radius: 10px;
}



.money:active{
  cursor:grabbing;
}


.oBaekWon{
  display: inline-block;
  width: 66px;
  height: 66px;
  margin: 2%;
  border: 1px solid grey;
  border-style: inset;
  align-items: center;
  background-image: url("./assets/oBeakwon.png");
  background-size: 110%;
  background-position: -3px -3px;
  justify-content: center;
  border-radius: 50%;
  color: transparent;
  transition: 900ms;
}

.card{
  display: inline-block;
  width: 125px;
  height: 80px;
  border-radius: 5px;
  background-image: url("./assets/kakaoCardo.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: grab;
  z-index: 2;
  margin: 2%;
  color: transparent;
  border: 1px solid grey;
  border-style: inset;
}

.cheonWon{
  display: inline-block;
  cursor: grab;
  z-index: 2;
  margin: 2%;
  width: 200px;
  height: 92px;
  border: 1px solid grey;
  border-style: inset;
  align-items: center;
  justify-content: center;
  background-image: url("./assets/cheonWon.jpg");
  background-size: 99%;
  background-repeat: no-repeat;
  border-radius: 5%;
  color: transparent;
}

.beakWon{
  display: inline-block;
  background-color: #d4d4d4;
  background-image: url("./assets/beakWon.png");
  background-size: 251%;
  background-position: -48px -50px;
  width: 66px;
  height: 66px;
  margin: 2%;
  border: 1px solid grey;
  border-style: inset;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: transparent;
  transition: 900ms;
}

.rotate{
  transform:rotate( 90deg );
  position: absolute;
  top: 500px;
  left: 250px;
  transition: 700ms;
}

.rotateCard{
  transform:rotate( 90deg );
  position: absolute;
  top: 340px;
  left: 490px;
  transition: 700ms;
}


.insertCoin{
  position: absolute;
  left: 353px;
  transform:translate(0, -50px) rotate( -90deg )
}

.insertPaper{
  border: none;
  position: absolute;
  background-position: -200px 0;
}


.insertCard{
  border: none;
  transform: translate(0, 200px) rotate(90deg)
}


</style>
