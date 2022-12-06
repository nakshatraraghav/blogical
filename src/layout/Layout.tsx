import LeftBar from "../components/LeftBar/LeftBar";
import Home from "../pages/Home/Home";
import Rightbar from "../components/Rightbar/Rightbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen w-screen flex">
      <LeftBar />
      <Outlet />
      <Rightbar />
    </div>
  );
};

export default Layout;
