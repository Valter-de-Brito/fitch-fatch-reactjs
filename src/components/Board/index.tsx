import React from "react";

import Square from "../Square";

interface ISquare {
  id: number;
  content: string;
}

const Board = () => {
	const [square, setSquare] = useState<ISquare>(Array(9).fill(null));

	return <Square square={square} handleButtonClick={handleButtonClick}/>;
}

export default Board;