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
        <div class="ModalEarning">
          <v-card>
            <v-card-title> 수입입력 </v-card-title>
            <v-card-text>
              <v-expansion-panels
                id="earningGroup"
                :value = panel
                multiple
                >
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
                  <v-expansion-panel class="spendingItems" id="spendingWhere">
                    <v-expansion-panel-header>
                      <template v-slot:default="{ open }">
                        
                        <v-row no-gutters>
                          <v-col cols="4">
                            From
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
                                Enter a name for the spending
                              </span>
                              <span
                                v-else
                                key="1"
                              >
                                {{ editedItem.where }}
                              </span>
                            </v-fade-transition>
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="sellerGroup">
                    <v-tooltip top v-for="btn in moneyGivers" :key="btn.name" >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          :color="btn.color"
                          light
                          v-bind="attrs"
                          v-on="on"
                          @click="selectGiver"
                        >  
                          {{ btn.name }}
                        </v-btn>
                      </template>
                      <span>{{ btn.name }}</span>
                    </v-tooltip>
                    </div>
                    <v-text-field
                      v-model="editedItem.where"
                      placeholder="Caribbean Cruise"
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
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
                          Add items you earned
                        </span>
                        <span
                          v-else
                          key="1"
                        >
                          {{ editedItem.comment }}
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
                        :items="itemSamples"
                        solo
                        class="name"
                      ></v-select>
                    </v-col>
                    <v-col cols="5">
                      <v-select
                        v-model="item.amount"
                        :items="priceSamples"
                        solo
                        class="price"
                      ></v-select>
                    </v-col>
                    <v-col cols="5">
                      <v-select
                        v-model="item.to"
                        :items="deposits"
                        :hint="`${item.to.where}, ${item.to.depositNo}`"
                        item-text="name"
                        item-value="name"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                      ></v-select>
                    </v-col>
                    
                    <v-divider
                      vertical
                      class="mx-4"
                    ></v-divider>
                    <v-col cols="3">
                      {{ `${editedItem.comment}`}}
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
                      v-for="earning in editedItem.what.items" :key="earning.id"
                      class="ma-2"
                      close
                      color="green"
                      outlined
                      :data-id="earning.id"
                      @click ="showItem"
                      @click:close="earning.status = false"
                    >
                      {{ earning.name }}
                    </v-chip>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>  
              </v-expansion-panels>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="close">Close</v-btn>
              <v-btn color="primary" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <!-- <modal-earning @close="dialog=false"></modal-earning> -->
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



import myMixin from "../mixins/mixins"

  export default {
    name: "Earnings",
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
            items: [""]
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
        items: [],
        item:{
          id:1,
          name: " ",
          price: " ",
          quantity: " ",
          category: " ",
          status: true,
          to: {
            where: ""
          }
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
          { text: '수입구분', align:"center", value: 'earningCategory2', class:'earningCategory' },
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
          moneyGivers(){
      return this.$store.getters.getMoneyGiver;
      },
      computedItems(){
        if(this.items[0]){
          const result = this.items.filter((x) => {
          return x.status == true
          })
          return result
        } else return [];	
      },
      deposits(){
        const rawData = this.$store.getters.getAssets;
        return rawData;
      }
    },
    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
      selectGiver(e){
        const targetSpan = e.currentTarget.querySelector("span")
        this.editedItem.where = targetSpan.textContent.trim();
        this.$emit("giveSeller", this.editedItem.where)
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
        console.log(item)
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
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
    min-width: 170px !important;;
  }

  .amount{
    width: 15vh !important;
    min-width: 140px !important;
  }

  .category{
    width: 300px !important;
  }

  .earningCategory{
    width: 22vh !important;
    min-width: 130px !important;;
  }
</style>