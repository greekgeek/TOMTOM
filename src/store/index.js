import Vuex from 'vuex'
const store = window.$store = new Vuex.Store({
  state: {
    dbData: [],
    index: 0
  },
  getters: {
    getDbData (state) {
      console.log('chandan getter')
      return state.dbData
    }
  },
  mutations: {
    UPDATE_DATA (state, par) {
      console.log('chandan mutation', par)
      state.dbData[state.index++] = par
    }
  },
  actions: {
  }
})
export default store
