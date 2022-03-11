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
        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
          <template>
            <div id="ModalSpenning">  
              <v-card id="myCard">
                <v-card-title id="cardName"> 지출입력 </v-card-title>
                <div id="cardContents" @click="selectMain">
                  <v-card-text>
                    <v-expansion-panels
                      id="spendingGroup"
                      :value = panel
                      multiple
                    >
                      <div id="head">
                        <v-expansion-panel class="spendingItems" id="spendingWhen">
                          <v-expansion-panel-header v-slot="{ open }">
                            <v-row no-gutters>
                              <v-col cols="4">
                                When
                              </v-col>
                              <v-col
                                cols="8"
                                class="text--secondary"
                              >
                                <v-fade-transition leave-absolute>
                                  <span v-if="open">When was that day?</span>
                                  <v-row
                                    v-else
                                    no-gutters
                                    style="width: 100%"
                                  >
                                    <v-col cols="6">
                                      {{ editedItem.when || 'Not set' }}
                                    </v-col>
                                  </v-row>
                                </v-fade-transition>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-row
                              justify="space-around"
                              no-gutters
                            >
                              <v-col cols="3">
                                <v-menu
                                  ref="startMenu"
                                  :close-on-content-click="false"
                                  :return-value.sync="editedItem.when"
                                  offset-y
                                  min-width="290px"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                      v-model="editedItem.when"
                                      label="Start date"
                                      prepend-icon="mdi-calendar"
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker
                                    v-model="editedItem.when"
                                    no-title
                                    scrollable
                                  >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      text
                                      color="primary"
                                      @click="$refs.startMenu.isActive = false"
                                    >
                                      Cancel
                                    </v-btn>
                                    <v-btn
                                      text
                                      color="primary"
                                      @click="selectDate"
                                    >
                                      OK
                                    </v-btn>
                                  </v-date-picker>
                                </v-menu>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <spending-where :where="editedItem.where" @giveSeller="takeSeller"></spending-where>
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
                                      {{ editedItem.who }}
                                    </span>
                                  </v-fade-transition>
                                </v-col>
                              </v-row>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-radio-group v-model="editedItem.who" row>
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
                      </div>
                      <div id="body">
                        <v-expansion-panel class="spendingItems main" id="spendingWhat">
                          <v-expansion-panel-header v-slot="{ open }">
                            <v-row no-gutters>
                              <v-col cols="4">
                                What
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
                                    Add items you bought
                                  </span>
                                  <span
                                    v-else
                                    key="1"
                                  >
                                    {{ item.name }}
                                  </span>
                                </v-fade-transition>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-row no-gutters>
                              <v-col cols="5">
                                <v-select
                                  v-model="item.name"
                                  :items="itemSamples" bhv
                                  solo
                                  class="name"
                                ></v-select>
                              </v-col>
                              <v-col cols="5">
                                <v-select
                                  v-model="item.quantity"
                                  :items="numberSamples"
                                  solo
                                  class="quantity"
                                ></v-select>
                              </v-col>
                              <v-col cols="5">
                                <v-select
                                  v-model="item.price"
                                  :items="priceSamples"
                                  solo
                                  class="price"
                                ></v-select>
                              </v-col>
                              <v-col cols="5">
                                <v-select
                                  v-model="item.category"
                                  :items="categories"
                                  solo
                                  class="category"
                                ></v-select>
                              </v-col>
                              
                              <v-divider
                                vertical
                                class="mx-4"
                              ></v-divider>
                              <v-col cols="3">
                                {{ `${editedItem.what.name}, 총${editedItem.what.amount}원`}}
                              </v-col>				
                            </v-row>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                text
                                color="primary"
                                @click="addItem"
                              >
                                Add
                              </v-btn>
                            </v-card-actions>
                            <div id="collective">
                              <v-chip
                                v-for="spend in editedItem.what.items" :key="spend.name"
                                class="ma-2"
                                close
                                color="green"
                                outlined
                                :data-id="spend.id"
                                @click ="showItem"
                                @click:close="kimin"
                              >
                                {{ spend.name }}
                              </v-chip>
                            </div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>  
                      </div>
                      <div id="tail">
                        <spending-how @giveHow="takeHow"></spending-how>
                        <spending-why :category="editedItem.why"></spending-why>
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
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    </v-data-table>
  </div>
  </div>
</template>

<script>
import SpendingWhere from "../components/SpendingWhere.vue"
import SpendingWhy from '../components/SpendingWhy.vue'
import SpendingHow from '../components/SpendingHow.vue'


import myMixin from "../mixins/mixins"
  
  export default {
    name: "spendingView",
    components: {
      SpendingHow,
      SpendingWhy,
      SpendingWhere
  },
    mixins: [myMixin],
    data () {
      return {
        search: '',
        dialogDelete: false,
        dialog: '',
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
          { text: 'Actions', value: 'actions', sortable: false },
        ]
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      data(){
        const rawData = this.$store.getters.getSpending;
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
      kimin(e){
        console.log(e)
      },
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
    width: 15vh;
    min-width: 100px;
  }

  th:nth-child(3){
    width: 15vh;
    min-width: 100px;
  }

  th:nth-child(4){
    width: 15vh;
    min-width: 100px;
  }

  th:nth-child(5){
    width: 10vh;
    min-width: 130px;
  }

  th:nth-child(6){
    width: 20vh;
    min-width: 120px;
  }

  th:nth-child(7){
    width: 21vh;
    min-width: 150px;
  }

  th:nth-child(8){
    width: 15vh;
    min-width: 130px;
  }

  th:nth-child(9){
    width: 18vh;
    min-width: 140px;
  }

  th:nth-child(10){
    width: 18vh;
    min-width: 100px;
  }
</style>