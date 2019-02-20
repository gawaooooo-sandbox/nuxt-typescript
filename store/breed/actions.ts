/* eslint-disable no-console */
import { ActionTree } from 'vuex'
import { BreedState, RootState } from '~/store/types'

const actions: ActionTree<BreedState, RootState> = {
  async getBreeds({ commit }) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const breeds = await (this as any).$axios.$get(
        'https://dog.ceo/api/breeds/list/all'
      )
      commit('update', breeds.message)
    } catch (e) {
      console.log(e)
    }
  },

  async getDogs({ commit }, { breed }) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dogs = await (this as any).$axios.$get(
        `https://dog.ceo/api/breed/${breed}/images`
      )
      commit('updateDog', dogs.message)
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
