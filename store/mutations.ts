import { GetAppsResult, SelectAppResult, State } from '../types/storeType'

export default {
  updateApps: (state: State, { apps }: GetAppsResult) => {
    state.apps = apps
  },
  updateCurrent: (state: State, { appName }: SelectAppResult) => {
    state.current = appName
  }
}
