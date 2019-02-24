<template>
  <div id="app">
    <ul>
      <item v-for="(item, index) in items" :item="item" :key="index" />
    </ul>
    <div>
      <input v-model="inputTitle" type="text" />
      <button @click="addItem">
        追加
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Item from '~/components/Item.vue'
@Component({
  components: {
    Item
  }
})
export default class App extends Vue {
  inputTitle = ''
  items = [
    { isDo: false, title: 'タスク1' },
    { isDo: true, title: 'タスク2' },
    { isDo: false, title: 'タスク3' }
  ]

  addItem() {
    this.items.push({
      title: this.inputTitle,
      isDo: false
    })
  }
}
</script>
