const moduleA = {
    state: () => ({ 
        count : 3,
    }),
    mutations: {
        increment (state, param) {
            // 상태 변이
            state.count = state.count+ param;
        }
    },
    actions: { // 혹시 API연동이 필요하다면 여기서
        firstAction ({ commit, state }, param) {
            console.log(state);
            commit('increment', param);
        },
        init({ commit, state }) {
            console.log(state);
            localStorage
            // commit('increment', param);
        }
    },
    getters: {
        getCount: state => {
            return state.count;
        }
    }
  }

export default moduleA;
  