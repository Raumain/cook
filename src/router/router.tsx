import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      { path: "profile", element: <h1>Profile</h1> },
      { path: "settings", element: <h1>Settings</h1> },
    ],
  },
]);

export default router;
