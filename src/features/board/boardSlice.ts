import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createEmptyBoard } from './utils/board';
import { Board, Cell } from './types';
import { fillDefaultFigures } from './utils/defaultBoard';

interface BoardState {
  board: Board;
}

const initialState: BoardState = {
  board: fillDefaultFigures(createEmptyBoard(8))
}

interface MoveActionPayload {
  from: Cell;
  to: Cell
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<MoveActionPayload>) => {
      const canPerformMove = action.payload.from
        .getFigure()
        ?.validateMove(action.payload.from.coordinate, action.payload.to.coordinate);

      if (canPerformMove) {
        const { x: x1, y: y1 } = action.payload.from.coordinate;
        const { x: x2, y: y2 } = action.payload.to.coordinate;
        state.board[x1][y1].setFigure(undefined);
        state.board[x2][y2].setFigure(action.payload.from.getFigure());
      }
    }
  }
});

export const { move } = boardSlice.actions;
export default boardSlice.reducer;

