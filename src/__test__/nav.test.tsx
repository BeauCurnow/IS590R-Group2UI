import { render } from "@testing-library/react";
import Nav from "../components/nav";
import { BrowserRouter as Router } from "react-router-dom";

test("renders without user data", () => {
  const { getByText } = render(
    <Router>
      <Nav />
    </Router>
  );

  getByText("Home");
  getByText("Login");
  getByText("Register");
});
