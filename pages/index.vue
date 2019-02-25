<template>
  <section class="container">
    <div>
      <h1 class="title">
        <span class="fa-stack fa-lg">
          <i class="fa fa-square fa-stack-2x"></i>
          <!-- <i class="fa fa-terminal fa-stack-1x fa-inverse"></i> -->
          <i class="fa fa-server fa-stack-1x fa-inverse"></i>
        </span>
        select json-server app
      </h1>
      <panel />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Panel from '~/components/AppPanel.vue'
import { Context } from '@nuxt/vue-app'

@Component({
  components: {
    Panel
  }
})
export default class AppHome extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fetch(ctx: Context): Promise<void> {
    await ctx.store.dispatch('getApps')
  }
}
</script>
