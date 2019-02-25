/* eslint-disable @typescript-eslint/no-explicit-any */
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

export default {
  async getApps({ commit }: any) {
    try {
      const appInfo = await (this as any).$axios.$get(
        `http://${host}:${port}/api/getApps`
      )
      commit('updateApps', { apps: appInfo.apps })
      commit('updateCurrent', { appName: appInfo.current })
    } catch (e) {
      console.error(e)
    }
  },
  async selectApp({ commit }: any, app: string) {
    try {
      const result = await (this as any).$axios.$post(
        `http://${host}:${port}/api/selectApp`,
        {
          appName: app
        }
      )
      commit('updateCurrent', { appName: result.appName })
    } catch (e) {
      console.error(e)
    }
  }
}
