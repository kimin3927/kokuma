export default {
	name : "myMixin",
	data(){
		return {
			buttonExample :["①", "②", "all"],
		}
	},
	methods : {
		removeRow(e){
			const targetRow = e.currentTarget.closest("tr");
      let location;
      const divID =  "#" + targetRow.closest("div").id;
      if(divID == "#tableDiv"){
        location = this.storeTableRow;
      } else location = this.storeFinTableRow;
      const childrenRow = this.findChildrenRow(targetRow, divID)
      const targetArray = [targetRow,...childrenRow];
      console.log(childrenRow)
			for(let i = targetArray.length - 1; i > -1; i--){
				const index = this.findItsObjIndex(targetArray[i], location)
				if(divID == "#tableDiv"){
          const item = this.findItsObj(targetArray, this.storeTableRow)
					this.$store.dispatch("removeRow", {location : "table", index})
          this.$store.dispatch("addRow2", {item, location: "removedTable"})
				} else if(divID == "#finTableDiv"){
          const item = this.findItsObj(targetArray, this.storeFinTableRow)
          this.$store.dispatch("removeRow", {location : "finTable", index})
          this.$store.dispatch("addRow2", {item, location: "removedTable"})
        } else {
          const item = this.findItsObj(targetArray, this.storeRemovedRow)
          this.$store.dispatch("removeRow", {location : "tableRow", index})
          this.$store.dispatch("addRow2", {item, location: "removedTable"})
        }
			}
		},
		clockSet(){
      const date = new Date();
      const Month = String(date.getMonth() + 1).padStart(2,'0');
      const date2 = String(date.getDate()).padStart(2,'0');
      const hours = String(date.getHours()).padStart(2, "0");
      const minuetes = String(date.getMinutes()).padStart(2, "0");
      return `${Month}/${date2} ${hours}:${minuetes}`;
    },
    getTime(){
      const time = Date.now(new Date);
      return time;
    },
    convertTime(time){
      const date = new Date(time);
      const Month = String(date.getMonth() + 1).padStart(2,'0');
      const date2 = String(date.getDate()).padStart(2,'0');
      const hours = String(date.getHours()).padStart(2, "0");
      const minuetes = String(date.getMinutes()).padStart(2, "0");
      return `${Month}/${date2} ${hours}:${minuetes}`;
    },
    convertTime2Date(time, standard){
      const date = new Date(time);
      const year = date.getFullYear();
      const Month = String(date.getMonth() + 1).padStart(2,'0');
      const date2 = String(date.getDate()).padStart(2,'0');
      const hours = String(date.getHours()).padStart(2, "0");
      let result;
      switch(standard){
        case "day" : result = `${year}-${Month}-${date2}`; break;
        case "hours" : result = `${Month}/${date2}, ${hours}`; break;
      }
      return result
    },
		viewControler(e){
      const targetDiv = this.presentView;
			console.log(targetDiv)
      if(targetDiv !== "finTableDiv"){
        const level = e.currentTarget.value;
        this.viewLevel = level;
				console.log(this.storeTableRow)
        for(let item of this.storeTableRow){
          if(item.level <= this.viewLevel){
            item.hide = false;
          }
        }
      } else {
        const level = e.currentTarget
        const finLevelButtons = document.querySelectorAll(".finTableViewButton")
        for(let i = 0; i < finLevelButtons.length; i++){
          if(level == finLevelButtons[i]){
            this.finTableViewLevel = i + 1;
            break;
          }
        }
        if(this.finTableViewLevel == 3) this.finTableViewLevel = 5;
        for(let item of this.storeFinTableRow){
          if(item.level <= this.finTableViewLevel){
            item.hide = false;
          }
        }
      }
		},
	}
}