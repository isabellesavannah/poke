<template>
  <div class="pokeDetails">
    <div v-if="state.poke.sprites" class="card" style="width: 18rem;">
      <div class="card-header">
        {{state.poke.name}}
      </div>
      <img class="card-img-top" :src="state.poke.sprites.front_default" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          <span>{{state.poke.types[0].type.name}} </span>
          <span v-if="state.poke.types[1]">{{' ' + state.poke.types[1].type.name}}</span>
        </p>
        <p>
          Height: {{state.poke.height}}
        </p>
        <p>
          Weight: {{state.poke.weight}}
        </p>
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
