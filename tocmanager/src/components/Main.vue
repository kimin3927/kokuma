



<template>
  <main>
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
          <tr v-for="(row,i) in tableRow" :key="row.id" :id="row.id" :class="classComputed[i]">
            <td class="level">{{row.level}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD">
              <div class="control">
                <svg viewBox="-2 -2 20 20" class="plus" style="width: 16px; height: 85%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;">
                  <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
                  </path>
                </svg>
                <svg @click="tableRowStyler" viewBox="-1 -2 12 12" class="dragHandle" style="width: 15px; height: 20px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;">
                  <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z">
                  </path>
                </svg>
              </div>
              <div class="number">{{row.no}}</div>
            </td>
            <td class="resgistDate">{{row.registDate}}</td>
            <td class='content'>
              <div class='contentWrapper'>
                  <div class='title'>
                      <input v-model="row.title">
                  </div>
                  <div class='contents'>
                      <input v-model="row.contents">
                  </div>
              </div>
              <div  class='extension hoverHidden'>
                  <button class='extensionBtn' @click="controlExtensionBtn">∨</button>
              </div>
            </td>
            <td class="finDate">
              <input v-model="row.finDate">
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
      <table v-if="finTableRow[0]" id="finTable">
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
          <tr v-for="row in finTableRow" :key="row.id" :id="row.id">
            <td class="level">{{row.level}}</td>
            <td class="motherNumber">{{row.motherNumber}}</td>
            <td class="numberTD"><div class="number">{{row.no}}</div></td>
            <td class="resgistDate">{{row.registDate}}</td>
            <td class='content'>
              <div class='contentWrapper'>
                  <div class='title'>
                      <input v-model="row.title">
                  </div>
                  <div class='contents'>
                      <input v-model="row.contents">
                  </div>
              </div>
              <div class='extension hoverHidden'>
                  <button class='extensionBtn' @click="controlExtensionBtn">∨</button>
              </div>
            </td>
            <td class="finDate">{{row.finDate}}</td>
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
      기민: "기민",
      tableRow: [],
      finTableRow: []
    }
  },
  computed : {
    classComputed: function () {
      const classMatch = {
        1 : "firstLevel",
        2 : "secondLevel",
        3 : "thirdLevel",
        4 : "fourthLevel"
      }
      const result = this.tableRow.map((item) => {
        const level = String(item.level)
        return classMatch[level]
      })
      return result
    }
  },
  mounted(){
    this.reCallData()
  },
  updated() {
    localStorage.setItem("toc", JSON.stringify(this.tableRow))
    localStorage.setItem("tocFin", JSON.stringify(this.finTableRow))
    this.$emit("connect", this.tableRow)
    this.$emit("finish", this.finTableRow)
  },
  methods: {
    issueID(){
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
      });
    },
    tableRowStyler(e){
      const targetRow = e.currentTarget.closest("tr");
      //상대위치 찾고, 
      //div 생성 미리 클래스 만들어놓고, 위치는 위에서 정의한 위치
      // append하고
      // 외부 클릭 및 esc는 remove시키고. 
      const tdGroup = [...targetRow.querySelectorAll("td"), targetRow.querySelector(".number")]
      const myColor = 'rgba(150,0,250,0.5)'
      for(let td of tdGroup){
        td.style.backgroundColor = myColor;
      }
    },
    itemClass(level, motherNumber, no, order, finDate, title, contents){
      const itemObj = {
        level : level,
        motherNumber : motherNumber,
        no :  no,
        order : order,
        finDate :  finDate,
        title :  title,
        contents :  contents,
        registDate :  this.clockSet(),
        status: "",
        id: this.issueID() //this가 가르키는 것은??
      }
      return itemObj;
    },
    finishBtnHandler(e){
      const targetRow = e.currentTarget.closest("tr");
      const targetIndex = this.findItsObjIndex(targetRow, this.tableRow)
      const targetObj = this.tableRow[targetIndex]
      const idNo = this.finTableRow.length + 1;
      const finNo = String(new Date().getFullYear()).slice(2,4) + String(new Date().getMonth() + 1).padStart(2,'0') + "-" +String(idNo).padStart(2,'0');
      targetObj.finDate = this.clockSet();
      targetObj.status = "finish"
      this.$emit("finish", this.finTableRow);
      if(targetObj.level !== 1){
        if(!targetRow.classList.contains("finish")) {
          targetRow.classList.add("finish")
        } else {
          targetRow.classList.remove("finish")
          targetObj.finDate = ""
        }
      } else if(targetObj.level == 1) {
        console.log(finNo)
        targetObj.no = finNo;
        console.log(targetObj)
        this.tableRow.splice(targetIndex, 1)
        this.finTableRow.push(targetObj);
      }
    },
    findItsObjIndex(row, array){
      for(let i = 0; i< array.length; i++){
        if(array[i].id == row.id){
          return i;
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
    makeSub(e){
      const motherRow = e.currentTarget.closest("tr");
      const motherIndex = this.findItsObjIndex(motherRow, this.tableRow)
      const motherObj = this.tableRow[motherIndex]
      const motherOrder = motherObj.order ;
      let myOrder = motherOrder + 0.1;
      let sibling = 1;
      let siblingOrder;
      for(let i = 0; i < this.tableRow.length; i++){
        if(this.tableRow[i].motherNumber == motherObj.no){
        sibling++
        siblingOrder = this.tableRow[i].order;
        myOrder = siblingOrder + 0.1;
        }
      }
      const myNumber = motherObj.no + "." + sibling;
      const newSubItem = this.itemClass(motherObj.level + 1, motherObj.no, myNumber, myOrder,"","") // new가 왜 불필요한지 
      this.tableRow.splice(motherOrder + 1, 0, newSubItem)
      this.sortItemGroups()
    },
    addNewRow(){
      let lastNumber = 0;
      if(this.tableRow.length !== 0){
        for(let i = 0; i < this.tableRow.length; i++) {
          if(this.tableRow[i].level == 1){
            lastNumber++
          }
        }
      }
      const nextNumber = lastNumber + 1;
      const newRow = this.itemClass(1, "", nextNumber)
      this.tableRow.push(newRow)
    },
    reCallData(){
      const data = JSON.parse(localStorage.getItem("toc"))
      const finData = JSON.parse(localStorage.getItem("tocFin"))
      if(data){
        for(let i = 0; i < data.length; i++){
          this.tableRow.push(data[i]);
        }
      }
      if(finData){
        for(let i = 0; i < finData.length; i++) {
          this.finTableRow.push(finData[i]);
        }
      }
    },
    controlExtensionBtn(e) {
      const targetBtn = e.currentTarget;
      const targetTR = targetBtn.closest("tr")
      const targetContents = targetTR.querySelector(".contents");
      if(targetBtn.textContent == "∨"){
        targetBtn.textContent = "∧";
        targetContents.style.height =  "20px";
        targetContents.querySelector("input").style.display = "block"
      } else {
        targetBtn.textContent = "∨";
        targetContents.style.height = "0";
        targetContents.querySelector("input").style.display = "none"
      }
    },
    removeRow(e){
      const targetRow = e.currentTarget.closest("tr");
      const targetDiv = targetRow.closest("div"); //tableDiv거나 finTableDiv거나
      if(targetDiv.id == "tableDiv"){
        let targetIndex = this.findItsObjIndex(targetRow, this.tableRow)
        this.tableRow.splice(targetIndex, 1)
      } else{
        let targetIndex = this.findItsObjIndex(targetRow, this.finTableRow)
        this.finTableRow.splice(targetIndex, 1)
      }
    },
    recoverBtnHandler(e){
      const targetRow = e.currentTarget.closest("tr");
      const targetIndex = this.findItsObjIndex(targetRow, this.finTableRow)
      const targetObj = this.finTableRow[targetIndex];
      this.tableRow.push(targetObj);
      this.finTableRow.splice(targetIndex, 1);
    },
    clockSet(){
      const date = new Date();
      const Month = String(date.getMonth() + 1).padStart(2,'0');
      const date2 = String(date.getDate()).padStart(2,'0');
      const hours = String(date.getHours()).padStart(2, "0");
      const minuetes = String(date.getMinutes()).padStart(2, "0");
      return `${Month}/${date2} ${hours}:${minuetes}`;
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
}

th{
  background-color: rgb(131, 221, 243);
}

th:nth-child(1){
  width: 11%;
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
  font-size: 0.8vw
}

.numberTD{
  display: flex;
  justify-content: space-between;
  border:none;
  border-radius: 10px 0 0 10px;
  text-align: right;
  padding: 0;
  background-color: transparent !important;
}

.control{
  display: flex;
  opacity: 0;
}

.control:hover{
  opacity: 1;
}

.control svg{
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

.number{
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: left;
  text-indent: 15%;
  border-radius: 10px 0 0 10px;
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

.contents > input{
  background-color: transparent;
  border: none;
  margin-top: 2px;
  width: 107%;
  display: none;
}

.finDate > input{
  background-color: transparent;
  border: none;
  width: 100%;
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
}

tr {
  height: 20px;
  border-top: white 2px solid;
}

.firstLevel > td {
  background-color: rgb(136, 218, 82);
}

.firstLevel > .numberTD > .number {
  background-color: rgb(136, 218, 82);
  width: 85%;
}

.secondLevel > td{
  background-color: rgba(136, 218, 82, 0.6);
}

.secondLevel > .numberTD > .number {
  background-color: rgba(136, 218, 82, 0.6);
  width: 68%;
}

.thirdLevel > td{
  background-color: rgba(211, 240, 51, 0.4);
}

.thirdLevel > .numberTD > .number {
  background-color: rgba(211, 240, 51, 0.4);
  width: 61%;
}

.fourthLevel > td{
  background-color: rgba(236, 234, 132, 0.4);;
}

.fourthLevel > .numberTD > .number {
  background-color: rgba(236, 234, 132, 0.4);;
  width: 43%;
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
  background-color: grey;
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

</style>