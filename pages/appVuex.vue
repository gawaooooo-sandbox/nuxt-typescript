<template>
  <div id="app">
    <ul>
      <item v-for="(item, index) in items" :item="item" :key="index" />
    </ul>
    <div>
      <input v-model="inputTitle" type="text" />
      <button @click="addTask(inputTitle)">
        追加
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapActions, mapState } from 'vuex'
import Item from '~/components/ItemVuex.vue'
@Component({
  components: {
    Item
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions(['addTask'])
  }
})
export default class App extends Vue {
  inputTitle = ''
}
</script>
