import React from "react";

interface ISquare {
  id: number;
  content: string;
  isSelected: boolean;
}

interface IProps {
  square: ISquare;
  handleButtonClick: (idSquare: number) => void;
}

const Square: React.FC<IProps> = ({ square, handleButtonClick }: IProps) => {
  return (
    <button
      disabled={square.isSelected}
      className={square.content ? `square ${square.content}` : "square"}
      onClick={() => handleButtonClick(square.id)}
    >
      {square.content}
    </button>
  );
};

export default Square;
