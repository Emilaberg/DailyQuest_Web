import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieConsent from "../src/components/CookieConsent";

test("sets cookie to declined when decline button is clicked", () => {
  render(<CookieConsent />);

  const declineButton = screen.getByText(/decline/i);

  fireEvent.click(declineButton);

  expect(localStorage.getItem("cookieConsent")).toBe("declined");
});
