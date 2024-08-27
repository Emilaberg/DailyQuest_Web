import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          ></Route>
          <Route
            path="/games"
            element={<GamePage />}
          ></Route>
          <Route
            path="/admin"
            element={<AdminPage />}
          ></Route>

          {/* LÄNGST NER */}
          <Route
            path="*"
            element={<ErrorPage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
