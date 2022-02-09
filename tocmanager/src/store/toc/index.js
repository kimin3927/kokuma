const moduleA = {
    state: () => ({ 
      tableRow : [],
      finTableRow : [],
      removedTable : [],
      totalPeriod : [
        "2022-01-20",
        "2022-01-21",
        "2022-01-22",
        "2022-01-23",
        "2022-01-24",
      ],
      registDates:[],
      finDates:[1]
    }),
    mutations: {
      addNewRow(state, {item, index}) {
        state.tableRow.splice(index, 0, item)
      },
      addRemovedItem(state, item) {
        state.removedTable.push(item)
      },
      removeRow(state, {location, index}) {
        console.log("삭제 뮤테이션 시도")
        console.log(location)
        console.log(index)
        if(location == "table"){
          state.tableRow.splice(index, 1)
        } else if(location == "finTable"){
          state.finTableRow.splice(index, 1)
        } else if(location == "removedTable"){
          state.removedTable.splice(index, 1)
        }
      },
      addFinRow(state, item){
        state.finTableRow.push(item)
      },
      sortItemGroups(state){
        state.tableRow.sort((a,b) => {
          return a["order"] - b["order"];
        })
        for(let i = 0; i < state.tableRow.length; i++){
          state.tableRow[i].order = i + 1;
        }
      },
      checkPeriod(state){
        const fullItems = [...state.tableRow, ...state.finTableRow]
        const allTimes1 = []
        const registDates = []
        const finDates= [];
        for(let item of fullItems) {
          allTimes1.push(item.registDate, item.finDate);
          registDates.push(item.registDate)
          finDates.push(item.finDate)
        }
        const allTimes2 = allTimes1.reduce((onlyArr, item) => {
          return onlyArr.includes(item) ? onlyArr : [...onlyArr, item]
        }, []).filter(Boolean)//중복제거, 빈값제거
        const basis = "day"
        const term = ((basis) => {
          switch(basis){
            case "day" : return 86400000
            case "hours" : return 3600000
          }
        })(basis)
        var minNum = parseInt(allTimes2.reduce((previous, current) => { 
          return previous < current ? previous:current;
        })/term)*term; 
        var maxNum = parseInt(allTimes2.reduce((previous, current) => { 
          return previous > current ? previous:current;
        })/term)*term;
        const defMaxNmin = `${(maxNum - minNum)/term} `;
        const allTime3 = [];
        if(defMaxNmin < 25){
          for(let i = -1; i < 24; i++){
            allTime3.push(minNum + i * term);
          }
        }
        const convertTime2Date = (time, standard) => {
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
        state.totalPeriod = allTime3.map((time) => {
          return convertTime2Date(time, basis)
        })
        state.finDates = finDates.filter(Boolean).map((time => {
          return convertTime2Date(time, basis)
        }));
        state.registDates = registDates.filter(Boolean).map((time => {
          return convertTime2Date(time, basis)
        }));
      }
    },
    actions: { // 혹시 API연동이 필요하다면 여기서
      init({commit}) {
        const data = JSON.parse(localStorage.getItem("toc"))
        const finData = JSON.parse(localStorage.getItem("tocFin"))
        data.sort((a,b) => {
          return  b["order"] - a["order"]
        })
        if(data){
          for(let i = 0; i < data.length; i++){
            const item = data[i]
            commit('addNewRow', { item, i });// 원래는 data[i]로 넣었는데 오류나서 item 재정의. 원래 이런 것인지?
          }
        }
        if(finData){
          for(let i = 0; i < finData.length; i++){
            commit('addFinRow', finData[i]);
          }
        }
      },
      finishItem({commit}, {item, index}){
        commit("addFinRow", item)
        commit('removeRow', {location:"table", index})
      },
      addRow({ commit, state }, {item, index = state.tableRow.length}){
        console.log("복구")
        commit('addNewRow', {item, index})
        commit("sortItemGroups")
      },
      addFinRow({ commit, state }, item) {
        console.log(state)
        commit('addFinRow', item)
      },
      addRow2({commit, state}, {item, location}){
        console.log(state)
        if(location == "tableRow") commit("addNewRow", {item, location: state.tableRow.length})
        if(location == "finTableRow") commit("addFinRow", {item, location: state.finTableRow.length})
        if(location == "removedTableRow") commit("addRemovedItem", {item, location: state.removedTable.length})
      },
      removeRow({ commit }, {location, index}){
        console.log("삭제 액션 시도")
        commit('removeRow', {"location": location, "index": index})
        console.log(`액션 인덱스${index}`)
      },
      checkPeriod({commit}){
        commit('checkPeriod');
      }
    },
    getters: {
      getTableRow : (state) => {
        const data = [...state.tableRow];
        return data;
      },
      getFinTableRow : (state) => {
        return state.finTableRow;
      },
      getPeriod(state){
        return state.totalPeriod;
      },
      getRegistDates(state){
        return state.registDates;
      },
      getFinDates(state){
        return state.finDates;
      },
      getRemovedTable(state){
        return state.removedTable;
      }
    }
  }
export default moduleA;
  