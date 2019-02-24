export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addTask(state: any, payload: any) {
    state.items.push(payload.data)
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doneTask(state: any, payload: any) {
    const index = state.items.indexOf(payload.data)
    state.items[index].isDo = !payload.data.isDo
  }
}
