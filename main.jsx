import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, _______ } from "react-router-dom";

import "./App.css";

import _____ from "./pages/Home";
import Articles from "./pages/Articles";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    _____: <App />,
    children: [
      {
        ______: "",
        element: <Home />,
      },
      {
        path: _______,
        element: <Articles />,
      },
    ],
  },
]);

const root = ________.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={_______} />
  </React.StrictMode>
);
