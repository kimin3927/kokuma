<template>
<div id="finTableDiv">
	<table id="finTable">
		<thead>
			<tr>
				<th v-for="text in thText" :key=text>{{text}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row) in filterredFinData" :key="row.id" :id="row.id" :class="row.levelClass">
				<td class="level">{{row.level}}</td>
				<td class="motherNumber">{{row.motherNumber}}</td>
				<td class="numberTD">
					<div class="number" >{{row.finNo}}</div>
					<div class="control">
						<svg class="plus" @click="controlView" viewBox="-2 -2 20 20" style="width: 20px; height: 20px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden; display:none;">
							<path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
							</path>
						</svg>
						<svg class="minus" @click="controlView" xmlns="http://www.w3.org/2000/svg" viewBox="1 0 24 24" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:19px; height:19px; display:block;">
							<line x1="5" y1="12" x2="21" y2="12"/>
						</svg>
					</div>
				</td>
				<td class="registDate">{{row.convertedRegistDate}}</td>
				<td class='content'>
					<div class='contentWrapper'>
							<div class='title'>
									{{ row.title }}
							</div>
							<div class='contents'>
									{{ row.contents }}
							</div>
					</div>
					<div class='extension hoverHidden'>
							<button class='extensionBtn' @click="controlExtensionBtn">∨</button>
					</div>
				</td>
				<td class="finDate">{{row.convertedFinDate}}</td>
				<td  class="manage">
					<div class='hoverHidden'>
						<button class='saveBtn' @click="recoverBtnHandler">복귀</button>
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
	name: 'FinTable',
  data: function() {
    return {
			viewLevel : 5,
      thText: ["순번","날짜","내용","완료","관리"],
      buttonExample :["①", "②", "all"],
      finTableViewLevel : 1,
    }
  },
  mixins : [myMixin],
  props:{
    bodyClicked : null
  },
  updated() {
    localStorage.setItem("toc", JSON.stringify(this.storeTableRow))
    localStorage.setItem("tocFin", JSON.stringify(this.storeFinTableRow))
    this.$store.dispatch("checkPeriod")
  },
  computed : {
		storeTableRow(){
			return this.$store.getters.getTableRow;
		},
		storeFinTableRow(){
			return this.$store.getters.getFinTableRow;
		},
    filterredData(){
      const data = this.storeTableRow.filter((item) => {
        return item.level <= this.viewLevel;
      }).filter((item) => {
        return item.hide !== true;
      })
      return data;
    },
    filterredFinData(){
      const data = this.storeFinTableRow.filter((item) => {
        return item.level <= this.finTableViewLevel;
      }).filter((item) => {
        return item.hide !== true;
      })
      return data;
    }
  },
  methods: {
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
          if(this.storeFinTableRow[i].level == 1){
            break;
          } else {
            children.push(this.storeFinTableRow[i])
          }
        }
      }
      return children.flat(1);
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

.finTableViewButton{
  border-radius: 10px;
  border:none;
}

.finTableViewButton:active{
  background-color: rgb(187, 187, 187);
}

</style>