import React from "react";

import Square from "../Square";

const Board = () => {
	const [square, setSquare] = useState([])

	return <Square square={square}/>;
}

export default Board;