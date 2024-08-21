import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>Exempel #1</Route>
          <Route>Exempel #2</Route>
          <Route>Exempel #3</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
