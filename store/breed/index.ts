import { Module } from 'vuex'
import { BreedState, RootState } from '~/store/types'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state: BreedState = {
  breeds: {},
  dogs: {}
}

export const breed: Module<BreedState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
