<template>
  <li v-bind:class="{ 'is-do': item.isDo }" @click="done(item)">
    {{ item.title }}
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  props: ['item']
})
export default class Item extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  done(item: any) {
    item.isDo = !item.isDo
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
li.is-do {
  text-decoration: line-through;
}
</style>
