


  
export default {
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
			console.log("셀렉트메인")
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
		},
		timeSet(date){
			const convertedDate = new Date(date.replaceAll("-",","));
			const dayObj = {
				0 : "일요일",
				1 : "월요일",
				2 : "화요일",
				3 : "수요일",
				4 : "목요일",
				5 : "금요일",
				6 : "토요일",
			}
			const result = {
				time: convertedDate.getTime(),
				fullYear: convertedDate.getFullYear(),
				dateObj (){
					return convertedDate;
				}, 
				shortYear(){
					return String(this.fullYear).substr(2,2);
				},
				month: String(convertedDate.getMonth()+1).padStart(2,0),
				date: String(convertedDate.getDate()).padStart(2,0),
				day: dayObj[String(convertedDate.getDay())],
			}
			return result;			
		}
	},
}

