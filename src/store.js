import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    contacts(state) {
      return state.contacts
    }
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    }
  },
  actions: {

  }
})
