<template>
    <div id="removedTableDiv">
      <table>
        <thead>
          <tr>
            <th v-for="text in thText" :key=text>{{text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row) in filterredData" :key="row.id" :id="row.id" :class="row.levelClass +' '+ row.status" >
            <td class="level">{{row.targetLevel}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD">
              <div class="number" style="background-color: rgb(190,190,190);">{{row.no}}</div>
            </td>
            <td class="registDate" style="background-color: rgb(190,190,190);">
              <div>
                <div class="showDiv">{{row.convertedRegistDate}}</div>
                <div class="inputDiv">
                  <input @click="inputRegi" @change="inputRegi2" type="date"/>
                </div>
              </div>
            </td>
            <td class='content' style="background-color: rgb(190,190,190);">
              <div class='contentWrapper'>
								<div class='title'>
									<input v-model="row.title">
								</div>
								<div class='contents'>
									<textarea v-model="row.contents"></textarea>
								</div>
              </div>
              <div  class='extension hoverHidden'>
								<button class='extensionBtn' @click="controlExtensionBtn">∨</button>
              </div>
            </td>
            <td class="finDate" @dblclick="doubleEvent" style="background-color: rgb(190,190,190);">
              <div>
                <div class="showDiv">{{row.convertedFinDate}}</div>
                <div class="inputDiv">
                  <input @click="inputRegi" @change="inputRegi2" type="date"/>
                </div>
              </div>
            </td>
            <td class="manage" style="background-color: rgb(190,190,190);">
              <div class='hoverHidden'>
                <button class='saveBtn' @click="finishBtnHandler">복구</button>
                <button class='remove' style=color:red @click="removeRow">삭제</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

import myMixin from "../mixins/mixins"

export default {
  name: 'Removed',
  data: function() {
    return {
      customOn: false,
			viewLevel : 5,
      tempData: null,
      thText: ["순번","날짜","내용","완료","관리"],
      buttonExample :["①", "②", "all"],
    }
  },
	mixins: [myMixin],
  updated() {
    localStorage.setItem("RemovedItem", JSON.stringify(this.storeTableRow))
    this.$store.dispatch("checkPeriod")
  },
  computed : {
		storeRemovedTable(){
			return this.$store.getters.getRemovedTable;
		},
		filterredData(){
			const data = this.storeRemovedTable.filter((item) => {
			return item.level <= this.viewLevel;
			}).filter((item) => {
			return item.hide !== true;
			})
			return data;
		},
	},
  methods: {
    inputRegi(e){
      e.stopPropagation(); // 이벤트 차단
    },
    inputRegi2(e){
      const targetTD = e.currentTarget.closest("td")
      const inputValue = targetTD.querySelector("input").value;
      const selectedTime = new Date(String(inputValue)).getTime()
      const targetObj = this.findItsObj(targetTD.closest("tr"),this.storeTableRow)
      if(targetTD.className == "registDate"){
        targetObj.registDate = selectedTime;
        targetObj.convertedRegistDate = this.convertTime(selectedTime)
      } else if(targetTD.className == "finDate"){
        targetObj.finDate = selectedTime;
        targetObj.convertedFinDate = this.convertTime(selectedTime)
      }
    },
    doubleEvent(e){
      const targetTD = e.currentTarget.closest("td")
      const targetShowDiv = targetTD.querySelector(".showDiv")
      this.tempData = targetTD;
      const targetInputDiv = targetTD.querySelector(".inputDiv")
      targetInputDiv.style.display="block";
      targetShowDiv.style.display="none";
    },
    viewControler(e){
      const targetDiv = e.currentTarget.closest("div").id
      if(targetDiv !== "finTableDiv"){
        const level = e.currentTarget.value;
        this.viewLevel = level;  
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
    controlView(e){
      const targetRow = e.currentTarget.closest("tr");
      let location
      if(targetRow.closest("div").id == "tableDiv"){
        location = this.storeTableRow
      } else location = this.storeFinTableRow
      const children = this.findMyChildren(targetRow, location)
      for(let item of children){
        item.hide = !item.hide;
        if(item.hide == true) {
          targetRow.querySelector(".plus").style.display = "inline";
          targetRow.querySelector(".minus").style.display = "none";
        } else {
          targetRow.querySelector(".plus").style.display = "none";
          targetRow.querySelector(".minus").style.display = "inline";
        }
        
      }
    },
    issueID(){
      return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return 'a' + v.toString(16);
      });
    },
    deleteBox(){
      this.customOn = !this.customOn;
    },
    findMyChildren(myRow, location){
      const children = [];
      const myObj = this.findItsObj(myRow, location)
      for(let obj of location){
        if(obj.motherNumber == myObj.no){
          children.push(obj);
          children.push(this.findMyChildren(obj, location))
        }
      }
      function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice();
      }
      return flatDeep(children,Infinity);
    },
    colorPicker(e){
      const pickedColor = e.target.value;
      const targetTR = document.querySelector("#" + this.tempData);
      const targetObj = this.storeTableRow[this.findItsObjIndex(targetTR,this.storeTableRow)];//
      targetObj.color = pickedColor;
      const children = this.findMyChildren(targetTR, this.storeTableRow)
      for(let sonRow of children){
        const sonObj = this.storeTableRow[this.findItsObjIndex(sonRow, this.storeTableRow)]
        sonObj.color = this.findMyColor(sonRow);
      }
    },
    tableRowStyler(e){
      this.customOn = !this.customOn;
      const targetTR = e.currentTarget.closest("tr")
      this.tempData = targetTR.id;
    },
    itemClass(level, motherNumber, no, order, finDate, title, contents, levelClass, color){
      const itemObj = {
        level : level,
        motherNumber : motherNumber,
        no :  no,
        levelClass : levelClass,
        order : order,
        finDate :  finDate,
        title :  title,
        contents :  contents,
        color: color,
        registDate :  this.getTime(),
        convertedRegistDate : this.convertTime(this.getTime()),
        status: "",
        hide: false,
        id: this.issueID() //this가 가르키는 것은??
      }
      return itemObj;
    },
    findItsObj(row, location){
      if(Array.isArray(row)){
        const result = [];
        for(let item of row) {
          const itemObj = location[this.findItsObjIndex(item, location)]
          result.push(itemObj)
        }
        return result;
      } else {
        const itemObj = location[this.findItsObjIndex(row, location)];
        return itemObj;
      }
    },
    findChildrenRow(row, divID){
      const children = [];
      if(divID !== "#finTableDiv"){
        const rows = [...document.querySelector(divID).querySelector("tbody").querySelectorAll("tr")];
        const rowNo = row.querySelector(".number").textContent;
        for(let i = 0; i < rows.length; i++){
          if(rows[i].querySelector(".motherNumber").textContent == rowNo) {
            children.push(rows[i])
            children.push(this.findChildrenRow(rows[i], divID))
          }
        }
      } else {
        const rowIndex = this.findItsObjIndex(row, this.storeFinTableRow);
        for(let i = rowIndex + 1; i < this.storeFinTableRow.length; i++){
          children.push(this.storeFinTableRow[i])
          if(this.storeFinTableRow[i].level == 1){
            break;
          }
        }
      }
      return children.flat(1);
    },
    finishBtnHandler(e){
      const targetRow = e.currentTarget.closest("tr");
      const targetObj = this.findItsObj(targetRow, this.storeTableRow)
      const children = this.findChildrenRow(targetRow, '#tableDiv')
      const familyArray = [targetRow, ...children];
      const items = this.findItsObj(familyArray, this.storeTableRow);
      if(targetObj.level !== 1){
        if(!targetRow.classList.contains("finish")) {
          targetRow.classList.add("finish")
          for(let item of items){
            item.status = "finish"
            item.color = "rgba(125,125,125,0.5)"
            item.finDate = this.getTime();
            item.convertedFinDate = this.convertTime(this.getTime());
          }
        } else {
          targetRow.classList.remove("finish")
          for(let item of items){
            item.status = ""
            item.finDate = "";
            item.convertedFinDate = "";
            item.color = this.findMyColor(item)
          }
        }
      } else if(targetObj.level == 1) {
        for(let i = 0 ; i < items.length; i++) {
          const idNo = this.storeFinTableRow.length + 1;
          const finNo = String(new Date().getFullYear()).slice(2,4) + String(new Date().getMonth() + 1).padStart(2,'0') + "-" +String(idNo).padStart(2,'0');
          const index = this.findItsObjIndex(items[i], this.storeTableRow)
          items[i].finNo = finNo;
          items[i].finDate = this.getTime();
          items[i].convertedFinDate = this.convertTime(this.getTime());
          items[i].status = "finish";
          this.$store.dispatch("finishItem", {item:items[i], index:index});
        }
      }
    },
    findItsObjIndex(row, location){
			if(row.id){
				for(let i = 0; i < location.length; i++) {
					if(location[i].id == row.id){
						return i
					}
				}
			}
      if(Array.isArray(row)){
        const result = [];
        for(let i = 0; i < row.length; i++){
          for(let j = 0; j < location.length; i++) {
            if(row[i].id == location[i].id) {
              result.push(i);
              break;
            }
          }
        }
        return result;
      } else {
        for(let i = 0; i < location.length; i++){
          if(location[i].id == row.id){
            return i;
          }
        }
      }
    },
    findMyOrder(motherObj){
      let lastBrother;
      let myOrder = Number(motherObj.order) + 0.1;
      for(let i = 0; i < this.storeTableRow.length; i++){
        if(this.storeTableRow[i].motherNumber == motherObj.no){
          lastBrother = this.storeTableRow[i];
          myOrder = Number(lastBrother.order) + 0.1;
        }
      }
      if(lastBrother){
        myOrder = this.findMyOrder(lastBrother)
      }
      return myOrder;
    },
    findMyColor(myObj){
      let motherObj;
      for(let obj of this.storeTableRow){
        if(obj.no == myObj.motherNumber){
          motherObj = obj;
          break;
        }
      }
      const motherColor = motherObj.color.replace("rgba(","").replace(")","").split(",");
      let motherR = Number(motherColor[0])
      let motherG = Number(motherColor[1])
      let motherB = Number(motherColor[2])
      let motherA = Number(motherColor[3])
      const myColor = `rgba(${motherR + 55},${motherG + 55},${motherB + 55},${(motherA - 0.25).toFixed(1)})`
      return myColor;
    },
    makeSub(e){
      const motherRow = e.currentTarget.closest("tr");
      const motherIndex = this.findItsObjIndex(motherRow, this.storeTableRow)
      const motherObj = this.storeTableRow[motherIndex]
      let siblingCount = 1;
      for(let i = 0; i < this.storeTableRow.length; i++){
        if(this.storeTableRow[i].motherNumber == motherObj.no){
          siblingCount++
        }
      }
      const myNumber = motherObj.no + "." + siblingCount;
      const myOrder = this.findMyOrder(motherObj);
      const classMatch = {
        1 : "firstLevel",
        2 : "secondLevel",
        3 : "thirdLevel",
        4 : "fourthLevel"
      }
      const myLevel = motherObj.level + 1
      const myLevelClass = classMatch[myLevel + ''];
      const newSubItem = this.itemClass(myLevel, motherObj.no, myNumber, myOrder, "", "", "", myLevelClass) // new가 왜 불필요한지 
      const myColor = this.findMyColor(newSubItem)
      newSubItem.color = myColor;
			this.$store.dispatch("addRow", {item:newSubItem, index:myOrder})
    },
    addNewRow(){
      let lastNumber = 0;
      if(this.storeTableRow.length !== 0){
        for(let i = 0; i < this.storeTableRow.length; i++) {
          if(this.storeTableRow[i].level == 1){
            lastNumber++
          }
        }
      }
      const nextNumber = lastNumber + 1;
      const newRow = this.itemClass(1, "", nextNumber, this.storeTableRow.length,"","","","firstLevel","rgba(0,255,0,1)")
			this.$store.dispatch("addRow", {item:newRow});
      this.$store.dispatch("checkPeriod")
    },
    controlExtensionBtn(e) {
      const targetBtn = e.currentTarget;
      const targetTR = targetBtn.closest("tr")
      const targetContents = targetTR.querySelector(".contents");
      const trSize = Number(window.getComputedStyle(targetTR).height.replace("px",""));
      if(targetBtn.textContent == "∨"){
        targetBtn.textContent = "∧";
        targetContents.style.height =  "28px";
        targetTR.querySelector(".number").style.height = trSize + 15 + "px"
        targetContents.querySelector("textarea").style.display = "block"
      } else {
        targetBtn.textContent = "∨";
        targetContents.style.height = "0";
        targetTR.querySelector(".number").style.height = "2vh";
        targetContents.querySelector("textarea").style.display = "none"
      }
    },
    removeRow(e){
			const targetRow = e.currentTarget.closest("tr");
      let location;
      const divID =  "#" + targetRow.closest("div").id;
      if(divID == "#tableDiv"){
        location = this.storeTableRow;
      } else location = this.storeFinTableRow;
      const childrenRow = this.findChildrenRow(targetRow, divID)
      const targetArray = [targetRow,...childrenRow];
			for(let i = targetArray.length - 1; i > -1; i--){
				const targetIndex = this.findItsObjIndex(targetArray[i], location)
				if(divID == "#tableDiv"){
					this.$store.dispatch("removeRow", {location : "table", index : targetIndex})
				} else this.$store.dispatch("removeRow", {location : "finTable", index : targetIndex})
			}
		},
    recoverBtnHandler(e){
      const targetRow = e.currentTarget.closest("tr");
      const childrenRows = this.findChildrenRow(targetRow,"#finTableDiv")
      for(let row of [targetRow,...childrenRows]){
        const rowIndex = this.findItsObjIndex(row, this.storeFinTableRow)
        const rowObj = this.storeFinTableRow[rowIndex];
        rowObj.status = "";
        rowObj.finDate = "";
        rowObj.convertedFinDate = "";
        this.$store.dispatch("addRow", {item:rowObj})
        this.$store.dispatch("removeRow", {location : "finTable", index: rowIndex})
      }
    },
  },
}

</script>

<style>

main{
  min-height: 80%;
  margin: 0.5vw;
  padding-top: 0;
  text-align:left;
}

#tableDiv{
  width: 100%;
  min-height: 45vh;
  margin-bottom: 3%;
  overflow-x: hidden;
  overflow-y: auto;
}

.levelFormDiv{
  display: flex;
  padding:0 20px 0 10px;
  justify-content: space-between;
}

.levelForm{
  display: inline;
}

table{
  width: 100%;
  border-collapse: collapse;
  color: black;
  text-align:center;
}

th{
  background-color: rgb(131, 221, 243);
}

th:nth-child(1){
  width: 15%;
  border-radius: 10px 0 0 10px;
}

th:nth-child(2){
  width: 8%;
}

th:nth-child(4){
  width: 8%;
}

th:nth-child(5){
  width: 12%;
  white-space: nowrap;
  border-radius: 0 10px 10px 0;
}

#tableRowAddBtn{
  width: 1425%;
  height: 1.5vw;
  border-radius: 10px;
  font-size: 1vw;
  background-color: transparent;
  border: 0.1px dashed rgba(128, 128, 128, 0.527);
}

.inputDiv{
  display: none;
}

#tableRowAddBtn:active{
  width: 1425%;
  height: 1.5vw;
  border-radius: 10px;
  font-size: 1vw;
  background-color: rgba(128, 128, 128, 0.3);
  border: 0.1px dashed rgba(128, 128, 128, 0.527);
}

td{
  vertical-align: middle;
  border: 0.5px solid rgb(129, 129, 129);
  border-bottom: none;
  border-top: none;
  font-size: 0.8vw;
}

.numberTD{
  border:none;
  border-radius: 10px 0 0 10px;
  text-align: right;
  padding: 0;
  background-color: white !important;
}

.control{
  float: right;
  text-align: right;
  width: 25%;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
}

.number{
  float: right;
  height: 100%;
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: left;
  text-indent: 15%;
  border-radius: 10px 0 0 10px;
  transition: 200ms;
}


.control:hover{
  opacity: 1;
}

.control svg{
  float: right;
  vertical-align: middle;
  width: 16px;
  height: 15px;
  transition: 400ms;
  border-radius: 4px;
}

.control svg:hover{
  background-color: rgba(210, 210, 210, 1);
  transition: 200ms;
}

.control svg:active{
  background-color: rgba(150, 150, 150, 1);
}

.control svg path{
  fill: rgba(128, 128, 128, 0.808)
}

.level{
  display: none;
}

.motherNumber{
  display: none;
}

.contentWrapper{
  float: left;
  width: 90%;
}

.title{
  width: 100%;
  text-align: left;
  text-indent: 1%;
}

.title > input{
  background-color: transparent;
  border: none;
  width: 100%;
  cursor:text;
}

.title {
  cursor:text;
}

.title > input:focus{
  background-color: transparent;
  border: none;
  width: 100%;
  outline-style: none;
}

.contents > textarea{
  background-color: transparent;
  border: none;
  margin-top: 10px;
  margin-bottom: 0;
  overflow: hidden;
  width: 107%;
  height: auto;
  display: none;
  font-family: inherit;
  resize:none;
}


.finDate > input{
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: center;
}

.extension{
  float: left;
  width: 10%;
  margin:0;
  text-align: right;
}

.extensionBtn{
  border: none;
  width: 100%;
  font-weight: bolder;
  padding-right: 20%;
  text-align: right;
  background-color: transparent;
}

h1{
  color:red;
}

.contents{
  width: 100%;
  height: 0;
  transition: all 300ms;
  cursor: text;
}

tr {
  height: 20px;
  border-top: white 2px solid;
}

.firstLevel > .numberTD > .number {
  width: 70%;
}

.secondLevel > .numberTD > .number {
  width: 55%;
}

.thirdLevel > .numberTD > .number {
  width: 40%;
}

.fourthLevel > .numberTD > .number {
  width: 28%;
}

#garbageBin:active{
  border-radius: 5px;
  background-color: rgb(180, 180, 180);
}

.hoverHidden{
  display: flex;
  justify-content: center;
  align-items:center;
  opacity: 0;
  height: 100%;
}

.hoverHidden:hover{
  opacity: 1;
}

.hoverHidden > button{
  background-color: transparent;
  border: none;
}

.hoverHidden > button:active{
  background-color: rgba(207, 204, 204, 0.603);
  border-radius: 5px;
}

.finish *{
  text-decoration: line-through;
}

#finTableDiv{
  width: 100%;
}

#finTableDiv  .number, .registDate, .content, .finDate, .manage{
  background-color: rgb(190, 190, 190);
}

.registDate, .finDate{
  white-space: nowrap;
}

.registDate > div, .finDate >div{
  display: flex;
  justify-content: center;
  width:100%;
}

.manage{
  height: inherit;
  
}

.manage button {
  font-size: 1vh;
  height: 70%;
  padding: 0 0.5vw 0 0.5vw ;
}

#customBoard{
  position: absolute;
  left: 41vh;
  width: 20vh;
  height: 40vh;
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 2px 5px grey;
  font-size: 4vh;
}

.closeBtnWrapper{
  width: 100%;
  padding: 2% 3% 0 0;
  text-align: right;
  box-sizing: border-box;
}

.closeBtn{
  font-size: 3vh;
  color: grey;
  background-color: transparent;
  border:0;
}

.finTableViewButton{
  border-radius: 10px;
  border:none;
}

.finTableViewButton:active{
  background-color: rgb(187, 187, 187);
}

</style>