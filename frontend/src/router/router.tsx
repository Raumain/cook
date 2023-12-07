
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Profile from "../Pages/Profile";
import Test from "../Pages/test";
import { Main } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      { path: "profile", element: <Profile /> },
      { path: "test", element: <Test /> },
      { path: "settings", element: <h1>Settings</h1> },
    ],
  },
]);

export default router;
