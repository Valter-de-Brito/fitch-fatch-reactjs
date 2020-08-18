interface ISquare {
  id: number;
  content: string;
  isSelected: boolean;
}

const loadBoard = (): ISquare[] => {
  let cards: ISquare[] = [];

  for (let index = 0; index < 9; index++) {
    cards.push({ id: index, content: "", isSelected: false });
  }

  return cards;
};

export default loadBoard;
