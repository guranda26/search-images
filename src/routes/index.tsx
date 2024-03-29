import { RouteObject } from "react-router-dom";
import LayoutLink from "../layout/LayoutLinks";
import MainPage from "../pages/MainPage";
import HistoryPage from "../pages/HistoryPage";
import ErrorPage from "../pages/ErrorPage";

const routes: RouteObject[] = [
  {
    element: <LayoutLink />,
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <HistoryPage />,
        path: "/history",
      },
    ],
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default routes;
