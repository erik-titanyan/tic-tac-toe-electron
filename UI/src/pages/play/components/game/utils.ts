import { Player, Size } from "pages/play/enums";
import { Board, Move } from "./types";

export function generateWinningCombos(boardSize: number) {
  const combos = [];

  for (let i = 0; i < boardSize * boardSize; i += boardSize) {
    const row = [];
    for (let j = i; j < i + boardSize; j++) {
      row.push(j);
    }
    combos.push(row);
  }

  for (let i = 0; i < boardSize; i++) {
    const col = [];
    for (let j = i; j < boardSize * boardSize; j += boardSize) {
      col.push(j);
    }
    combos.push(col);
  }

  const diagonal1 = [];
  for (let i = 0; i < boardSize * boardSize; i += boardSize + 1) {
    diagonal1.push(i);
  }
  combos.push(diagonal1);

  const diagonal2 = [];
  for (
    let i = boardSize - 1;
    i < boardSize * boardSize - 1;
    i += boardSize - 1
  ) {
    diagonal2.push(i);
  }
  combos.push(diagonal2);

  return combos;
}

export const calculateWinner = (squares: Board, size: Size): string | null => {
  const lines = generateWinningCombos(size);
  for (let i = 0; i < lines.length; i++) {
    let firstEl = squares[lines[i][0]];
    if (firstEl) {
      const isWinner = lines[i].every((index) => squares[index] === firstEl);

      if (isWinner) {
        return firstEl;
      }
    }
  }
  return null;
};

export const checkTie = (board: Board) => {
  return emptySquares(board).length === 0;
};

export const emptySquares = (board: Board) => {
  return board.reduce(
    (indices: number[], cell: string | null, index: number) => {
      if (!cell) indices.push(index);
      return indices;
    },
    []
  );
};

export const minimax = (
  b: Board,
  player: Player,
  boardSize: Size,
  humanPlayer: Player,
  computerPlayer: Player,
  depth: number,
  maxDepth: number
): Move => {
  const board = [...b];
  const emptyIndices = emptySquares(board);
  const winner = calculateWinner(board, boardSize);

  if (winner === humanPlayer) {
    return { score: -10, index: -1 };
  } else if (winner === computerPlayer) {
    return { score: 10, index: -1 };
  } else if (emptyIndices.length === 0 || depth === maxDepth) {
    return { score: 0, index: -1 };
  }

  const moves: Move[] = [];
  for (const index of emptyIndices) {
    const move: Move = { index, score: 0 };
    board[index] = player;

    if (player === computerPlayer) {
      const result = minimax(
        board,
        humanPlayer,
        boardSize,
        humanPlayer,
        computerPlayer,
        depth + 1,
        maxDepth
      );
      move.score = result.score;
    } else {
      const result = minimax(
        board,
        computerPlayer,
        boardSize,
        humanPlayer,
        computerPlayer,
        depth + 1,
        maxDepth
      );
      move.score = result.score;
    }

    board[index] = null;
    if (
      (player === computerPlayer && move.score === 10) ||
      (player === humanPlayer && move.score === -10)
    )
      return move;
    else moves.push(move);
  }

  let bestMove: number, bestScore: number;
  if (player === computerPlayer) {
    bestScore = -1000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    bestScore = 1000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove!];
};

export function heuristic(b: Board, n: Size, computerPlayer: Player) {
  const board = [...b];
  let moved = false;

  const humanPlayer = computerPlayer === Player.X ? Player.O : Player.X;

  // Check for winning moves
  for (let i = 0; i < n * n; i++) {
    if (!board[i]) {
      board[i] = computerPlayer;
      if (calculateWinner(board, n) === computerPlayer) {
        moved = true;
        break;
      }
      board[i] = null; // Undo move
    }

    if (moved) {
      break;
    }
  }

  // Check for blocking moves
  if (!moved) {
    for (let i = 0; i < n * n; i++) {
      if (!board[i]) {
        board[i] = humanPlayer;

        if (calculateWinner(board, n) === humanPlayer) {
          board[i] = computerPlayer;
          moved = true;
          break;
        }
        board[i] = null; // Undo move
      }

      if (moved) {
        break;
      }
    }
  }

  // Fallback to the original strategy
  if (!moved) {
    for (let i = 0; i < n * n; i++) {
      if (!board[i]) {
        board[i] = computerPlayer;
        moved = true;
        break;
      }
      if (moved) {
        break;
      }
    }
  }

  return board;
}

export const delay = (timeout: number) =>
  new Promise((res) => setTimeout(res, timeout));
