import React, { useState, useEffect } from "react";
import loadBoard from "../../utils/loadBoard";

import Square from "../Square";

import { Container, Title, Description, Winner } from "./styles";

interface ISquare {
  id: number;
  content: string;
  isSelected: boolean;
}

const Board = () => {
  const initializeBoard = () => loadBoard();
  const [square, setSquare] = useState<ISquare[]>(initializeBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    ChechWinner(square);

    if (square.every((item) => item.content !== "") && !winner) {
      setWinner("Drew");
    }
  }, [square, winner]);

  const handleButtonClick = (idSquare: number) => {
    if (winner) return;

    setSquare(
      square.map((item) =>
        item.id === idSquare
          ? { ...item, content: player, isSelected: true }
          : item
      )
    );

    setPlayer(player === "X" ? "O" : "X");
  };

  const ChechWinner = (squares: ISquare[]) => {
    const possibilitys = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibilitys.length; i++) {
      const [a, b, c] = possibilitys[i];

      if (
        squares[a].content &&
        squares[a].content === squares[b].content &&
        squares[a].content === squares[c].content
      ) {
        setWinner(squares[a].content);
      }
    }
  };

  const resetGame = () => {
    setSquare(initializeBoard);
    setPlayer(winner === "Drew" ? "X" : winner);
    setWinner("");
  };

  return (
    <>
      <Winner />
      <Container>
        <Title>Fitch Fatch</Title>
        {winner ? (
          <>
            <Description>The Winner is: {winner}</Description>
            <button onClick={resetGame}>Reset</button>
          </>
        ) : (
          <Description>Next Player: {player}</Description>
        )}
        <div className={winner ? "game-over" : ""}>
          {square.map((square) => (
            <Square
              key={square.id}
              square={square}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Board;
