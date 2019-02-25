<template>
  <footer class="footer has-background-primary has-text-white">
    <div class="container">
      <div class="content has-text-centered is-info">
        <p>&copy;2019 WEB-DEV <i class="fa fa-coffee"></i></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class FooterBar extends Vue {
  name: string = 'FooterBar'
}
</script>

<style scoped>
footer.footer {
  padding: 0.5em;
}
</style>
