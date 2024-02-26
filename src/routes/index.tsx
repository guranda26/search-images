import { RouteObject } from "react-router-dom";
import LayoutLink from "../layout/LayoutLinks";
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";
import AlbumPage from "../pages/AlbumPage";

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
        element: <UserPage />,
        path: "/user",
      },
      {
        element: <AlbumPage />,
        path: "/album",
      },
    ],
  },
];

export default routes;
