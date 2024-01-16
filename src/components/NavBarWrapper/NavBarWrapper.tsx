import { Outlet } from "react-router-dom";
import { NavigationBar } from "../NavigationBar/NavigationBar";

export const NavBarWrapper = () => {
  return (
    <div className="container">
      <NavigationBar />
      <Outlet />
    </div>
  );
};
