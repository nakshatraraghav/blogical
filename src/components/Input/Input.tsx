import { useState } from "react";
import { user } from "../../data/user";

const Input = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex space-x-2 mx-2">
      <img
        src={user.profilePicture}
        className="h-14 rounded-full mr-2 hover:opacity-60 transition-opacity"
        alt="User's Profile Picture"
      />
      <textarea
        className="w-full bg-transparent outline-none overflow-y-scroll px-2 text-lg resize-none"
        placeholder="what's on your mind?"
        onChange={(evt) => {
          setText(evt.target.value);
        }}
        rows={2}
      />
    </div>
  );
};

export default Input;
