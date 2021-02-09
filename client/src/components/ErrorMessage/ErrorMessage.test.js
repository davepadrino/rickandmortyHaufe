import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

const ERROR_MESSAGE = "This is an error";

const renderComponent = ({ error = ERROR_MESSAGE } = {}) =>
  render(<ErrorMessage error={error} />);

describe("ErrorMessage", () => {
  it("renders the error component with the received error text", () => {
    const { getByText } = renderComponent();

    expect(getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
