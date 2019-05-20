import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import vueAxios from 'vue-axios'

Vue.use(Vuex, axios)

/* eslint-disable camelcase */
const state = {
  cars: []
}

const actions = {
  async GET_ALL_CARS ({ commit }) {
    try {
      const result = await axios.get(`http://tomekolszowski.com/wp-json/acf/v3/posts?per_page=80`)

      if (result.data) {
        commit('SET_CARS', result.data)
      }

      return null
    } catch (err) {
      console.error({ store: 'index/GET_ALL_CARS', error: err })
    }
  }
}

const mutations = {
  SET_CARS (state, result) {
    state.cars = result
    console.log('SET_CARS', state.cars)
  }
}

const getters = {
  bmw1: state => {
    return state.cars.filter(car => car.acf.session[0].title === 'BMW M140i')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
