/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  filterApps: (state: any) => (search: any) => {
    const filtered = []
    for (const t in state.apps) {
      if (state.apps[t].name.indexOf(search) !== -1) {
        filtered.push(state.apps[t])
      }
    }
    return filtered
  },
  currentApp: (state: any) => () => {
    return state.current
  }
}
