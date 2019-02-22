<template>
  <div class="columns is-centered">
    <div class="column is-one-third is-mobile">
      <sign-in />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignIn from '~/components/SignIn.vue'
@Component({
  components: {
    SignIn
  }
})
export default class Contact extends Vue {}
</script>
