import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          ></Route>
          <Route
            path="/games/:game"
            element={<GamePage />}
          ></Route>
          <Route
            path="/admin"
            element={
              <AdminPage
                isAdmin={isAdminPage}
                setIsAdmin={setIsAdminPage}
              />
            }
          ></Route>

          {/* LÄNGST NER */}
          <Route
            path="*"
            element={<ErrorPage />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
