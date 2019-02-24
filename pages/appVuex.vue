<template>
  <div id="app">
    <ul>
      <!-- <item v-for="(item, index) in items" :item="item" :key="index" /> -->
      <item v-for="(item, index) in filterTask" :item="item" :key="index" />
    </ul>
    <div>
      <p>
        追加するタスク: <span>{{ inputTitle }}</span>
      </p>

      <input v-model="inputTitle" type="text" placeholder="タスクを入力" />
      <button @click="addTask(inputTitle)">
        追加
      </button>
    </div>
    <div class="columns">
      <div class="column is-half field is-grouped">
        <p class="control is-expanded">
          <input
            v-model="inputTitle"
            v-on:input="inputTask"
            class="input"
            type="text"
            placeholder="Input task"
          />
        </p>
        <p class="control">
          <a @click="addTask(inputTitle)" class="button is-info">
            Add
          </a>
        </p>
      </div>
    </div>

    <div class="control">
      <input
        v-model="searchQuery"
        class="input"
        type="text"
        placeholder="search text"
        disabled
      />
    </div>
    <div class="field has-addons">
      <div class="control">
        <input
          v-model="searchQuery"
          v-on:input="searchTask"
          class="input"
          type="text"
          placeholder="search task"
        />
      </div>
      <div class="control">
        <a class="button is-primary">
          Search
        </a>
      </div>
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
  // initial data
  inputTitle = ''
  searchQuery = ''

  // method
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputTask(e: any) {
    // console.log(`inputTitle ${this.inputTitle}`)
    // console.log(e.target.value)
    // console.log(e.data)
    this.inputTitle = e.target.value
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchTask(e: any) {
    this.searchQuery = e.target.value
    // TODO:
    // console.log(this.$store.state.items)
  }

  // computed
  get filterTask() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.$store.state.items.filter((item: any) => {
      return item.title.indexOf(this.searchQuery) !== -1
    })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  padding: 1.2rem;
}
</style>
