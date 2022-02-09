<template>
  <div class="ModalSpending">  
    <v-card>
      <v-card-title> 지출 입력 </v-card-title>
      <v-card-text>
        123
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
        <v-btn color="primary" text @click="makeSpending">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ModalSpending',
  data(){
		return {

		}
  },
  methods:{
    makeSpending(){
      return
    }
  }
}

</script>

<style>
  @import '../resetting.css';


</style>