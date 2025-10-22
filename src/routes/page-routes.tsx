import {
  createBrowserRouter as browserRouter,
  type RouteObject,
} from "react-router-dom";
import ComponentsOverview from "@/pages/components-overview";
import Home from "@/pages/home/home";

export type RoutePath = "" | "/" | "*" | "overview";
export type RouteParams = {};

type BrowserRouterProps = Omit<RouteObject, "path" | "children"> & {
  path?: RoutePath;
  children?: BrowserRouterProps[];
};

const createBrowserRouter = (props: BrowserRouterProps[]) =>
  browserRouter(props as RouteObject[]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "overview",
    element: <ComponentsOverview />,
  },
  {
    path: "*",
    element: <>Not Found</>,
  },
]);

export default router;
