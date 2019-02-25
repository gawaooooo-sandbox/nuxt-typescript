/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  updateApps: (state: any, { apps }: any) => {
    state.apps = apps
  },
  updateCurrent: (state: any, { appName }: any) => {
    state.current = appName
  }
}
