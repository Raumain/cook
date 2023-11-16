import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen" data-theme="night">
      <Header />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}
