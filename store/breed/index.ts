import { Module } from 'vuex'
import { BreedState, RootState } from '../types'
import actions from './actions'
import mutations from './mutations'

const state: BreedState = {
  breeds: {},
  dogs: {}
}

export const breeds: Module<BreedState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
