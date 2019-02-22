<template>
  <div class="site">
    <sample-nav-bar />
    <div class="siteContent">
      <nuxt class="has-text-centerd" />
    </div>
    <footer-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FooterBar from '~/components/sample/FooterBar.vue'
import SampleNavBar from '~/components/sample/SampleNavBar.vue'

@Component({
  components: {
    FooterBar,
    SampleNavBar
  }
})
export default class Sample extends Vue {}
</script>
