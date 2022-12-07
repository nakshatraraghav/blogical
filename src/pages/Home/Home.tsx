import Input from "../../components/Input/Input";

import FlareSharpIcon from "@mui/icons-material/FlareSharp";

const Home = () => {
  return (
    <div className="text-txt-white w-10/12 xl:w-1/2">
      <div className="flex justify-between items-center border-b-2 p-2 border-border-gray w-full sticky mb-4">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="w-9 h-9 flex items-center justify-center xl:px-0 ml-auto cursor-pointer">
          <FlareSharpIcon />
        </div>
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Home;
