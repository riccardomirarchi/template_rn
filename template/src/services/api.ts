import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosBaseQuery } from './AxiosBaseQuery/AxiosBaseQuery';

export type TagTypes = 'getPokemonByName';

export const tagTypes: TagTypes[] = ['getPokemonByName'];

export const api = createApi({
  baseQuery: AxiosBaseQuery({
    baseURL: 'https://pokeapi.co/api/v2/',
  }),
  tagTypes,
  endpoints: () => ({}),
});
