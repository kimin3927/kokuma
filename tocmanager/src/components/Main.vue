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
              <div  class='extension hoverHidden'>
                  <button class='extensionBtn' @click="controlExtensionBtn">∨</button>
              </div>
            </td>
            <td class="finDate">
              <input v-model="row.finDate">
            </td>
            <td  class="manage">
              <div class='hoverHidden'>
                <button class='saveBtn'>완료</button>
                <button class='remove' style=color:red @click="removeRow">삭제</button>
                <button class='makeSub' @click="makeSub">추가</button>
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
      tableRow: []
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
    this.$emit("connect", this.tableRow)
  },
  methods: {
    issueID(){
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
      });
    },
    itemClass(level, motherNumber, no, order, finDate,title,contents){
      const itemObj = {
        level : level,
        motherNumber : motherNumber,
        no :  no,
        order : order,
        finDate :  finDate,
        title :  title,
        contents :  contents,
        registDate :  this.clockSet(),
        id: this.issueID() //this가 가르키는 것은??
      }
      return itemObj;
    },
    findItsObjIndex(row){
      for(let i = 0; i<this.tableRow.length; i++){
        if(this.tableRow[i].id == row.id){
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
      const motherIndex = this.findItsObjIndex(motherRow)
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
      let nextOrder;
      if(!this.tableRow[0]){
        nextOrder = 0
      } else{
        nextOrder = this.tableRow.length;
      }
      const nextNumber = this.tableRow.length + 1;
      const newRow = this.itemClass(1, "", nextNumber, nextOrder)
      this.tableRow.push(newRow)
    },
    reCallData(){
      const data = JSON.parse(localStorage.getItem("toc"))
      if(data){
        for(let i = 0; i < data.length; i++){
          this.tableRow.push(data[i]);
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
      const targetRow = e.currentTarget.closest("tr")
      const tbody = document.querySelector("tbody");
      const rows = tbody.querySelectorAll("tr");
      for(let i = 0; i < rows.length; i++){
        if(rows[i] == targetRow){
          this.tableRow.splice(i,1)
        }
      }
    },
    clockSet(){
      const date = new Date();
      const Month = date.getMonth();
      const date2 = date.getDate();
      const hours = String(date.getHours()).padStart(2, "0");
      const minuetes = String(date.getMinutes()).padStart(2, "0");
      return `${Month}/${date2} ${hours}:${minuetes}`;
    }
  },
}

</script>

<style>

main{
  margin: 0.5vw;
  padding: 1vw;
  padding-top: 0;
  border: 1px solid black;
}

#tableDiv{
  height: 65%;
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
  width: 7%;
  border-radius: 10px 0 0 10px;
}

th:nth-child(2){
  width: 7%;
}

th:nth-child(4){
  width: 7%;
}

th:nth-child(5){
  width: 10%;
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
  border-right: 1px solid black;
  font-size: 0.8vw
}

.numberTD{
  width: 5%;
  border-left:none;
  border-radius: 10px 0 0 10px;
  text-align: right;
  padding: 0;
  background-color: transparent !important;
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
}

.secondLevel > td{
  background-color: rgba(136, 218, 82, 0.6);
}

.secondLevel > .numberTD > .number {
  background-color: rgba(136, 218, 82, 0.6);
  width: 83%;
}

.thirdLevel > td{
  background-color: rgba(211, 240, 51, 0.4);
}

.thirdLevel > .numberTD > .number {
  background-color: rgba(211, 240, 51, 0.4);
  width: 76%;
}

.fourthLevel > td{
  background-color: rgba(236, 234, 132, 0.4);;
}

.fourthLevel > .numberTD > .number {
  background-color: rgba(236, 234, 132, 0.4);;
  width: 58%;
}

.hoverHidden > button{
  background-color: transparent;
  border: none;
}

.hoverHidden > button:active{
  background-color: rgba(207, 204, 204, 0.603);
  border-radius: 5px;
}

</style>