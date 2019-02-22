<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <test-card v-for="item in items" :key="item.title" :val="item" />
          </div>
          <div class="column is-one-third">
            <test-card v-for="item in items2" :key="item.title" :val="item" />
          </div>
          <div class="column is-one-third">
            <test-card v-for="item in items3" :key="item.title" :val="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TestCard from '~/components/sample/TestCard.vue'

@Component({
  components: {
    TestCard
  },
  layout: 'sample'
})
export default class TestBulma extends Vue {
  items = [
    { title: 'test1', subtitle: 'Program-01' },
    { title: 'test2', subtitle: 'Program-02' },
    { title: 'test3', subtitle: 'Program-03' }
  ]
  items2 = [{ title: 'test4', subtitle: 'Program-01' }]
  items3 = [{ title: 'test5', subtitle: 'Program-01' }]
}
</script>
