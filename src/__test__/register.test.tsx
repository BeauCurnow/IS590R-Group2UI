import { render, fireEvent } from "@testing-library/react";
import Register from "../pages/register";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  //@ts-ignore
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
test("renders without crashing", () => {
  render(<Register />);
});

test("renders the correct content", () => {
  //correct placeholder names on inputs
  const { getByText, getByPlaceholderText } = render(<Register />)
  getByText("Please Sign Up Below")
  getByPlaceholderText("Username")
  getByPlaceholderText("Password")
  getByPlaceholderText("Confirm Password")
  getByPlaceholderText("Email")

  //correct button text
  getByText("Register")
});

// fireEvent
test("try to register without inputing username, password, or email", () => {
  const { getByText, getByPlaceholderText } = render(<Register />);

  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const confirmPasswordInput = getByPlaceholderText("Confirm Password");
  const emailInput = getByPlaceholderText("Email");
  const submitButton = getByText("Register");

  // Simulate user events
  fireEvent.change(usernameInput, { target: { value: "" } });
  fireEvent.change(passwordInput, { target: { value: "" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "" } });
  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.click(submitButton);

  // Make assertion
  getByText("Username required");
  getByText("Password required");
  getByText("Email required");
});

test("try to register when password and confirm password don't match", () => {
  const { getByText, getByPlaceholderText } = render(<Register />);

  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const confirmPasswordInput = getByPlaceholderText("Confirm Password");
  const emailInput = getByPlaceholderText("Email");
  const submitButton = getByText("Register");

  // Simulate user events
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "password1" } });
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.click(submitButton);

  // Make assertion
  getByText("Passwords must match");
});

test("register a new user", () => {
  const { getByText, getByPlaceholderText } = render(<Register />);

  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const confirmPasswordInput = getByPlaceholderText("Confirm Password");
  const emailInput = getByPlaceholderText("Email");
  const submitButton = getByText("Register");

  // Simulate user events
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.click(submitButton);

  // Make assertion
  getByText("Registering...")
});
