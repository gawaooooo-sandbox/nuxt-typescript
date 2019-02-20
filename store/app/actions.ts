/* eslint-disable no-console */
import { ActionTree } from 'vuex'
import { AppState, RootState } from '~/store/types'

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

const actions: ActionTree<AppState, RootState> = {
  async getApps({ commit }) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const apps = await (this as any).$axios.$get(
        `http://${host}:${port}/api/getApps`
      )
      commit('update', apps)
    } catch (e) {
      console.error(e)
    }
  }
}

export default actions
