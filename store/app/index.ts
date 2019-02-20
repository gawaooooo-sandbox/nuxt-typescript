import { Module } from 'vuex'
import { AppState, RootState } from '~/store/types'
import actions from './actions'
// import getters from './getters'
import mutations from './mutations'

const state: AppState = {
  apps: []
}

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  actions,
  // getters,
  mutations
}
