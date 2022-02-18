<template>
  <div class="Spendigns">
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>지출관리</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
  </div>
</template>

<script>
  export default {
    name: "spendingView",
    data () {
      return {
        search: '',
        calories: '',
        desserts: [
          {
            name: '1',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: '2',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: '1',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: '1',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: '1',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: '1',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: '1',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: '1',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: '1',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: '1',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'No',
            align: 'center',
            sortable: false,
            value: 'no',
          },
          {
            text: 'Date',
            align: 'center',
            value: 'when',
            filter: value => {
              if (!this.calories) return true
              return value < parseInt(this.calories)
            },
          },
          { text: 'User', align:"center", value: 'who' },
          { text: 'Seller', align:"center", value: 'where' },
          { text: 'Amount(Won)', align:"right", value: 'what.amount' },
          { text: 'Category', align:"center", value: 'why' },
          { text: 'Name', align:"start", value: 'what.name' },
          { text: 'Payment', align:"center", value: 'how.paymentName' },
          { text: 'PaymentCategory', align:"center", value: 'how.creditOrDebit' },
          { text: 'CreditPlan ', align:"center", value: 'how.creditMethods' },
          { text: 'Detail', align:"center", value: 'iron' },
        ]
      },
      data(){
        const rawData = this.$store.getters.getSpending;
        for(let i = 0; i< rawData.length; i++){
          rawData[i].no = i + 1
        }
        console.log(rawData[0])
        return rawData
      }
    },
    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>


<style>
  @import '../resetting.css';
  .v-data-table__wrapper tr, .text-start, .text-center, .text-right, .text-left{
    height: 20px !important;
  }

  th, td{
    padding: 0 10px 0 10px !important;
  }
  th:nth-child(1){
    width: 70px;
  }

  th:nth-child(2){
    width: 130px;
  }

  th:nth-child(3){
    width: 150px;
  }

  th:nth-child(5){
    width: 150px;
  }

  th:nth-child(6){
    width: 180px;
  }

  th:nth-child(7){
    width: 200px;
  }
</style>