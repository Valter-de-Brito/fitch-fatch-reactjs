import React from "react";

interface ISquare {
  id: number;
  content: string;
}

interface IProps {
  square: ISquare;
  handleButtonClick: () => void;
}

const Square: React.FC<IProps> = ({square, handleButtonClick}: <IProps>) => {
	return (
		<button className="square" onClick={() => handleButtonClick()}>{square.content}</button>
	);
};

export default Square;