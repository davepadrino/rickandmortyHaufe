import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

const MOCK = {
  paginationInfo: {
    page: 1,
    next: "http://pagination.com/?page=2",
    prev: null,
    pages: 5,
  },
  onClick: Function.prototype,
};

const renderComponent = ({
  paginationInfo = MOCK.paginationInfo,
  onClick = MOCK.onClick,
} = {}) =>
  render(<Pagination paginationInfo={paginationInfo} onClick={onClick} />);

describe("Pagination", () => {
  it("renders the pagination component with the provided info", () => {
    const { getByText } = renderComponent();

    expect(getByText("«Previous")).toBeInTheDocument();
    expect(getByText("Next»")).toBeInTheDocument();
    expect(
      getByText(
        `Page ${MOCK.paginationInfo.page} of ${MOCK.paginationInfo.pages}`
      )
    ).toBeInTheDocument();
  });

  describe("when the previous button is clicked", () => {
    it("calls the `onClick` callback to fetch the previous page", () => {
      const onClick = jest.fn();
      const { getByText } = renderComponent({
        onClick,
        paginationInfo: {
          ...MOCK.paginationInfo,
          page: 2,
          prev: "http://pagination.com/?page=1",
        },
      });

      fireEvent.click(getByText("«Previous"));

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("when the next button is clicked", () => {
    it("calls the `onClick` callback to fetch the next page", () => {
      const onClick = jest.fn();
      const { getByText } = renderComponent({
        onClick,
        paginationInfo: {
          ...MOCK.paginationInfo,
          page: 2,
          next: "http://pagination.com/?page=3",
        },
      });

      fireEvent.click(getByText("Next»"));

      expect(onClick).toHaveBeenCalled();
    });
  });
});
