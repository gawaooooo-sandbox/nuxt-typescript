import { GetterTree } from 'vuex'
import { BreedState, RootState } from '~/store/types'

const getters: GetterTree<BreedState, RootState> = {
  setterLength: (state: BreedState) => {
    return state.breeds.setter.length
  },
  shibaLength: (state: BreedState) => {
    return state.breeds.shiba.length
  },
  breeds: (state: BreedState) => {
    return state.breeds
  },
  dogs: (state: BreedState) => {
    return state.dogs
  }
}

export default getters
