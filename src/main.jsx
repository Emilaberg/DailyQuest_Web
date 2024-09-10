import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./routes/root.jsx";
import RootAdmin from "./routes/rootAdmin.jsx";

import HomePage from "./pages/HomePage.jsx";
import GamePage from "./pages/GamePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLoginOverlay from "./components/AdminLoginOverlay.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ReportForm from "./routes/ReportForm.jsx";
import Faqs from "./routes/faqs.jsx";

//actions
import { action as reportAction } from "./routes/ReportForm.jsx";
//loaders
import { loader as adminLoader } from "./routes/rootAdmin.jsx";
import { loader as homePageLoader } from "./pages/HomePage.jsx";
import { loader as gamePageLoader } from "./pages/GamePage.jsx";

import TrackedEmails from "./components/TrackedEmails.jsx";
import AvailableQuizzes from "./components/AvailableQuizzes.jsx";
import AddQuiz from "./components/AddQuiz.jsx";
import AdminStatistics from "./components/AdminStatistics.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ReportForm from "./routes/ReportForm.jsx";



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
            loader: gamePageLoader,
          },
          {
            path: "frequently-asked-questions",
            element: <FaqPage />,
            children: [
              {
                index: true,
                element: <Faqs />,
              },
              {
                path: "Report-issue",
                element: <ReportForm />,
                action: reportAction,
              },
            ],
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
        index: true,
        element: <Navigate to="dashboard/admin-statistics" replace />,
      },
      {
        path: "dashboard",
        element: <AdminPage />,
        children: [
          {
            index: true,
            element: <div className="text-white">Nothing yet</div>,
          },
          {
            path: "admin-statistics",
            element: <AdminStatistics />,
          },
          {
            path: "tracked-emails",
            element: <TrackedEmails />,
          },
          {
            path: "available-quizzes",
            element: <AvailableQuizzes />,
          },
          {
            path: "add-quiz",
            element: <AddQuiz />,
          },
        ],
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
