<template>
  <nav
    class="navbar has-background-grey-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-heartbeat fa-stack-1x fa-inverse"></i>
        </span>
      </a>

      <a
        @click="toggleMenu"
        :class="{ 'is-active': isMenuActive }"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navMenu"
      :class="{ 'is-active': isMenuActive }"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <!-- <strong>Sign up</strong> -->
              <i class="fa fa-gitlab fa-lg" aria-hidden="true"></i>
              gitlabへのリンクを
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
@Component
export default class NavBar extends Vue {
  isMenuActive = false

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive
  }

  @Watch('$route')
  onRouteChange(): void {
    this.isMenuActive = false
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
.burger-font-icon img {
  height: 30px;
  margin: 10px 0 0 12px;
}
</style>
