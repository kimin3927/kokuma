
<template>
  <main>
    <div v-if='customOn' id='customBoard'>
      <div class="closeBtnWrapper"><button class="closeBtn" @click="deleteBox">x</button></div>
      <div @click="colorPicker">
          <input type="radio" id="red" value="rgba(255,0,0,1)">
          <label for="red" style="color:red">■</label>
          <input type="radio" id="green" value="rgba(0,255,0,1)">
          <label for="green" style="color:green">■</label>
          <input type="radio" id="yellow" value="rgba(255,255,0,1)">
          <label for="yellow" style="color:yellow">■</label>
      </div>
    </div>
    <div class="levelFormDiv">
      <form class="levelForm" oninput = "result.value=parseInt(a.value)">
        <input @input="viewControler" type="range" id="a" name="a" min="1" max="5" step="1">
        <output name="result" for="a"></output>
      </form>
    </div>
    <div id="tableDiv">
      <table>
        <thead>
          <tr>
            <th v-for="text in thText" :key=text>{{text}}</th>
          </tr>
        </thead>
        <button id='tableRowAddBtn' @click="addNewRow">+</button>
        <tbody>
          <tr v-for="(row) in filterredData" :key="row.id" :id="row.id" :class="row.levelClass +' '+ row.status" >
            <td class="level">{{row.targetLevel}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD">
              <div class="number" :style="{backgroundColor: row.color}">{{row.no}}</div>
              <div class="control">
                <svg @click="tableRowStyler" viewBox="-1 -2 12 12" class="dragHandle" style="width: 15px; height: 20px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;">
                  <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z">
                  </path>
                </svg>
                <svg class="plus" @click="controlView" viewBox="-2 -2 20 20" style="width: 20px; height: 20px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden; display:none;">
                  <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
                  </path>
                </svg>
                <svg class="minus" @click="controlView" xmlns="http://www.w3.org/2000/svg" viewBox="1 0 24 24" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:19px; height:19px; display:block;">
                  <line x1="5" y1="12" x2="21" y2="12"/>
                </svg>
              </div>
            </td>
            <td class="registDate" :style="{backgroundColor: row.color}">{{row.convertedRegistDate}}</td>
            <td class='content' :style="{backgroundColor: row.color}">
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
            <td class="finDate" :style="{backgroundColor: row.color}">
              <input v-model="row.convertedFinDate">
            </td>
            <td class="manage" :style="{backgroundColor: row.color}">
              <div class='hoverHidden'>
                <button class='saveBtn' @click="finishBtnHandler">완료</button>
                <button class='remove' style=color:red @click="removeRow">삭제</button>
                <button class='makeSub' @click="makeSub">추가</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="storeFinTableRow[0]" id="finTableDiv">
      <button v-for="text in buttonExample" :key="text" @click="viewControler" class="finTableViewButton">{{text}}</button>
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
  </main>
</template>

<script>

export default {
  name: 'Main',
  data: function() {
    return {
      customOn: false,
			viewLevel : 5,
      tempData:[],
      thText: ["순번","날짜","내용","완료","관리"],
      buttonExample :["①", "②", "all"],
      finTableViewLevel : 1
    }
  },
  mounted(){
		this.$store.dispatch("init")
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
    }
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
  text-align: left;
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