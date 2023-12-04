import { AxiosError } from 'axios';
import { ExecuteQueryParams } from './AxiosBaseQuery.models';

export const validateResponseCode = (code: number) => /^2\d{2}/.test(`${code}`);

export const executeQuery = async ({ instance, config }: ExecuteQueryParams) => {
  try {
    return { response: await instance.request(config) };
  } catch (e) {
    return { error: e as AxiosError };
  }
};

export const silentlyRenewTokenAfterUnauthorized = async ({ instance, config }: ExecuteQueryParams): Promise<string | undefined> => {
  try {
    return (await instance.request({ ...config, url: 'login_endpoint' })).data;
  } catch (e) {
    return undefined;
  }
};
