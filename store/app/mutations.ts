import { MutationTree } from 'vuex'
import { AppState } from '~/store/types'

const mutations: MutationTree<AppState> = {
  update: (state, payload) => {
    state.apps = { ...payload }
  }
}

export default mutations
