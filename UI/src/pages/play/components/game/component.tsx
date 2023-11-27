import { Fragment, useEffect, useRef, useState } from "react";

import { StyledText } from "config";
import { Enemy, Player, Size } from "pages/play/enums";

import { calculateWinner, checkTie, heuristic, delay, minimax } from "./utils";
import { ReplyButton, StyledTD } from "./styles";
import { Board, IGameProps } from "./types";
import { DELAY_TIME, sizeToShapeSize } from "./constants";
import "./styles.css";

const Game: React.FC<IGameProps> = ({
  boardSize,
  firstPlayer,
  secondPlayer,
  choosenOponent,
}) => {
  const initState = useRef<Board>(Array(boardSize * boardSize).fill(null));
  const [board, setBoard] = useState([...initState.current]);
  const [turn, setTurn] = useState<Player>(Player.X);
  const [moves, setMoves] = useState(0);

  const winner = calculateWinner(board, boardSize);

  useEffect(() => {
    (async () => {
      if (
        turn === secondPlayer &&
        choosenOponent === Enemy.Computer &&
        !winner
      ) {
        await delay(DELAY_TIME);
        if (boardSize === Size.Standart) {
          const bestMove = minimax(
            board,
            secondPlayer,
            boardSize,
            firstPlayer,
            secondPlayer,
            0,
            Infinity
          );
          if (bestMove.index !== -1) {
            const newBoard = [...board];
            newBoard[bestMove.index] = secondPlayer;
            setBoard(newBoard);
            setTurn(firstPlayer);
            setMoves((prev) => prev + 1);
          }
        } else {
          const newBoard = heuristic(board, boardSize, secondPlayer);
          setBoard(newBoard);
          setTurn(firstPlayer);
          setMoves((prev) => prev + 1);
        }
      }
    })();
  }, [
    board,
    turn,
    secondPlayer,
    choosenOponent,
    boardSize,
    firstPlayer,
    winner,
    moves,
  ]);

  const handleClick = (i: number) => {
    const squares = [...board];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = turn;
    setBoard(squares);
    setTurn((prev) => (prev === Player.O ? Player.X : Player.O));
    setMoves((prev) => prev + 1);
  };

  const disableBoard =
    choosenOponent === Enemy.Computer && turn === secondPlayer;

  const renderSquare = (i: number) => {
    return (
      <StyledTD
        $size={sizeToShapeSize[boardSize]}
        $disabled={disableBoard}
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </StyledTD>
    );
  };

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < boardSize; i++) {
      const squares = [];
      for (let j = 0; j < boardSize; j++) {
        squares.push(
          <Fragment key={i * boardSize + j}>
            {renderSquare(i * boardSize + j)}
          </Fragment>
        );
      }
      rows.push(<tr key={i}>{squares}</tr>);
    }
    return rows;
  };

  const isWinner = Boolean(winner) && `Winner: ${winner}`;
  const isTieGame = checkTie(board) && "Tie game";
  const status = isWinner || isTieGame || `Next player: ${turn}`;

  return (
    <>
      {!isTieGame && !isWinner ? (
        <StyledText $delay={0}>
          {!moves ? "Let the game begin" : status}
        </StyledText>
      ) : (
        <StyledText key={status} $delay={0}>
          {status}
        </StyledText>
      )}

      <div className="play-wrapper">
        <table>
          <tbody>{renderBoard()}</tbody>
        </table>
        <div className="endgame">
          <div className="text"></div>
        </div>
      </div>
      <ReplyButton
        onClick={() => {
          setBoard([...initState.current]);
          setTurn(Player.X);
          setMoves(0);
        }}
      >
        Reply
      </ReplyButton>
    </>
  );
};

export default Game;
