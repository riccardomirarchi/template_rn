import { api } from '@services/api';
import { IPokemon } from './models/getPokemonByName';

export const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => ({
        url: `pokemon/${name}`,
      }),
      providesTags: ['getPokemonByName'],
    }),
  }),
  overrideExisting: false,
});

export const {
  endpoints: { getPokemonByName },
} = pokemonApi;
