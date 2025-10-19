import { RouterProvider } from "react-router-dom";
import router from "./page-routes";

const RootRoutes = () => {
  return <RouterProvider router={router} />;
};

export default RootRoutes;
