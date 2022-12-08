import { useState, useRef } from "react";
import { user } from "../../data/user";

import { inputIcons } from "../../assets/Icons/Icons";
import CloseIcon from "@mui/icons-material/Close";

const Input = () => {
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<any>();
  const imageIconRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex space-x-2 px-2 justify-between border-b-2 pb-6 border-border-gray ">
      <img
        src={user.profilePicture}
        className="h-14 w-16 rounded-full mr-2 hover:opacity-60 transition-opacity"
        alt="User's Profile Picture"
      />
      <div className="w-full flex flex-col">
        <textarea
          className="w-full h-12 xl:h-20 bg-transparent outline-none overflow-y-scroll mb-2 px-2 text-lg resize-none"
          placeholder="what's on your mind?"
          onChange={(evt) => {
            setText(evt.target.value);
          }}
        />
        {file ? (
          <div className="relative">
            <div
              onClick={() => {
                setFile(null);
              }}
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
            >
              <CloseIcon sx={{ fontSize: "28px" }} />
            </div>
            <img
              src={file}
              className="rounded-2xl max-h-80 w-full object-contain"
              alt="Image not found"
            />
          </div>
        ) : null}
        <div className="pl-1 flex w-full items-center justify-between">
          <div className="space-x-4 flex">
            <div
              className="ml-2"
              onClick={() => {
                imageIconRef.current?.click();
              }}
            >
              <inputIcons.photo className="input-icons" />
              <input
                type="file"
                ref={imageIconRef}
                onChange={(evt) => {
                  const fileReader = new FileReader();
                  if (evt.target.files) {
                    fileReader.readAsDataURL(evt.target.files[0]);
                  }
                  fileReader.onload = (readerEvt) => {
                    setFile(readerEvt.target?.result);
                  };
                }}
                hidden
              />
            </div>
            <div>
              <inputIcons.gif className="input-icons" />
            </div>
            <div>
              <inputIcons.emoji className="input-icons" />
            </div>
            <div>
              <inputIcons.poll className="input-icons" />
            </div>
          </div>
          <button
            disabled={!text}
            className="button py-1 rounded-full w-[100px] mr-3 disabled:opacity-40"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
function MutableRefObject<T>() {
  throw new Error("Function not implemented.");
}
