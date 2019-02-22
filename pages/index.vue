<template>
  <section class="container">
    <div>
      <logo />
      <HelloWorld />
      <h1 class="title">
        {{ shibaLength }}
      </h1>
      <h2 class="subtitle">
        My astonishing Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
import HelloWorld from '~/components/HelloWorld.vue'
import { Context } from '@nuxt/vue-app'

// TODO: https://github.com/vuejs/vue-class-component#adding-custom-hooks
Component.registerHooks(['fetch'])

@Component({
  components: {
    Logo,
    HelloWorld
  },
  computed: {
    ...mapGetters('breed', {
      shibaLength: 'shibaLength'
    })
  }
})
export default class Home extends Vue {
  // ライフサイクル
  beforeCreate(): void {
    console.log('[index] call beforeCreate')
  }
  created(): void {
    console.log('[index] created')
    // this.$store.dispatch('breed/getBreeds')
  }
  beforeMount(): void {
    console.log('[index] beforeMount')
  }
  mounted(): void {
    console.log('[index] mounted')
    console.log(this.$store)
  }

  async fetch(ctx: Context): Promise<void> {
    console.log('[index] call fetch method')
    await ctx.store.dispatch('breed/getBreeds')
  }

  async asyncData(ctx: Context): Promise<void> {
    console.log('[index] call async data')
    await ctx.store.dispatch('breed/getBreeds')
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
