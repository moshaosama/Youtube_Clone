import { useState } from "react";

const MenuProfile = () => {
  const [Language, setLanguage] = useState(
    window.localStorage.getItem("Lang") || "English"
  );

  const handleClick = () => {
    setLanguage(Language == "Arabic" ? "English" : "Arabic");
    window.localStorage.setItem("Lang", Language);
  };

  return (
    <>
      <div className="flex justify-start bg-white ms-[95pc] rounded-l-xl py-20">
        <button className="bg-[#ddd] w-full p-2" onClick={() => handleClick()}>
          {Language == "Arabic" ? "English" : "Arabic"}
        </button>
      </div>
    </>
  );
};

export default MenuProfile;
