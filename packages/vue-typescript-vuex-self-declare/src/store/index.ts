import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface State {
  count: number
}

export interface Context {
  commit: (name: string) => void
}

export interface Mutations {
  [key: string]: (state: State, payload?: any) => void
}

export interface Actions {
  [key: string]: (context: Context, payload?: any) => void
}

export const state: State = {
  count: 0
}

export const mutations: Mutations = {
  increment(state) {
    state.count++
  }
}

export const actions: Actions = {
  increment({ commit }) {
    commit('increment')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
