import FlareSharpIcon from "@mui/icons-material/FlareSharp";

type ContextBarProps = {
  text: string;
};

const ContextBar: React.FC<ContextBarProps> = ({ text }) => {
  return (
    <div className="flex justify-between items-center border-b-2 p-2 border-border-gray w-full sticky mb-4">
      <h2 className="text-lg sm:text-xl font-bold">{text}</h2>
      <div className="w-9 h-9 flex items-center justify-center xl:px-0 ml-auto cursor-pointer">
        <FlareSharpIcon className="hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center cursor-pointer" />
      </div>
    </div>
  );
};

export default ContextBar;
