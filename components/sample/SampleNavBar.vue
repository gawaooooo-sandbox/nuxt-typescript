<template>
  <nav class="navbar has-background-light">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma"
          width="112"
          height="28"
        />
      </nuxt-link>
      <div
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        class="navbar-burger burger"
        data-target="navbarMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      id="navbarExampleTransparentExample"
      :class="{ 'is-active': showNav }"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/sample">
          HOME
        </nuxt-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-dropdown is-boxed">
            <nuxt-link
              v-for="item in items"
              :key="item.title"
              :to="item.url"
              class="navbar-item"
            >
              <span class="icon">
                <i :class="['fa', `fa-${item.icon}`]"></i>
              </span>
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
        <div class="navbar-item">
          <p class="control">
            <a
              href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip"
              class="button is-primary"
            >
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import feature from '~/pages/sample/feature.vue'
import contact from '~/pages/sample/contact.vue'

@Component({
  components: {
    feature,
    contact
  }
})
export default class SampleNavBar extends Vue {
  showNav: boolean = false
  items = [
    { title: 'Home', icon: 'home', url: '/sample' },
    { title: 'Feature', icon: 'code', url: '/sample/feature' },
    { title: 'Contact', icon: 'question', url: '/sample/contact' }
  ]
}
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>
