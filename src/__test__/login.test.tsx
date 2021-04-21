import Login from "../pages/login";
import { render, fireEvent } from "@testing-library/react";

test("renders without crashing", () => {
  render(<Login />)
});

test("renders the correct content", () => {
  //correct placeholder names on inputs
  const { getByText, getByPlaceholderText } = render(<Login />)
  getByText("Please Login")
  getByPlaceholderText("Username")
  getByPlaceholderText("Password")

  //correct button text
  getByText("Login")
});

// fireEvent
test("try to login without inputing username or password", () => {
  const { getByText, getByPlaceholderText } = render(<Login />);

  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const submitButton = getByText("Login");

  // Simulate user events
  fireEvent.change(usernameInput, { target: { value: "" } });
  fireEvent.change(passwordInput, { target: { value: "" } });
  fireEvent.click(submitButton);

  // Make assertion
  getByText("Username required");
  getByText("Password required");
});
