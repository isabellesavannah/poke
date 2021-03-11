<template>
  <div class="pokeDetails">
    <div v-if="state.poke.sprites" class="card" style="width: 18rem;">
      <div class="card-header">
        {{state.poke.name}}
      </div>
      <img class="card-img-top" :src="state.poke.sprites.front_default" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'pokeDetails',
  setup () {
    const state = reactive({
      poke: computed(() => AppState.activePoke)

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
