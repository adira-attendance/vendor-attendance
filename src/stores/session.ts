// import { defineStore } from 'pinia'
import Vuex from 'vuex'

const store={
  state:{
    user:{
      login:"",
      name:""
    }
  },
  getters:{},
  mutations:{
    setUser(state,{users}){
      state.user.login=users.login
      state.user.name=users.name
    }
  },
  actions:{
    logins({commit},users){
      commit('setUser',{users})
    },getUser({state}){
      console.log(state.user)
    }
  }
}
export default new Vuex.Store(store)