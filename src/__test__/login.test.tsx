import { getQueriesForElement } from "@testing-library/dom";
import ReactDom from "react-dom";
import Login from "../pages/login";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Login />, div);
});

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDom.render(<Login />, root);
  //correct title text
  expect(root.querySelector("h2")?.textContent).toBe("Please Login");

  //correct placeholder names on inputs
  const { getByText, getByPlaceholderText } = getQueriesForElement(root);
  getByPlaceholderText("Username")
  getByPlaceholderText("Password")

  //correct button text
  getByText("Login")
});
