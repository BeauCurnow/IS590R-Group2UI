import { render, fireEvent } from "@testing-library/react";
import Journal from "../pages/journal";
import { useState } from "react";

test("renders new journal", () => {
  const { getByText } = render(
    <Journal
      location={{
        state: {
          journal: "",
          title: "New Journal",
          user: {
            id: "e9065b24-8b01-4d0c-81e3-fb794a83e952",
            name: "Logan",
            email: "test@test.com",
          },
        },
      }}
    />
  );
  getByText("Saved");
  getByText("New Journal");
});

test("renders existing journal", async () => {
  const {
    getByText,
    getByDisplayValue,
    getByTestId,
    findByDisplayValue,
  } = render(
    <Journal
      location={{
        state: {
          id: "d1ba0263-f0e6-471b-90d2-a6bd20026d71",
          journal: "This is fake markup",
          title: "New Journal",
          user: {
            id: "e9065b24-8b01-4d0c-81e3-fb794a83e952",
            name: "Logan",
            email: "test@test.com",
          },
        },
      }}
    />
  );

  setTimeout(() => getByText("Saved"), 1000);
  setTimeout(() => getByText("This is fake markup"), 1000);
});

// fireEvent
test("save journal", async () => {
  const { getByText, findByText, getByTestId } = render(
    <Journal
      location={{
        state: {
          id: "d1ba0263-f0e6-471b-90d2-a6bd20026d71",
          journal: "This is fake markup",
          title: "New Journal",
          user: {
            id: "e9065b24-8b01-4d0c-81e3-fb794a83e952",
            name: "Logan",
            email: "test@test.com",
          },
        },
      }}
    />
  );

    const title = getByTestId("titleInput");

    //edit journal
    fireEvent.change(title, { target: { value: "Changed title" } });
    const saveButton = getByText("Save Journal");

    //save journal
    setTimeout(() => fireEvent.click(saveButton), 100)
    setTimeout(() => getByText("Saved"), 100)
});
