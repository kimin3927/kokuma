<template>
  <v-expansion-panel class="spendingItems" id="spendingWho">
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Who
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
                  select person who pay
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ myName }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group v-model="myName" row>
          <v-radio value="Kimin">
            <template v-slot:label>
              <div><strong class="success--text">Kimin</strong></div>
            </template>
          </v-radio>
          <v-radio value="Eunjin">
            <template v-slot:label>
              <div><strong class="primary--text">EJ.Choi</strong></div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
	data(){
		return{
			date: null,
      myName: null
		}
	},
  props:["who"],
  computed:{
    name(){
      if(this.myName){
        return this.myName
      } else return this.who
    }
  }
}
</script>

<style>
  .v-input--radio-group__input{
    justify-content: center;
  }

  .col-8{
    text-align: center;
  }
</style>