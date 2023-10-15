import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from "@testing-library/react";
import Board from "./Board";

describe("Basic rendering of Board", () => {
  it("Renders the board in 9 squares", () => {
    const { getByTestId } = render(<Board />);
    const BoardElement = getByTestId("board");
    expect(BoardElement).toBeInTheDocument();
  });

  test("Have 9 squares in board", () => {
    const { getAllByTestId } = render(<Board />);
    const squareButtons = getAllByTestId("square");
    expect(squareButtons).toHaveLength(9);
  });
  test("Updates status on clicking square", () => {});
});

// describe("Basic functionality of Board", () => {});
