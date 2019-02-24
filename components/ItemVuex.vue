<template>
  <li v-bind:class="{ 'is-do': item.isDo }" @click="doneTask(item)">
    {{ item.title }}
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapActions } from 'vuex'
@Component({
  props: ['item'],
  methods: {
    ...mapActions(['doneTask'])
  }
})
export default class Item extends Vue {}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
li.is-do {
  text-decoration: line-through;
}
</style>
