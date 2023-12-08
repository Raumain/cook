import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import router from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Auth0Provider
      domain="dev-516jydxzdn3u28hn.us.auth0.com"
      clientId="fgm13F85GYKu3va5tybyDkAf5x7OcYpm"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </>
);
