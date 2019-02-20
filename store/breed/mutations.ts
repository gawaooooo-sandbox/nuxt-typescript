import { MutationTree } from 'vuex'
import { BreedState } from '../types'

const mutations: MutationTree<BreedState> = {
  update: (state, payload) => {
    state.breeds = { ...payload }
  },
  updateDog: (state, data) => {
    state.dogs = { ...data }
  }
}

export default mutations
