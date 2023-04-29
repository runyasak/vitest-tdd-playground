import { expect, test, vi } from 'vitest'
import { getFirstPokemon } from './getFirstPokemon'
import axios from 'axios'
import { Mock } from 'vitest'

vi.mock('axios')

test('should get first pokemon', async () => {
  const expectedResult = { name: 'Pikachu' }
  const mockPokemons = {
    results: [{ name: 'Pikachu' }, { name: 'Ditto' }]
  }

  const mockAxios = axios.get as Mock

  mockAxios.mockResolvedValue({
    data: mockPokemons
  })

  const actualResult = await getFirstPokemon()

  expect(actualResult).toEqual(expectedResult)
})
