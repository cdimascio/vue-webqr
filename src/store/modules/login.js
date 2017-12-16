import * as types from '../mutation.types'

const state = {
  user: null,
}

// getters
const getters = {
  isLoggedIn: state => !!(state.user && state.user.username),
}

// actions
const actions = {
  login({ commit, state }, user) {
    console.log('------------login 1')
    commit(types.LOGIN_REQUEST)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('------------login done', user)
        commit(types.LOGIN_SUCCESS, user)
        resolve(user)
      }, 250)
    })
  },
}

// mutations
const mutations = {
  [types.LOGIN_REQUEST](state) {
    state.user = null
  },

  [types.LOGIN_SUCCESS](state, user) {
    console.log('login success', user)
    state.user = user
  },

  [types.LOGIN_FAILURE](state) {
    state.user = null
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
