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
  /////////^^^^^^////////DENNA MÅSTE VARA ABSOLUT I TOP!!!!//////////////////////////////////////////////

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

// Try one!

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import GamePage from "./pages/GamePage";
// import AdminPage from "./pages/AdminPage";
// import ErrorPage from "./pages/ErrorPage";
// import Footer from "./components/Footer";
// import { useEffect, useState } from "react";

// function ScrollToTop() {
//   useEffect(() => {
//     window, scrollTo(0, 0);
//   }, []);
//   return null;
// }

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<HomePage />}>
// //       <Route path="/games/:game" element={<GamePage />} />
// //       <Route
// //         path="/admin"
// //         element={
// //           <AdminPage isAdmin={isAdminPage} setIsAdmin={setIsAdminPage} />
// //         }
// //       />
// //     </Route>
// //   )
// // );

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <RouterProvider router={router} />
// //   </React.StrictMode>
// // );

// function App() {
//   const [isAdminPage, setIsAdminPage] = useState(false);

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//         {/* Scroll Restoration Logic */}
//         <ScrollToTop />
//         <Route path="/" element={<HomePage />} />
//         <Route path="/games/:game" element={<GamePage />} />
//         <Route
//           path="/admin"
//           element={
//             <AdminPage isAdmin={isAdminPage} setIsAdmin={setIsAdminPage} />
//           }
//         />
//         <Route path="*" element={<ErrorPage />} />
//         <Footer />
//       </>
//     )
//   );

//   return <RouterProvider router={router} />;
// }

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// export default App;

// TRY 2

// import React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import GamePage from "./pages/GamePage";
// import AdminPage from "./pages/AdminPage";
// import ErrorPage from "./pages/ErrorPage";
// import Footer from "./components/Footer";
// import { useEffect, useState } from "react";
// import "./App.css";
// import { ScrollRestoration } from "react-router-dom";

// function App() {
//   const [isAdminPage, setIsAdminPage] = useState(false);

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/games/:game" element={<GamePage />} />
//         <Route
//           path="/admin"
//           element={
//             <AdminPage isAdmin={isAdminPage} setIsAdmin={setIsAdminPage} />
//           }
//         />
//         <Route path="/ErrorPage" element={<ErrorPage />} />
//       </>
//     )
//   );

//   return (
//     <>
//       <RouterProvider router={router}>
//         <Navbar/>
//       </RouterProvider>
//     </>
//   );
// }

// export default App;
