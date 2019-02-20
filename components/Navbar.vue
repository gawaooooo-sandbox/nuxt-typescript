<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        あばうと
      </div>
      <div
        @click="toggleMenu"
        :class="{ 'is-active': isMenuActive }"
        class="navbar-burger"
        data-target="navMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="navMenu"
      :class="{ 'is-active': isMenuActive }"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">
          トップ
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          あばうと
        </nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">
          こんたくと
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  // コンポーネント内の状態 data
  isMenuActive: boolean = false

  // ライフサイクル
  mounted(): void {
    // eslint-disable-next-line no-console
    console.log('mounted')
  }

  // コンポーネント内のメソッド
  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive
  }

  // dataの変更を監視し、変更時に呼び出されるメソッドを定義
  @Watch('$route')
  onRouteChange(): void {
    this.isMenuActive = false
  }
}
</script>
