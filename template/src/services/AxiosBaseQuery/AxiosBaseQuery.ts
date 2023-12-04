/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { RootState } from '@state/store';
import { storeToken } from '@state/user/user.slice';
import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { defaultRequestHeaders } from './AxiosBaseQuery.constants';
import { AxiosBaseQueryArgs, AxiosBaseQueryReturnValue } from './AxiosBaseQuery.models';
import { executeQuery, silentlyRenewTokenAfterUnauthorized, validateResponseCode } from './AxiosBaseQuery.utils';

export const AxiosBaseQuery = ({ baseURL }: AxiosBaseQueryArgs): AxiosBaseQueryReturnValue => {
  return async (arg, { getState, dispatch }) => {
    const state = getState() as RootState;

    const headers = new AxiosHeaders({
      ...defaultRequestHeaders,
      Authorization: `Bearer ${state.user}`,
    });

    const config: AxiosRequestConfig = {
      ...arg,
      baseURL,
      headers,
      validateStatus: validateResponseCode,
    };

    const instance = axios.create(config);

    if (arg.useMock) {
      console.warn('useMock not yet implemented');
    }

    let { response, error } = await executeQuery({ instance, config });

    if (error?.response?.status === 401) {
      const renewed_token = await silentlyRenewTokenAfterUnauthorized({
        instance,
        config,
      });

      if (renewed_token) {
        dispatch(storeToken(renewed_token));

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${renewed_token}`,
        };

        ({ response, error } = await executeQuery({
          instance,
          config,
        }));
      }
    }

    if (response) {
      return { data: response.data };
    }

    return {
      error: {
        code: error?.response?.status!!,
        status: error?.response?.statusText!!,
      },
    };
  };
};
