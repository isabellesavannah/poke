<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h1>Catch Your Pokemon</h1>
        <poke-list/>
      </div>
      <div class="col-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import pokeList from './components/pokeList.vue'
import { computed } from '@vue/runtime-core'
import { AppState } from './AppState'
export default {
  components: { pokeList },
  setup () {
    // eslint-disable-next-line no-unused-vars
    const state = reactive({
      AppState: computed(() => AppState)
    })
    return {
      state
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
