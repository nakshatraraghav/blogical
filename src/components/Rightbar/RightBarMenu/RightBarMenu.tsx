import { filledIcons, outlinedIcons } from "../../../assets/Icons/Icons";
import WebStoriesIcon from "@mui/icons-material/WebStories";

const RightBarMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center xl:items-start xl:w-[300px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="menu-item-div mt-5 ">
          <filledIcons.Home sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Home</h4>
        </div>
        <div className="menu-item-div">
          <filledIcons.Notifications sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Notifications</h4>
        </div>
        <div className="menu-item-div">
          <filledIcons.Bookmarks sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Bookmarks</h4>
        </div>
        <div className="menu-item-div">
          <filledIcons.Lists sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Lists</h4>
        </div>
        <div className="menu-item-div">
          <filledIcons.Message sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Messages</h4>
        </div>
        <div className="menu-item-div">
          <WebStoriesIcon sx={{ fontSize: "28px" }} />
          <h4 className="ml-4 menu-item-txt">Stories</h4>
        </div>
      </div>
    </div>
  );
};

export default RightBarMenu;
