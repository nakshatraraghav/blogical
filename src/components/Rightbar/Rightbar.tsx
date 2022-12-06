import logo from "../../assets/blogical.png";
import Profile from "../Profile/Profile";
import RightBarMenu from "./RightBarMenu/RightBarMenu";

import { Link } from "react-router-dom";

const Rightbar = () => {
  return (
    <div className="h-screen fixed top-0 right-0 border-l-2 border-border-gray hidden sm:flex xl:w-1/4 flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="hidden xl:flex text-5xl from-jotai-green-light font-extrabold mt-6">
          blogical
        </h1>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Blogical Logo"
            className="mt-6 h-[32px] xl:hidden"
          />
        </Link>

        <RightBarMenu />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default Rightbar;
