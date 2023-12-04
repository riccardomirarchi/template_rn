import { either, isEmpty, isNil } from 'ramda';

export const isNullOrEmpty = either(isNil, isEmpty) as (
  input: unknown,
) => input is null | undefined | '' | 0 | Array<never> | Record<string | number | symbol, never>;

export default isNullOrEmpty;
