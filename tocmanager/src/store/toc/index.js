const moduleA = {
    state: () => ({ 
      tableRow : [],
      finTableRow : []
    }),
    mutations: {
      addNewRow(state, {item, index}) {
        console.log(item)
        console.log(index)
        state.tableRow.splice(index, 0, item)
      },
      removeRow(state, {location, index}) {
        if(location == "table"){
          state.tableRow.splice(index, 1)
        } else {
          console.log(location, index)
          state.finTableRow.splice(index, 1)
        }
      },
      addFinRow(state, item){
        state.finTableRow.push(item)
      }
    },
    actions: { // 혹시 API연동이 필요하다면 여기서
      init({ commit, state }) {
        console.log(state);
        const data = JSON.parse(localStorage.getItem("toc"))
        const finData = JSON.parse(localStorage.getItem("tocFin"))
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
        console.log(state)
        console.log(item)
        console.log(index)
        commit('addNewRow', {item, index})
      },
      addFinRow({ commit, state }, item) {
        console.log(state)
        commit('addFinRow', item)
      },
      removeRow({ commit, state }, {location, index}){
        console.log(location, index)
        commit('removeRow', {"location": location, "index": index})
        console.log(state)
      }
    },
    getters: {
      getTableRow : (state) => {
        return state.tableRow
      },
      getFinTableRow : (state) => {
        return state.finTableRow
      }
    }
  }
export default moduleA;
  