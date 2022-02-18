<template>
    <v-expansion-panel class="spendingItems" id="spendingHow">
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              How
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Selet your PaymentWay
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ payment.paymentName }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="collective">
          <v-card-title> 현금 </v-card-title>
          <v-card-text>
          <v-btn v-for="payment in payments.finance" :key="payment.name" @click="select"> {{ payment.name }} </v-btn>
          </v-card-text>
        </v-card>
        <v-card class="collective">
          <v-card-title> 신용 </v-card-title>
          <v-card-text>
          <v-btn>우리</v-btn>
          <v-btn>국민</v-btn>
          <v-btn>우리</v-btn>
          <v-btn>국민</v-btn>
          <v-btn>우리</v-btn>
          <v-btn>국민</v-btn>
          <v-btn>우리</v-btn>
          <v-btn>국민</v-btn>
          </v-card-text>
        </v-card>
        
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
	data(){
		return{
			trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
			date: null,
      payment: {},
		}
	},
  methods:{
    select(e){
      const targetValue = e.currentTarget.textContent;
      this.payment.paymentName = targetValue;
      if(e.currentTarget.closest(".v-card").querySelector(".v-card__title").textContent.trim() == "현금"){
        this.payment.creditOrDebit = "현금/체크"
        this.payment.creditTerm = "-"
        this.$emit("giveHow", this.payment);
      }
    }
  },
  computed: {
    payments(){
      return this.$store.getters.getAssetCategory2;
    },
  }
}
</script>

<style>
 

  .collective{
    display: flex;
    justify-content:center;
    width: 47%;
    height: 100%;
    float: left;
    margin: 0 10px;
    flex-wrap: wrap;
    max-height: 180px;
    overflow: auto;
  }

  .v-card__title{
    padding: 0;
  }

  .collective .v-card__text{
    max-height: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }

  .collective button{
    width: 100px;
    height: 50px !important;
    margin: 10px 15px;
  }

  .collective span{
    justify-content: center;
    width: 100%;
    white-space: pre-wrap;
  }

</style>
