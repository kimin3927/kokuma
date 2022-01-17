
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
    <form oninput = "result.value=parseInt(a.value)">
    <input @input="controlLevelView" type="range" id="a" name="a" min="0" max="5" step="1">
    <output name="result" for="a"></output>
    </form>
    <div id="tableDiv">
      <table>
        <thead>
          <tr>
              <th>순번</th>
              <th>날짜</th>
              <th>내용</th>
              <th>완료</th>
              <th>관리</th>
          </tr>
        </thead>
        <button id='tableRowAddBtn' @click="addNewRow">+</button>
        <tbody>
          <tr v-for="(row) in storeTableRow" :key="row.id" :id="row.id" :class="row.levelClass" :style="{backgroundColor: row.color}">
            <td class="level">{{row.targetLevel}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD">
              <div class="number" :style="{backgroundColor: row.color}">{{row.no}}</div>
              <div class="control">
                <svg @click="tableRowStyler" viewBox="-1 -2 12 12" class="dragHandle" style="width: 15px; height: 20px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;">
                  <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z">
                  </path>
                </svg>
                <svg viewBox="-2 -2 20 20" class="plus" style="width: 16px; height: 85%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;">
                  <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
                  </path>
                </svg>
              </div>
            </td>
            <td class="resgistDate" >{{row.convertedRegistDate}}</td>
            <td class='content'>
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
            <td class="finDate">
              <input v-model="row.convertedFinDate">
            </td>
            <td  class="manage">
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
    <div id="finTableDiv">
      <table v-if="storeFinTableRow[0]" id="finTable">
        <thead>
          <tr>
              <th>순번</th>
              <th>날짜</th>
              <th>내용</th>
              <th>완료</th>
              <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row) in storeFinTableRow" :key="row.id" :id="row.id">
            <td class="level">{{row.level}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD"><div class="number">{{row.finNo}}</div></td>
            <td class="resgistDate">{{row.convertedRegistDate}}</td>
            <td class='content'>
              <div class='contentWrapper'>
                  <div class='title'>
                      <input v-model="row.title">
                  </div>
                  <div class='contents'>
                      <input type='textarea' v-model="row.contents">
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
      tableRow: [],
      finTableRow: [],
      hideItems:[],
      customOn: false,
      tempData:[],
    }
  },
  mounted(){
    // this.reCallData()
		this.$store.dispatch("init")
  },
  updated() {
    localStorage.setItem("toc", JSON.stringify(this.storeTableRow))
    localStorage.setItem("tocFin", JSON.stringify(this.storeFinTableRow))
    this.$emit("connect", this.tableRow)
    this.$emit("finish", this.finTableRow)
  },
  computed : {
		storeTableRow(){
			return this.$store.getters.getTableRow;
		},
		storeFinTableRow(){
			return this.$store.getters.getFinTableRow;
		},
    totalPeriod(){
      const fullItems = [...this.tableRow, ...this.finTableRow]
      let allTimes = []
      for(let item of fullItems) {
        allTimes.push(item.registDate, item.finDate);
      }
			const allTimes2 = allTimes.reduce((onlyArr, item) => {
				return onlyArr.includes(item) ? onlyArr : [...onlyArr, item]
			}, []).filter(Boolean)//중복제거, 빈값제거
			const term = ((basis) => {
				switch(basis){
					case "day" : return 86400000
					case "hours" : return 3600000
			}
			})("day")
			var minNum = parseInt(allTimes2.reduce((previous, current) => { 
				return previous < current ? previous:current;
      })/term)*term; 
      var maxNum = parseInt(allTimes2.reduce((previous, current) => { 
				return previous > current ? previous:current;
      })/term)*term;
      const defMaxNmin = `${(maxNum - minNum)/term} `;
			const allTime3 = [];
			if(defMaxNmin < 25){
				for(let i = 0; i < 25; i++){
					allTime3.push(minNum + i * term);
				}
			}
      return allTime3;
    }
  },
  methods: {
    issueID(){
      return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return 'a' + v.toString(16);
      });
    },
    controlLevelView(e){
      const inputValue = Number(e.currentTarget.value);
      for(let i = this.tableRow.length - 1; i > -1; i--){
        if(this.tableRow[i].level > inputValue){
          this.tableRow[i].status = false;
          console.log(`${this.tableRow[i].no}는 숨겨졌다`)
        } else {
          this.tableRow[i].status = true;
          console.log(`${this.tableRow[i].no}를 다시보여주자`)
        }
      }
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
      const targetArea = [...targetTR.querySelectorAll("td")];
      targetArea.push(targetTR.querySelector(".number"))
      for(let td of targetArea){
        td.style.backgroundColor = pickedColor;
      }
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
        status: true,
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
      const rows = [...document.querySelector(divID).querySelector("tbody").querySelectorAll("tr")];
      const children = [];
      const rowNo = row.querySelector(".number").textContent;
      for(let i = 0; i < rows.length; i++){
        if(rows[i].querySelector(".motherNumber").textContent == rowNo) {
          children.push(rows[i])
          children.push(this.findChildrenRow(rows[i], divID))
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
          for(let row of familyArray){
            row.classList.add("finish")
            row.querySelector(".number").classList.add("finish")
          }
          for(let item of items){
            item.status = "finish"
            item.finDate = this.getTime();
            item.convertedFinDate = this.convertTime(this.getTime());
          }
        } else {
          for(let row of familyArray) {
            row.classList.remove("finish")
            row.querySelector(".number").classList.remove("finish")
          }
          for(let item of items){
            item.status = ""
            item.finDate = "";
            item.convertedFinDate = "";
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
          this.$emit("finish", this.finTableRow);
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
    sortItemGroups(){
      this.tableRow.sort((a,b) => {
        return a["order"] - b["order"];
      })
      for(let i = 0; i < this.tableRow.length; i++){
        this.tableRow[i].order = i + 1;
      }
    },
    findMyOrder(motherObj){
      let lastBrother;
      let myOrder = Number(motherObj.order) + 0.1;
      for(let i = 0; i < this.tableRow.length; i++){
        if(this.tableRow[i].motherNumber == motherObj.no){
          lastBrother = this.tableRow[i];
          myOrder = Number(lastBrother.order) + 0.1;
        }
      }
      if(lastBrother){
        myOrder = this.findMyOrder(lastBrother)
      }
      return myOrder;
    },
    findMyColor(myObj){
			console.log("점검3")
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
      for(let i = 0; i < this.tableRow.length; i++){
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
			this.$store.dispatch("addRow", {item:newSubItem})
      // this.tableRow.splice(myOrder - 0.1, 0, newSubItem)
      // this.sortItemGroups()
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
      const newRow = this.itemClass(1, "", nextNumber, this.tableRow.length,"","","","firstLevel","rgba(0,255,0,1)")
			this.$store.dispatch("addRow", {item:newRow});
    },
    // reCallData(){
    //   const data = JSON.parse(localStorage.getItem("toc"))
    //   const finData = JSON.parse(localStorage.getItem("tocFin"))
    //   if(data){
    //     for(let i = 0; i < data.length; i++){
		// 			this.$store.dispatch("addRow", {item: data[i]});
    //     }
    //   }
    //   if(finData){
    //     for(let i = 0; i < finData.length; i++) {
    //       this.$store.dispatch("addFinRow", {item: finData[i]});
    //     }
    //   }
    // },
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
      if(targetRow.closest("div").id == "tableDiv"){
        location = this.storeTableRow;
      } else location = this.storeFinTableRow;
      const children = this.findMyChildren(targetRow, location)
      const targetArray = [targetRow,...children];
			for(let i = targetArray.length - 1; i > -1; i--){
				const targetIndex = this.findItsObjIndex(targetArray[i], location)
				if(location == this.storeTableRow){
					this.$store.dispatch("removeRow", {location : "table", index : targetIndex})
				} else this.$store.dispatch("removeRow", {location : "finTable", index : targetIndex})
			}
		},
      // const targetRow = e.currentTarget.closest("tr");
      // let location;
      // if(targetRow.closest("div").id == "tableDiv"){
      //   location = this.tableRow
      // } else location = this.finTableRow;
      // const children = this.findMyChildren(targetRow, location)
      // const targetArray = [targetRow,...children];
      // const targetDiv = targetRow.closest("div"); //tableDiv거나 finTableDiv거나
      // if(targetDiv.id == "tableDiv"){
      //   for(let i = targetArray.length - 1; i > -1; i--){
      //     let targetIndex = this.findItsObjIndex(targetArray[i], this.tableRow)
      //     this.tableRow.splice(targetIndex, 1)
      //   }
      // } else{
      //   for(let i = targetArray.length - 1; i > -1; i--){
      //     let targetIndex = this.findItsObjIndex(targetArray[i], this.finTableRow)
      //     this.finTableRow.splice(targetIndex, 1)
      //   }
      // }
    recoverBtnHandler(e){
      const targetRow = e.currentTarget.closest("tr");
      const targetIndex = this.findItsObjIndex(targetRow, this.storeFinTableRow)
			console.log(targetIndex)
      const targetObj = this.storeFinTableRow[targetIndex];
			console.log(targetObj)
      targetObj.finDate = ""
      targetObj.convertedFinDate = "";
			this.$store.dispatch("addRow", {item:targetObj})
			this.$store.dispatch("removeRow", {location : this.storeTableRow, index: targetIndex})
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
    convertTime2Date(time){
      const date = new Date(time);
      const year = date.getFullYear();
      const Month = String(date.getMonth() + 1).padStart(2,'0');
      const date2 = String(date.getDate()).padStart(2,'0');
      const hours = String(date.getHours()).padStart(2, "0");
      return `${year}-${Month}-${date2}, ${hours}`;
    }
  },
}

</script>

<style>

main{
  min-height: 80%;
  margin: 0.5vw;
  padding-top: 0;
}

#tableDiv{
  width: 100%;
  min-height: 50vh;
  margin-bottom: 5%;
  overflow-x: hidden;
  overflow-y: auto;
}

table{
  width: 100%;
  border-collapse: collapse;
  color: black;
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
  border: 1px red dotted;
  opacity: 1;
}

.number{
  float: right;
  display: table-cell;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
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
  width: 100%;
  height: 100%;
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
}

.title > input{
  background-color: transparent;
  border: none;
  width: 100%;
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

.hoverHidden > button{
  background-color: transparent;
  border: none;
}

.hoverHidden > button:active{
  background-color: rgba(207, 204, 204, 0.603);
  border-radius: 5px;
}

.finish{
  background-color: rgb(185, 185, 185) !important;
}

.finish *{
  text-decoration: line-through;
}

#finTableDiv{
  width: 100%;
}

#finTableDiv tr{
  background-color: rgb(190, 190, 190);
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

</style>