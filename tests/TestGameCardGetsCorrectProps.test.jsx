import { render, screen } from "@testing-library/react";
import React from "react";
import GameCard from "../src/components/GameCard";
import { MemoryRouter } from "react-router-dom";
// import { expect } from "vitest";
const imageUrl = "src/assets/images/cards/counterstrike.png";
const gameName = "Counter-Strike";
const quizId = 1;

test("display the correct image URL", () => {
  render(
    <MemoryRouter>
      <GameCard
        imageUrl={imageUrl}
        gameName={gameName}
        quizId={quizId}
      />
    </MemoryRouter>
  );

  const image = screen.getByTestId("imageUrl");
  expect(image).toHaveAttribute("src", imageUrl);

  // const gamename = screen.getByTestId("gameName").textContent;
  // expect(gamename).toContain(gameName);

  // const quizid = screen.getByTestId("quizId").textContent;
  // expect(quizid).toContain(quizId);
});

test("display the correct image URL", () => {
  render(
    <MemoryRouter>
      <GameCard
        imageUrl={imageUrl}
        gameName={gameName}
        quizId={quizId}
      />
    </MemoryRouter>
  );

  const gamename = screen.getByTestId("gameName").textContent;
  expect(gamename).toContain(gameName);
});

test("display the correct image URL", () => {
  render(
    <MemoryRouter>
      <GameCard
        imageUrl={imageUrl}
        gameName={gameName}
        quizId={quizId}
      />
    </MemoryRouter>
  );

  const quizid = screen.getByTestId("quizId");

  expect(quizid).toHaveAttribute("href", `/games/${quizId}`);
});
