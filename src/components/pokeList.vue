<template>
  <div class="pokeList" >
  <Poke v-for="pokeData in state.pokes" :key="pokeData.name" :poke="pokeData"/>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import { useRouter } from 'vue-router'
import { pokeService } from '../Services/pokeService'
import Poke from './poke'
export default {
  name: 'pokeList',
  setup () {
    // const router = useRouter()
    const state = reactive({
      pokes: computed(() => AppState.pokes)
    })
    onMounted(() => {
      console.log('herrro ')
      pokeService.getPokes()
    })
    return {
      state
    }
  },
  components: {
    Poke
  }
}
</script>

<style lang="scss" scoped>

</style>
