import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import AdminNavbar from "./components/adminNavbar";
function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);
  return (
    <>
      <Router>
        {isAdminPage ? <AdminNavbar /> : <Navbar />}

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
