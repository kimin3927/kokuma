<template>
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
						:items="itemSamples"
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
					{{ `${comment}`}}
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
					v-for="(spend, i) in items" :key="spend.id"
					class="ma-2"
					close
					color="green"
					:ref= spend.id
					outlined
					@click ="showItem"
					@click:close="kimin(i)"
				>
					{{ spend.name }}
				</v-chip>
			</div>
		</v-expansion-panel-content>
	</v-expansion-panel>  
</template>

<script>
export default {
	data(){
		return{
			item:{
				id:1,
				name: "",
				price: " ",
				quantity:1,
				category: "기타",
				status: true
			},
			tempData: "",
			numberSamples:[1,2,3,4,5,6,7],
			priceSamples: [" ", "10,000","20,000","30,000","40,000"],
			items:[],
			totalAmount: "",
			representativeItem: null,
			numberItems: 0,
			comment: "",
			result: {},
		}
	},
	watch:{
		computedItems(){
			this.numberItems = this.computedItems.length;
			let totalAmount = 0;
			console.log(this.computedItems)
			for(let item of this.computedItems){
				totalAmount = totalAmount + item.amount;
			}	
			this.totalAmount = totalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
			const maxItem = this.computedItems.reduce((a, b) => {
				if(a.amount > b.amount){
					return a
				} else {
					return b
				}
			},"")
			this.representativeItem = maxItem;
			if(this.numberItems == 1){
				this.comment = `${this.representativeItem.name} ${this.computedItems[0].amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`	
			} else if(this.numberItems == 0) {
				this.comment = "";
			} else this.comment = `${this.representativeItem.name} 등 ${this.numberItems}종 총 ${this.totalAmount}원`
			this.$emit("giveCategory", this.representativeItem.category)
			this.result.items = this.computedItems;
			this.result.name = `${this.representativeItem.name} 등 ${this.numberItems}종`;
			this.result.amount = totalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
			this.$emit("giveWhat", this.result)
		}
	},
	computed: {
		itemSamples(){
			return this.$store.getters.getSpendingItems;
		},
		categories() {	
			return this.$store.getters.getSpendingCategories;
    },
		computedItems(){
			if(this.items[0]){
				const result = this.items.filter((x) => {
				return x.status == true
				})
				return result
			} else return [];	
		},
	},
	props:["what"],
	methods:{
		kimin(i){
			console.log(i)
			console.log(this.items);
			this.items.splice(i, 1);
			console.log(this.items);
			console.log(Object.keys(this.$refs)[0])
		},
		addItem(){
			const newItem = JSON.parse(JSON.stringify(this.item))
			newItem.id = this.issueID();
			newItem.seller = this.seller;
			newItem.amount = Number(newItem.price.replace(",","")) * newItem.quantity;
			this.items.push(newItem)
		},
		showItem(e){
			const selectedItemID = e.currentTarget.dataset.id
			this.tempData = selectedItemID;
			let info;
			for(let i of this.computedItems){
				if(i.id == selectedItemID){
					info = i
				}
			}
			const selects = document.querySelectorAll(".v-select__selection--comma")
			selects[0].textContent = info.name;
			selects[1].textContent = info.quantity;
			selects[2].textContent = info.price;
			selects[3].textContent = info.category;
		},
		issueID(){
			return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
			return 'a' + v.toString(16);
		});
    },
	}
}

</script>

<style>
	.v-select__selection--comma, .v-list-item__title{
		font-size: 0.8rem;
	}
	.col-5{
		flex:0.5;
	}

	#collective{
		width: 100%;
	}

	#collective .itemSet{
		display: inline;
		height: 50%;
		line-height: 0;
		padding: 8px 12px;
		border-radius: 5px;
	}
	

</style>