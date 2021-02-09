import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const BUTTON_TEXT = "Button!";

const renderComponent = ({
  disabled = false,
  text = BUTTON_TEXT,
  onClick = Function.prototype,
} = {}) =>
  render(
    <Button disabled={disabled} onClick={onClick} text={text}>
      {text}
    </Button>
  );

describe("Button", () => {
  it("renders the button", () => {
    const { getByText } = renderComponent();

    expect(getByText(BUTTON_TEXT)).toBeInTheDocument();
  });

  describe("when the button is clicked", () => {
    it("calls the `onClick` callback", () => {
      const onClick = jest.fn();
      const { getByText } = renderComponent({ onClick });

      fireEvent.click(getByText(BUTTON_TEXT));

      expect(onClick).toHaveBeenCalled();
    });
  });
});
