import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardSlice';

const reducer = combineReducers({
  board: boardReducer
});

export const store = configureStore({ reducer, devTools: true });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
