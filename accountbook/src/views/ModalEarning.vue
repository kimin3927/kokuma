<template>
  <div id="ModalEarning">  
    <v-card id="myCard">
      <v-card-title id="cardName"> 수입 입력 </v-card-title>
      <div id="cardContents" @click="selectMain">
      <v-card-text>
        <v-expansion-panels
          id="spendingGroup"
          :value = panel
          multiple
        >
          <div id="head">
            <spending-when @giveWhen="takeWhen"></spending-when>
            <spending-where @giveSeller="takeSeller"></spending-where>
            <spending-who :who="who"></spending-who>
          </div>
          <div id="body">
            <spending-what :seller="where" @giveCategory="takeCategory" @giveWhat="takeWhat"></spending-what>
          </div>
          <div id="tail">
            <spending-how @giveHow="takeHow"></spending-how>
            <spending-why :category="why"></spending-why>
          </div>
        </v-expansion-panels>
      </v-card-text>
  </div>
      <v-card-actions>
        <v-btn color="primary" text @click="close">Close</v-btn>
        <v-btn color="primary" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>



<script>


import SpendingWhere from "../components/SpendingWhere.vue"
import SpendingWhen from '../components/SpendingWhen'
import SpendingWho from '../components/SpendingWho.vue'
import SpendingWhy from '../components/SpendingWhy.vue'
import SpendingHow from '../components/SpendingHow.vue'
import SpendingWhat from '../components/spendingWhat.vue'


export default {
  name: 'ModalEarning',
  components: {
    SpendingWhen,
    SpendingHow,
    SpendingWhy,
    SpendingWhat,
    SpendingWho,
    SpendingWhere
  },
  data () {
    return {
      panel: [3],
      when:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      where: null,
      who: "Kimin",
      why:"",
      how:"",
      what: [],
    }
  },
  computed:{
		sellers(){
			return this.$store.getters.getSellers;
		}
	},
  methods:{
    close(){
      this.$emit("close")
    },
    creatSpending(){
      const result = {};
      result.when = this.when;
      result.where = this.where;
      result.who = this.who;
      result.what = JSON.parse(JSON.stringify(this.what));
      result.how = JSON.parse(JSON.stringify(this.how));
      result.why = this.why;
      result.name = `${this.where} ${this.what.amount} 지출 건`;
      return result;
    },
    save(){
      const spending= this.creatSpending()
      this.$store.dispatch("addItems", {item: spending, kind: "spending"});
      this.close();
    },
    selectMain(e){
      const selectedPanel = e.target.closest(".spendingItems")
      const panelNumber = this.findPanelNumber(selectedPanel)
      this.panel = [panelNumber];
      const panels = document.querySelector("#spendingGroup");
      const panelLocation = selectedPanel.parentElement;
      panelLocation.appendChild(panels.querySelector("#body").childNodes[0]);//바디에 있던거를 옮겨주고
      panels.querySelector("#body").appendChild(selectedPanel); //고른걸 바디로 이동
    },
    findPanelNumber(item){
      const itsID = item.id
      const numberingObj = {
        "spendingWhen" : 0,
        "spendingWhere" : 1,
        "spendingWho" : 2,
        "spendingWhat" : 3,
        "spendingHow" : 4,
        "spendingWhy" : 5,
      }
      return numberingObj[itsID]
    },
    takeSeller(seller){
      this.where = seller
    },
    takeCategory(category){
      this.why = category;
    },
    takeHow(payment){
      this.how = payment;
    },
    takeWhat(items){
      this.what = items;
    },
    takeWhen(date){
      this.when = date
    }
  },
  }
</script>



<style>
  @import '../resetting.css';
  
  #ModalEarning #myCard{
    max-height: 70vh;
  }
  #cardName{
    padding: 20px 0 0 0;
    justify-content: center;
  }
  #cardContents{
    max-height: 84%
  }
  .sellerGroup button{
    margin: 1vh;
    min-width: 14vh !important;
  }

  #spendingGroup{
    display: flex;
    height: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
  
  #head, #body, #tail{
    width: 95%;
    margin: 1% 0 1% 0;
    display: flex;
    justify-content: space-between;
  }

  #body{
    max-height: 270px;
  }

  #head > .spendingItems{
    flex: 0.3;
  }

  #tail > .spendingItems{
    flex: 0.45;
  }
  
  #body > .spendingItems{
    flex: 1;
    height: 100%;
    max-height: 270px;
  }

  .spendingItems button{
    padding: 12px 18px;
  }

  .col-6{
    flex: none;
    max-width: none;
    text-align: center;
  }

  .v-card__text{
    height: 100%;
  }

  .v-expansion-panel-content{
    height: 75%;
  }
</style>