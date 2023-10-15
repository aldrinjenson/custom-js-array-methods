import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic rendering of Counter", () => {
  it("Should render Counter value", () => {
    render(<Counter />);
    const textValue = screen.getByText(/0/i);
    expect(textValue).toBeInTheDocument();
  });

  it("Shoud equal 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("counterVal")).toHaveTextContent(0);
  });

  it("Should be able to increment", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("inc-button")).not.toHaveAttribute("disabled");
  });

  it("Should be able to decrement", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("dec-button")).not.toHaveAttribute("disabled");
  });
});

describe("Basic functionality of Counter", () => {
  it("increments the counter when increment button is pressed", () => {
    const { getByTestId } = render(<Counter />);
    const upButton = getByTestId("inc-button");
    const counterVal = getByTestId("counterVal");
    fireEvent.click(upButton);
    expect(counterVal).toHaveTextContent("1");
  });
});
