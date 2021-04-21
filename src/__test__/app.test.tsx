import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders", () => {
  const { getByText, getAllByText } = render(
    <Router>
      <App />
    </Router>
  );

  getByText("Home");
  getAllByText("Login");
  getByText("Register");

  getByText("Welcome!");
  getByText("Login to create a journal");
});