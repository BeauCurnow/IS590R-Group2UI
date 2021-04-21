import { render, fireEvent } from "@testing-library/react";
import Entries from "../pages/entries";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  //@ts-ignore
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/entries",
    state: {
      id: "9d58b471-4a72-4d04-808b-19e7df7f4d5f",
      name: "test",
      email: "test",
    },
  }),
}));

test("renders without any journal entry data", () => {
  const { getByText } = render(
    <Router>
      <Entries />
    </Router>
  );

  getByText("Your Entries");
  getByText("No entries yet :(");
  getByText("Add one now!");
});

test("renders with journal entry data", async () => {
  const { findByText } = render(
    <Router>
      <Entries />
    </Router>
  );

  await findByText("New Journal 1");
  await findByText("New Journal 2");
  await findByText("New Journal 3");
  await findByText("New Journal 4");
  await findByText("New Journal 5");
});

test("delete entry", async () => {
  const { findByTestId } = render(
    <Router>
      <Entries />
    </Router>
  );

  let closedTrash = await findByTestId("closedDeleteIcon1");
  fireEvent.mouseOver(closedTrash);
  let openTrash = await findByTestId("deleteIcon1");
  fireEvent.click(openTrash);
});
