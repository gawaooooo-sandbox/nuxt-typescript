import { State } from '../types/storeType'
export default {
  filterApps: (state: State) => (search: string) => {
    const filtered = []
    for (const key in state.apps) {
      const app = state.apps[key]
      if (!app.db) continue
      if (app.name.indexOf(search) !== -1) {
        filtered.push(app)
      }
    }
    return filtered
  },
  currentApp: (state: State) => () => {
    return state.current
  }
}
