<template>
  <div class="site">
    <nav-bar />
    <div class="siteContent">
      <nuxt class="has-text-centerd" />
    </div>
    <footer-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FooterBar from '~/components/FooterBar.vue'
import NavBar from '~/components/NavBar.vue'

@Component({
  components: {
    FooterBar,
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.siteContent {
  flex: 1;
}
</style>
