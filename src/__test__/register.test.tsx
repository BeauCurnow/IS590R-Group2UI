import { getQueriesForElement } from "@testing-library/dom";
import ReactDom from "react-dom";
import Register from "../pages/register";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Register />, div);
});

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDom.render(<Register />, root);
  //correct title text
  expect(root.querySelector("h2")?.textContent).toBe("Please Sign Up Below");

  //correct placeholder names on inputs
  const { getByText, getByPlaceholderText } = getQueriesForElement(root);
  getByPlaceholderText("Username")
  getByPlaceholderText("Password")
  getByPlaceholderText("Confirm Password")
  getByPlaceholderText("Email")

  //correct button text
  getByText("Register")
});
