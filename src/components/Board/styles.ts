import styled from "styled-components";

export const Winner = styled.div`
  display: flexbox;
  background-color: #333;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  button {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;

    background-color: #4caf50;
    border: 0;

    font-size: 1rem;
    color: #fff;
  }

  div.game-over {
    opacity: 0.5;
  }

  div > button:disabled,
  div.game-over,
  div.game-over button {
    cursor: not-allowed;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 130px);
    grid-template-rows: repeat(3, 130px);
    gap: 1rem;

    margin: 1rem 0;
  }

  div > button {
    border: 0;
    cursor: pointer;
    font-size: 5rem;
    background-color: #fff;
  }

  div > button:disabled {
    background-color: #e4e4f2;
  }

  div > button.X {
    color: #ad4244;
  }

  div > button.O {
    color: #313dad;
  }
`;

export const Title = styled.h1`
  color: #6a7efc;
  font-size: 4rem;
  text-align: center;
`;

export const Description = styled.h2`
  color: #888;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
`;
