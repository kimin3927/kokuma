import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({ 
    bodyClicked : false,
    onItems : null,
  }),
  mutations: {
    bodyClick(state) {
      state.bodyClicked = !state.bodyClicked;
    },
    onItems(state, item){
      state.onItems = item;
    }
  },
  actions: {
    bodyClick({commit}){
      commit("bodyClick")
    },
    onItem({commit}, item){
      commit("onItems", item)
    }
  },
  getters: {
    getBodyClicked(state){
      return state.bodyClicked;
    },
    getOnItems(state){
      return state.onItems;
    }
  }
})
