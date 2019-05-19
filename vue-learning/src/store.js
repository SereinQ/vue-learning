/* eslint-disable camelcase */
const initialState = () => ({
  cars: null
})

const state = () => initialState()

const actions = {
  async GET_ALL_CARS ({ commit }) {
    try {
      const result = await this.$axios.get(`http://tomekolszowski.com/wp-json/acf/v3/posts?per_page=80`, {
        params: {
          per_page: 5,
          offset: 0,
          orderby: 'menu_order',
          order: 'asc'
        }
      })

      if (result.data) {
        commit('SET_CARS', { data: result.data })
      }

      // return null
    } catch (err) {
      console.error({ store: 'store/GET_ALL_CARS', error: err })
    }
  }
}

const mutations = {
  SET_CARS (state, { data }) {
    console.log('SET_CARS')
    state.cars = state.cars ? state.cars.concat(data) : data
  },
  RESET_STATE (state) {
    Object.assign(state, initialState())
  }
}

const getters = {
  cars: state => {
    return state.cars.map(el => {
      const { acf } = el
      const {
        images,
        session,
        description
      } = acf

      return {
        images,
        session,
        description
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
