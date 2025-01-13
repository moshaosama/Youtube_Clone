import { useEffect, useState } from "react";
import { FaGoogle, FaSignOutAlt, FaDatabase } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrHelp } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineSwitchAccount, MdLight, MdFeedback } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { SiYoutubestudio } from "react-icons/si";
import LinksMenu from "./LinksMenu";

interface MenuPerson {
  activeMenuPerson: boolean;
  setActiveMenu?: () => void;
}

const MenuPerson = ({ activeMenuPerson }: MenuPerson) => {
  const language = window.localStorage.getItem("Lang");
  const [Language, setLanguage] = useState(
    window.localStorage.getItem("Lang") || "English"
  );
  const handleClick = async () => {
    const newLanguage = Language === "Arabic" ? "English" : "Arabic";
    setLanguage(newLanguage);
    window.localStorage.setItem("Lang", newLanguage);
    window.location.reload();
  };
  useEffect(() => {}, [Language]);
  return (
    <>
      {activeMenuPerson ? (
        <div
          className={`flex flex-col justify-start bg-white  ${
            language == "English" ? "ms-[89pc]" : "me-[89pc]"
          } rounded-l-xl rounded-xl shadow-lg w-fit fixed top-14 right-0`}
        >
          <div className="p-4 flex justify-between items-center gap-4">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#ddd]"></div>
            </div>
            <div>
              <h1 className="font-semibold">Mohamed Osama</h1>
              <p>mohamedOSFekry@gmail.com</p>
              <a
                href="#"
                className="text-blue-600 hover:underline transition-all duration-200"
              >
                Create a Channel
              </a>
            </div>
          </div>
          <hr className=" bg-[#ddd]" />
          <div>
            <LinksMenu eLement={<FaGoogle />} Title="Google Account" />
            <LinksMenu
              eLement={<MdOutlineSwitchAccount />}
              Title="Switch Account"
            />
            <LinksMenu eLement={<FaSignOutAlt />} Title="Sign Out" />
          </div>
          <hr className=" bg-[#ddd]" />
          <div>
            <LinksMenu eLement={<SiYoutubestudio />} Title="YouTube Studio" />
            <LinksMenu
              eLement={<RiCoinsFill />}
              Title="Purchases and memberships"
            />
          </div>
          <hr className=" bg-[#ddd]" />
          <div>
            <LinksMenu eLement={<FaDatabase />} Title="You Data in Youtube" />
            <LinksMenu eLement={<MdLight />} Title=" Apperances: dark" />
            <div>
              <LinksMenu
                eLement={<IoLanguage />}
                Title={`Language: ${
                  Language === "English" ? "Arabic" : "English"
                }`}
                onClick={() => handleClick()}
              />
            </div>
            <hr className=" bg-[#ddd]" />
            <div>
              <LinksMenu eLement={<FiSettings />} Title="Settings" />
            </div>
            <hr className=" bg-[#ddd]" />
            <div>
              <LinksMenu eLement={<GrHelp />} Title="Help" />
              <LinksMenu eLement={<MdFeedback />} Title="Send Feedback" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MenuPerson;
