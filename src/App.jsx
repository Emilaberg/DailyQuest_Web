import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          {/* <Route
            path="/games"
            element={<GamePage />}
          ></Route>
          <Route
            path="/admin"
            element={<AdminPage />}
          ></Route> */}

          {/* LÄNGST NER */}
          {/* <Route
            path="*"
            element={<ErrorPage />}
          ></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
