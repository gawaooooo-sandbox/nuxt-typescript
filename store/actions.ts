export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addTask({ commit }: any, title: string) {
    const newItem = {
      title: title,
      isDo: false
    }
    commit('addTask', {
      data: newItem
    })
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doneTask({ commit }: any, item: any) {
    // eslint-disable-next-line no-console
    console.log(' vuex actions doneTask')
    commit('doneTask', {
      data: item
    })
  }
}
