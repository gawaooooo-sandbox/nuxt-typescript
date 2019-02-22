<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <quote-card v-for="item in items" :key="item.title" :val="item" />
          </div>
          <div class="column is-one-third">
            <quote-card v-for="item in items2" :key="item.title" :val="item" />
          </div>
          <div class="column is-one-third">
            <quote-card v-for="item in items3" :key="item.title" :val="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import QuoteCard from '~/components/QuoteCard.vue'

@Component({
  components: {
    QuoteCard
  }
})
export default class Feature extends Vue {
  items = [
    { title: 'Quote 1', subtitle: 'Programmer-01' },
    { title: 'Quote 2', subtitle: 'Programmer-02' },
    { title: 'Quote 3', subtitle: 'Programmer-03' }
  ]
  items2 = [{ title: 'Order 1', subtitle: 'Programmer-01' }]
  items3 = [
    { title: 'Deliver 1', subtitle: 'Programmer-01' },
    { title: 'Deliver 2', subtitle: 'Programmer-02' }
  ]
}
</script>
