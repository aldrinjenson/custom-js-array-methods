import { fireEvent, render } from "@testing-library/react";
import Square from "./Squre";

describe("Square views", () => {
  it("Should render square", () => {
    const { getByText } = render(<Square onClick={() => {}} value={"X"} />);
    const squareValue = getByText("X");
    expect(squareValue).toBeInTheDocument();
  });

  it("Fires the click event when a square is clicked", () => {
    const onClickHandler = jest.fn();
    const { getByTestId } = render(
      <Square onSquareClick={onClickHandler} value='X' />
    );
    const squareElement = getByTestId("square");
    fireEvent.click(squareElement);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
