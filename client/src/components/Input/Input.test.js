import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

const MOCK = {
  fieldName: "Field Name",
  type: "text",
  placeholder: "Field Name",
  value: "",
  onChange: Function.prototype,
};

const renderComponent = ({
  fieldName = MOCK.fieldName,
  type = MOCK.type,
  placeholder = MOCK.placeholder,
  value = MOCK.value,
  onChange = MOCK.onChange,
} = {}) =>
  render(
    <Input
      fieldName={fieldName}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

describe("Input", () => {
  it("renders the input field with the received data", () => {
    const { container } = renderComponent();

    expect(container.querySelector("label")).toHaveAttribute(
      "for",
      MOCK.fieldName
    );
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  describe("when the input is filled", () => {
    it("calls the `onChange` callback", () => {
      const onChange = jest.fn();
      const { container } = renderComponent({ onChange });

      fireEvent.change(container.querySelector("input"), {
        target: {
          value: "Hello world!",
        },
      });

      expect(onChange).toHaveBeenCalled();
    });
  });
});
