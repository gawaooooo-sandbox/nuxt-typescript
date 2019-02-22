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
        class="navbar-burger burger burger-font-icon"
      >
        <img src="@/assets/baseline-menu-24px.svg" alt="" />
      </div>
    </div>
    <div
      id="navbarExampleTransparentExample"
      :class="{ 'is-active': showNav }"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/">
          Home
        </nuxt-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a
            href="https://bulma.io/documentation/overview/start/"
            class="navbar-link"
          >
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <nuxt-link
              v-for="item in items"
              :key="item.title"
              :to="item.url"
              class="navbar-item"
            >
              {{ item.title }}
            </nuxt-link>
            <hr class="navbar-divider" />
            <a
              href="https://bulma.io/documentation/elements/box/"
              class="navbar-item"
            >
              Elements
            </a>
            <a
              href="https://bulma.io/documentation/components/breadcrumb/"
              class="navbar-item is-active"
            >
              Components
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                class="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="http://localhost:4000"
                target="_blank"
              >
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </p>
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
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import feature from '~/pages/feature.vue'
import contact from '~/pages/contact.vue'

@Component({
  components: {
    feature,
    contact
  }
})
export default class NavBar extends Vue {
  showNav = false
  items = [
    { title: 'Home', icon: 'home', url: '/' },
    { title: 'Feature', icon: 'code', url: '/feature' },
    { title: 'Contact', icon: 'question_answer', url: '/contact' }
  ]
}
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
.burger-font-icon img {
  height: 30px;
  margin: 10px 0 0 12px;
}
</style>
