import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login Page", () => {
  test("renders login form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Check heading
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  test("shows error when fields are empty", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.getByText("Email and password are required")
    ).toBeInTheDocument();
  });
});
