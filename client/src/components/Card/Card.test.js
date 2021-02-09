import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

const MOCK = {
  id: 1,
  name: "Firstname",
  status: "Alive",
  species: "Jedi",
  type: "Synth",
  gender: "Undefined",
  origin: "Naboo",
  location: "Naboo",
  image: "http://image.png",
  isFavorite: true,
  onClickFavorite: Function.prototype,
};

const renderComponent = ({
  id = MOCK.id,
  name = MOCK.name,
  status = MOCK.status,
  species = MOCK.species,
  type = MOCK.type,
  gender = MOCK.gender,
  origin = MOCK.origin,
  location = MOCK.location,
  image = MOCK.image,
  isFavorite = MOCK.isFavorite,
  onClickFavorite = MOCK.onClickFavorite,
} = {}) =>
  render(
    <MemoryRouter>
      <Card
        id={id}
        name={name}
        status={status}
        species={species}
        type={type}
        gender={gender}
        origin={origin}
        location={location}
        image={image}
        isFavorite={isFavorite}
        onClickFavorite={onClickFavorite}
      />
    </MemoryRouter>
  );

describe("Card", () => {
  it("renders the card with one character's info", () => {
    const { getByText, getByTestId } = renderComponent();

    expect(getByText(MOCK.name)).toBeInTheDocument();
    expect(getByText(MOCK.status)).toBeInTheDocument();
    expect(getByTestId("species")).toBeInTheDocument();
    expect(getByTestId("type")).toBeInTheDocument();
    expect(getByTestId("gender")).toBeInTheDocument();
    expect(getByTestId("origin")).toBeInTheDocument();
    expect(getByTestId("origin")).toBeInTheDocument();
    expect(getByTestId("location")).toBeInTheDocument();
  });

  describe("when the favorite star is clicked", () => {
    it("calls the `onClickFavorite` callback", () => {
      const onClickFavorite = jest.fn();
      const { getByTestId } = renderComponent({ onClickFavorite });

      fireEvent.click(getByTestId("favorite"));

      expect(onClickFavorite).toHaveBeenCalled();
    });
  });
});
