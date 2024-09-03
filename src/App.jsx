// Original

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Layout from "./pages/Layout";
import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

function App() {
  //////////////////////DENNA MÅSTE VARA ABSOLUT I TOP!!!!//////////////////////////////////////////////
  useScrollToTop();
  /////////^^^^^^////////DENNA MÅSTE VARA ABSOLUT I TOP!!!!/////////////////////////////////////////////

  const [isAdminPage, setIsAdminPage] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/games/:game" element={<GamePage />} />
          <Route
            path="/admin"
            element={
              <AdminPage isAdmin={isAdminPage} setIsAdmin={setIsAdminPage} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
