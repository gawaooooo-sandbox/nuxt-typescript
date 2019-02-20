<template>
  <section class="hero is-info is-bold">
    <div class="hero-body">
      <h1 class="title is-size-2">
        Contact
      </h1>
      <h2 class="subtitle is-size-4">
        コンタクト？？
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/vue-app'

Component.registerHooks(['fetch'])

@Component
export default class App extends Vue {
  async fetch(ctx: Context): Promise<void> {
    console.log('[contact] call fetch method')
    await ctx.store.dispatch('app/getApps')
  }
}
</script>
