import axios from "axios"

interface PokemonResponse {
  count: number
  next: string
  previous: string | null
  results: { name: string, url: string }[]
}

export async function getFirstTenPokemons() {
  const response = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
  // [Todo] here
}