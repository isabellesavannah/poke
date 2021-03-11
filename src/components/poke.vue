<template>
  <div class="poke">
    <div @click="getDetails(poke.name)">
        <p>
          {{poke.name}}
        </p>
    </div>
  </div>
</template>

<script>
import { pokeService } from '../Services/pokeService'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'poke',
  props: {
    poke: Object
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    // const state = { name: poke.name }
    return {
      // state,
      route,
      async getDetails (name) {
        pokeService.getPoke(name)
        router.push({ name: 'pokeDetails' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
