<template>
  <section class="container">
    <div>
      <h1 class="title">
        Nuxtapp
      </h1>
      <div class="links">
        <nuxt-link class="btn" to="/sample/testbulma">
          bulma test page
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  },
  layout: 'sample'
})
export default class SampleHome extends Vue {}
</script>
