import { GetterTree } from 'vuex'
import { BreedState, RootState } from '~/store/types'

const getters: GetterTree<BreedState, RootState> = {
  setterLength: (state: BreedState) => {
    if (state.breeds && state.breeds.setter) {
      return state.breeds.setter.length
    }
    return 0
  },
  shibaLength: (state: BreedState) => {
    if (state.breeds && state.breeds.shiba) {
      return state.breeds.shiba.length
    }
    return 0
  },
  breeds: (state: BreedState) => {
    return state.breeds
  },
  dogs: (state: BreedState) => {
    return state.dogs
  }
}

export default getters
