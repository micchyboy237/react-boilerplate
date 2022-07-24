import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import reducer from './reducer';

export const store = configureStore({
  reducer,
});

setupListeners(store.dispatch);
