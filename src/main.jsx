import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./routes/root.jsx";
import RootAdmin from "./routes/rootAdmin.jsx";

import HomePage from "./pages/HomePage.jsx";
import GamePage from "./pages/GamePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLoginOverlay from "./components/AdminLoginOverlay.jsx";

//actions

//loaders
import { loader as adminLoader } from "./routes/rootAdmin.jsx";
import { loader as homePageLoader } from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  //routes för gamepage
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homePageLoader,
          },
          {
            path: "games/:game",
            element: <GamePage />,
          },
        ],
      },
    ],
  },
  //routes för admin
  {
    path: "/admin",
    element: <RootAdmin />,
    errorElement: <ErrorPage />,
    loader: adminLoader,
    children: [
      {
        path: "dashboard",
        element: <AdminPage />,
      },
      {
        path: "login",
        element: <AdminLoginOverlay />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
