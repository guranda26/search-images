import { RouteObject } from "react-router-dom";
import LayoutLink from "../layout/LayoutLinks";
import MainPage from "../pages/MainPage";
import HistoryPage from "../pages/HistoryPage";

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
        path: "/user",
      },
    ],
  },
];

export default routes;
