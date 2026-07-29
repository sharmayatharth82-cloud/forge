import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import JsonFormatter from "../pages/JsonFormatter";
import JwtDecoder from "../pages/JwtDecoder";
import RegexTester from "../pages/RegexTester";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/json",
    element: <JsonFormatter />,
  },
  {
    path: "/jwt",
    element: <JwtDecoder />,
  },
  {
    path: "/regex",
    element: <RegexTester />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
