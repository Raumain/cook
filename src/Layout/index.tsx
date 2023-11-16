import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen" data-theme="night">
      <Header />
      <div className="py-24 px-10">
        <Outlet />
      </div>
    </div>
  );
}
