import { user } from "../../data/user";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Profile: React.FC = () => {
  return (
    <div className="flex mb-5 items-center ">
      <img
        src={user.profilePicture}
        className="h-20 rounded-full mr-2 hover:opacity-60 transition-opacity"
        alt="User profile"
      />
      <div className="hidden xl:flex flex-col mr-2">
        <p>{user.name}</p>
        <p>@{user.username}</p>
      </div>
    </div>
  );
};

export default Profile;
