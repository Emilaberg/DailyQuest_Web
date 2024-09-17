import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../src/components/Welcome.jsx";

test("renders Welcome component with correct text", () => {
  render(<Welcome />);
  expect(screen.getByText("Welcome to DailyQuest")).toBeInTheDocument();
});
