import axios from "axios"

interface PokemonResponse {
  count: number
  next: string
  previous: string | null
  results: { name: string, url: string }[]
}

export async function getFirstPokemon() {
  const response = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
  const firstPokemon = response.data.results[0]
  return firstPokemon
}