<template>
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
                v-for="earning in computedItems" :key="earning.id"
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
        <v-btn color="primary" text @click="$emit('close')">Close</v-btn>
        <v-btn color="primary" text @click="makeEarning">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import mixins from "../mixins/mixins"

export default {
  name: 'ModalEarning',
  mixins: [mixins],
  data(){
		return {
      panel: [],
      editedIndex: -1,
      editedItem: {
        when: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        where: '',
        who: '',
        what: {
          items: [0]
        },
        how: '',
        why: '',
        comment: "",
        to: {
          name: '청약통장',
        }
      },
      item: {
        name: ' ',
        amount: ' ',
        category: ' ',
        to: {
          name: '테스트',
          depositNo: "",
          where: "",
        },
      },
      numberSamples:[1,2,3,4,5,6,7],
			priceSamples: [" ", "10,000","20,000","30,000","40,000"],
      items: [],
      select: { state: 'Florida', abbr: 'FL' },
      itema: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
		}
  },
  computed: {
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
    itemSamples(){
			return this.$store.getters.getEarnigItems;
		},
		categories() {	
			return this.$store.getters.getEarningCategories;
    },
    deposits(){
      const rawData = this.$store.getters.getAssets;
      return rawData;
    }
  },  
  methods:{
    makeSpending(){
      this.$emit("close")
    },
    selectDate(){
      this.$refs.startMenu.save(this.editedItem.when)
    },
    selectGiver(e){
			const targetSpan = e.currentTarget.querySelector("span")
			this.editedItem.where = targetSpan.textContent.trim();
      this.$emit("giveSeller", this.editedItem.where)
		},
    addItem(){
			const newItem = JSON.parse(JSON.stringify(this.item))
			newItem.id = this.issueID();
      newItem.status = true
			newItem.amount = Number(newItem.amount.replace(",",""));
      if(newItem.name == "월급" || newItem.name == "상여"){
        newItem.category = "정기수익"
      } else newItem.category = "특별수익"
			this.items.push(newItem)
		},
		showItem(e){
			const selectedItemID = e.currentTarget.dataset.id
			let info;
			for(let i of this.items){
				if(i.id == selectedItemID){
					info = i
				}
			}
			const selects = document.querySelectorAll(".v-select__selection--comma")
			selects[1].textContent = info.name;
			selects[2].textContent = info.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
			selects[3].textContent = info.to;
		},
		issueID(){
			return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
			return 'a' + v.toString(16);
		});
    },
    makeEarning(){
      this.$store.dispatch("addItems", {item: this.editedItem, kind: "earning"});
      this.$emit('close')
    }
  },
  watch: {
    computedItems(){
      if(this.computedItems[0]){
        const totalAmount = this.computedItems.reduce((a,b)=>{
        return a + b.amount
      }, 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      const maxEarnItem = this.computedItems.reduce((a, b) => {
				if(a.amount > b.amount){
					return a
				} else {
					return b
				}
			},"")
      this.editedItem.amount = totalAmount;
      this.editedItem.name = `'${this.timeSet(this.editedItem.when).shortYear()}.${this.timeSet(this.editedItem.when).month}월 ${maxEarnItem.name}`
      this.editedItem.why = maxEarnItem.category;
      this.editedItem.to = maxEarnItem.to
      this.editedItem.comment = `${maxEarnItem.name} ${maxEarnItem.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원 등 총 ${totalAmount}원`
      } else this.editedItem.comment = "";
      this.editedItem.what.items = this.computedItems;
    }
  }
}

</script>

<style>
  @import '../resetting.css';


</style>