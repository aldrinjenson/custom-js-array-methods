import { fireEvent, render } from "@testing-library/react";
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
  test("show status msg", () => {
    const { getByTestId } = render(<Board />);
    const statusElement = getByTestId("status");
    expect(statusElement).toHaveTextContent("Next player: X");
  });
  test("update status msg on click", () => {
    const { getByTestId, getAllByTestId } = render(<Board />);
    const squareElement = getAllByTestId("square")[0];
    const statusElement = getByTestId("status");
    fireEvent.click(squareElement);
    expect(statusElement).toHaveTextContent("Next player: O");
  });
});
