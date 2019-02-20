<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <h1 class="title is-size-2">
          $store.state
          {{ $store.state.breed.breeds.setter.length }} $store.getters
          {{ $store.getters['breed/setterLength'] }}
        </h1>
        <h2 class="subtitle is-size-4">
          あばうと？
        </h2>
      </div>
    </section>
    <section class="container">
      <div class="columns is-multiline">
        <!-- v-forで繰り返し -->
        <div
          v-for="(item, i) in $store.getters['breed/breeds']"
          v-bind:key="i"
          class="column is-2"
        >
          <nuxt-link :to="{ path: 'dogs/' + i }" class="button">
            {{ i }}
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
