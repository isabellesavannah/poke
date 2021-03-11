import { AppState } from '../AppState'
import { pokeApi } from '../Services/axiosService'
class PokeService {
  async getPokes () {
    try {
      const res = await pokeApi.get('')
      AppState.pokes = res.data.results
      // console.log(res.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  async getPoke (name) {
    try {
      const res = await pokeApi.get(name)
      AppState.activePoke = res.data
    } catch (error) {
      console.error(error)
    }
  }
}
export const pokeService = new PokeService()
