import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ICustomError {
  status: string;
  code: number;
}

export interface AxiosBaseQueryArgs {
  baseURL: string;
}

export type AxiosRequestMethods = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export interface AxiosEndpointParams {
  url: string;
  method?: AxiosRequestMethods;
  params?: unknown;
  data?: unknown;
  useMock?: boolean;
}

export interface ExecuteQueryParams {
  instance: AxiosInstance;
  config: AxiosRequestConfig;
}

export type AxiosBaseQueryReturnValue = BaseQueryFn<AxiosEndpointParams, unknown, ICustomError>;
