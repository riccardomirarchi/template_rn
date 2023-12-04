import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '@src/services/api';
import { MMKV } from 'react-native-mmkv';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, Storage, persistReducer, persistStore } from 'redux-persist';
import { KEY_USER_STORE, tokenStore } from './user/user.slice';

const reducers = combineReducers({
  [KEY_USER_STORE]: tokenStore.reducer,
  [api.reducerPath]: api.reducer,
});

const mmkv_storage = new MMKV({ id: 'redux-persist-store' });

export const storage: Storage = {
  setItem: (key, value) => {
    mmkv_storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = mmkv_storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    mmkv_storage.delete(key);
    return Promise.resolve();
  },
};

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: [KEY_USER_STORE],
  },
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    if (__DEV__) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
