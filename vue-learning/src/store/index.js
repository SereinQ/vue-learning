import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import vueAxios from 'vue-axios'

Vue.use(Vuex, axios)

/* eslint-disable camelcase */
const state = {
  cars: [],
  currentPost: null
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
  },

  async GET_POST ({commit}, slug) {
    try {
      const result = await axios.get(`http://tomekolszowski.com/wp-json/acf/v3/posts/${slug}`)

      if (result.data) {
        commit('SET_POST', result.data)
      }

      return null
    } catch (err) {
      console.err(err)
    }
  }
}

const mutations = {
  SET_CARS (state, result) {
    state.cars = result
  },

  SET_POST (state, result) {
    state.currentPost = result
  }
}

const getters = {
  carVolvo: state => {
    if (!state.cars || state.cars.length === 0) {
      return null
    }

    return state.cars.map(el => el.acf.session[0]).filter(el => el.title.includes('Volvo'))
  },

  sessions: state => {
    if (!state.cars || state.cars.length === 0) {
      return null
    }

    return state.cars.map(car => {
      const { id, acf } = car
      const session = acf.session[0]
      const { title, gallery } = session

      // const id = car.id
      // const acf = car.acf
      // const session = acf

      return { id, gallery, title }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
