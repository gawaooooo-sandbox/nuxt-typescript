<template>
  <section class="container">
    <div class="columns is-multiline">
      <!-- 追加 -->
      <div v-for="(item, i) in dogs" v-bind:key="i" class="column is-1">
        <img :src="item" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/vue-app'
import { mapGetters } from 'vuex'

Component.registerHooks(['fetch'])

@Component({
  computed: {
    ...mapGetters('breed', {
      dogs: 'dogs'
    })
  }
})
export default class Dog extends Vue {
  async fetch(ctx: Context): Promise<void> {
    console.log('[dog] call fetch method')
    console.log(ctx.params)
    await ctx.store.dispatch('breed/getDogs', { breed: ctx.params.breed })
  }
}
</script>
