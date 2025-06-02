import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "../src/components/Welcome.jsx";
// import { expect } from "vitest";

test("renders Welcome component with correct text", () => {
  render(<Welcome />);
  expect(screen.getByText("Welcome to DailyQuest")).toBeInTheDocument();
});
