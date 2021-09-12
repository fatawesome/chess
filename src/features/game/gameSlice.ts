import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createBoard } from './utils/board';
import { Board, Cell } from './types';

interface GameState {
  board: Board
}

const initialState: GameState = {
  board: createBoard(8)
}

interface MoveActionPayload {
  from: Cell;
  to: Cell
}

const gameSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<MoveActionPayload>) => {
      // TODO: move logic
    }
  }
})


