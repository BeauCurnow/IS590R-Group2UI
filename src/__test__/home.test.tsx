import { render } from "@testing-library/react";
import Home from "../pages/home";
import { BrowserRouter as Router } from "react-router-dom";

test("renders without user data", () => {
  const { getByText } = render(
    <Router>
      <Home
        location={{
          state: undefined,
        }}
      />
    </Router>
  );

  getByText("Welcome!");
  getByText("Login to create a journal");
});

test("renders with user data", () => {
    const { getByText } = render(
    <Router>
      <Home
        location={{
          state: {
            email: "test@test.com",
            id: "e9065b24-8b01-4d0c-81e3-fb794a83e952",
            name: "Logan",
          },
        }}
      />
    </Router>
  );
  getByText("View Your Journal Entries");
  getByText("Create a New Journal");
});
