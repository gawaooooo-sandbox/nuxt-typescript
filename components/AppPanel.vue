<template>
  <nav class="panel">
    <p class="panel-heading">
      <i class="fa fa-hand-o-right fa-lg fa-fw" aria-hidden="true"></i>
      <span class="has-text-info">
        {{ this.$store.getters.currentApp() }}
      </span>
      <span v-if="this.$store.getters.currentApp()">
        選択中
      </span>
      <span v-else>
        appを選択
      </span>
    </p>

    <div class="panel-block">
      <p class="control has-icons-left">
        <input
          v-model="searchQuery"
          v-on:input="searchApp"
          class="input is-small"
          type="text"
          placeholder="search app"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>

    <a
      v-for="app in filterApp"
      :key="app.name"
      :class="{ 'is-active': $store.getters.currentApp() === app.name }"
      @click="select(app.name)"
      class="panel-block"
    >
      <span class="panel-icon">
        <i class="fa fa-grav fa-3x fa-fw"></i>
      </span>
      {{ app.name }}
    </a>

    <!-- TODO: なにかに使えそうな -->
    <!-- <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth">
        reset all filters
      </button>
    </div> -->
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Panel extends Vue {
  searchQuery = ''

  // method
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchApp(e: any) {
    this.searchQuery = e.target.value
  }

  async select(app: string) {
    await this.$store.dispatch('selectApp', app)
  }

  // computed
  get filterApp() {
    return this.$store.getters.filterApps(this.searchQuery)
  }
}
</script>

<style scoped>
.panel-heading {
  text-align: center;
  font-weight: 500;
  font-size: 2.25em;
}
.panel-block {
  font-size: 1.5rem;
  justify-content: center;
}
.panel-icon {
  font-size: 2.5rem;
}
</style>
