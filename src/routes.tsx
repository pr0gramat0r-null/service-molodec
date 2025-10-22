import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const basename = (window as any)._APP_BASENAME_ || "/";
export const router = createBrowserRouter(routes, { basename });
