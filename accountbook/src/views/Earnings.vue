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
          <v-toolbar-title>수입 관리</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </v-toolbar>
        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
        <modal-earning @close="dialog=false"></modal-earning>
        </v-dialog>
        <v-dialog 
        v-model="dialogDelete" 
        max-width="500px"
        >
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
  </div>
  </div>
</template>

<script>


import ModalEarning from "./ModalEarning.vue"
import myMixin from "../mixins/mixins"

  export default {
    name: "Earnings",
    components: {
      ModalEarning: ModalEarning
    },
    mixins: [myMixin],
    data () {
      return {
        search: '',
        dialogDelete: false,
        dialog: false,
        editedIndex: -1,
        editedItem: {
          when: '',
          where: '',
          who: '',
          what: {
            items: [0]
          },
          how: '',
          why: '',
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        panel: [3],
        item:{
          id:1,
          name: " ",
          price: " ",
          quantity: " ",
          category: " ",
          status: true
        },
        numberSamples:[" ", 1,2,3,4,5,6,7],
        priceSamples: [" ","10,000","20,000","30,000","40,000"],
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
            class: "no"
          },
          {
            text: 'Date',
            align: 'center',
            value: 'when',
            class:"date",
            filter: value => {
              if (!this.calories) return true
              return value < parseInt(this.calories)
            },
          },
          { text: 'User', align:"center", value: 'who' },
          { text: 'From', align:"center", value: 'where', class:"where"},
          { text: 'Amount(Won)', align:"right", value: 'amount', class:"amount" },
          { text: 'Category', align:"center", value: 'why', class:"category"},
          { text: 'Name', align:"start", value: 'name' },
          { text: '입금계좌', align:"center", value: 'deposit' },
          { text: '수입구분', align:"center", value: 'earningCategory2' },
          { text: 'Actions', align:"center", value: 'actions', sortable: false },
        ]
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      data(){
        const rawData = this.$store.getters.getEarning;
        for(let i = 0; i< rawData.length; i++){
          rawData[i].no = i + 1
        }
        return rawData
      },
      itemSamples(){
        return this.$store.getters.getSpendingItems;
      },
      categories() {	
        return this.$store.getters.getSpendingCategories;
      },
    },
    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
      selectDate(){
        this.$refs.startMenu.save(this.editedItem.when)
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      deleteItemConfirm () {
        this.data.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      addItem(){
        const newItem = JSON.parse(JSON.stringify(this.item))
        newItem.id = this.issueID();
        newItem.seller = this.seller;
        newItem.amount = Number(newItem.price.replace(",","")) * newItem.quantity;
        this.items.push(newItem)
      },
      showItem(e){
        const selectedChip = e.currentTarget
        const siblings = document.querySelector("#collective").children
        let order;
        for(let i = 0; i < siblings.length; i++){
          if(siblings[i].dataset.id == selectedChip.dataset.id){
            order = i
          }
        }
        const srcObj = this.editedItem.what.items[order]
        const selects = document.querySelectorAll(".v-select__selection--comma")
        selects[1].textContent = srcObj.name;
        selects[2].textContent = srcObj.quantity;
        selects[3].textContent = srcObj.price;
        selects[4].textContent = srcObj.category;
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        this.close()
      },
      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        let targetObj
        for(let i of this.data){
          if(i.id == item.id){
            targetObj = i;
          }
        }
        console.log(targetObj)
      },
      deleteItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      takeSeller(seller){
        this.editedItem.where = seller;
      },
      selectMain(e){
        if(e.currentTarget.closest("#body")) return
        const selectedPanel = e.target.closest(".spendingItems")
        const panelNumber = this.findPanelNumber(selectedPanel)
        this.panel = [panelNumber];
        const panels = document.querySelector("#spendingGroup");
        const panelLocation = selectedPanel.parentElement;
        panelLocation.appendChild(panels.querySelector("#body").childNodes[0]);//바디에 있던거를 옮겨주고
        panels.querySelector("#body").appendChild(selectedPanel); //고른걸 바디로 이동
      },
    },
  }
</script>


<style>
  @import '../resetting.css';

  .no{
    width: 5vh !important;
  }

  .date{
    width: 12vh !important;
  }

  .where{
    width: 22vh !important;
  }

  .amount{
    width: 200px !important;
  }

  .category{
    width: 300px !important;
  }
</style>