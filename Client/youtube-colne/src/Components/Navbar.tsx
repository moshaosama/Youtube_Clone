import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoLanguage, IoPersonSharp } from "react-icons/io5";
import {
  MdFeedback,
  MdLight,
  MdOutlineSwitchAccount,
  MdSettingsVoice,
} from "react-icons/md";
import Icons from "./Icons";
import { CiSearch } from "react-icons/ci";
import { FaDatabase, FaGoogle, FaSignOutAlt, FaYoutube } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect, useState } from "react";
import LinksMenuProfile from "./LinksMenuProfile";
import { SiYoutubestudio } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GrHelp } from "react-icons/gr";

export interface DataProps {
  title: string;
  id: number;
}

const Navbar = () => {
  const [Active, setActive] = useState<boolean>(false);
  const [Language, setLanguage] = useState(
    window.localStorage.getItem("Lang") || "English"
  );

  const handleClick = async () => {
    const newLanguage = Language === "Arabic" ? "English" : "Arabic";
    setLanguage(newLanguage);
    window.localStorage.setItem("Lang", newLanguage);
  };
  useEffect(() => {
    console.log("Mosha");
  }, [Language]);

  console.log(Language);

  return (
    <>
      {/* Navbar */}
      <div
        className={`p-3 flex ${
          Language === "English" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center transition-all duration-300 sticky top-0 z-50 bg-white`}
      >
        <div
          className={`flex items-center gap-5 ${
            Language === "English" ? "flex-row-reverse" : "flex-row"
          } max-sm:hidden`}
        >
          <div
            className="border border-black hover:bg-blue-300 cursor-pointer flex items-center justify-center text-center rounded-full px-1 w-fit"
            onClick={() => setActive(!Active)}
          >
            <p className="text-sm w-fit text-blue-500">Sign in</p>
            <Icons
              Element={<IoPersonSharp />}
              Border=""
              Hover=""
              Size="sm"
              Color="blue-500"
            />
          </div>
          <div>
            <Icons
              Element={<HiOutlineBellAlert />}
              Border=""
              Hover="bg-[#adadad]"
            />
          </div>
          <div>
            <button className="bg-[#ddd] hover:bg-[#adadad] transition-all duration-200 p-2 font-semibold text-sm rounded-xl text-center ">
              {Language === "English" ? "Create +" : "+ أنشاء"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 max-sm:hidden">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-solid border-[#858585] py-1 px-2 rounded-l-2xl focus-visible:border-blue-900 w-96"
            />
            <button className="bg-[#ddd] w-12 flex justify-center rounded-r-2xl">
              <Icons Element={<CiSearch />} Border={""} Hover={""} />
            </button>
          </div>
          <div>
            <Icons
              Element={<MdSettingsVoice />}
              Border=""
              Hover="bg-[#adadad]"
            />
          </div>
        </div>

        <div
          className={`flex ${
            Language === "English" ? "flex-row" : "flex-row-reverse"
          } items-center gap-1`}
        >
          <div className="max-sm:hidden">
            <Icons Element={<CgDetailsMore />} Border="" Hover="bg-[#adadad]" />
          </div>
          <div className="flex items-center">
            <p>
              <FaYoutube className="text-red-500 text-3xl transition-all duration-300  rounded-full cursor-pointer" />
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-xl -mx-0">YouTube</p>
              <input
                type="text"
                className="sm-hidden w-3 focus-visible:w-52 transition-all duration-200 border border-solid"
                placeholder="Serach"
              />
              <Icons Element={<CiSearch />} Border={""} Hover={""} />
            </div>
          </div>
        </div>
      </div>
      {/* //////////// */}

      {/* MenuProfile */}
      {Active ? (
        <div
          className={`flex flex-col justify-start bg-white  ${
            Language == "English" ? "ms-[89pc]" : "me-[95pc]"
          } rounded-l-xl rounded-xl shadow-lg w-fit`}
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
            <LinksMenuProfile eLement={<FaGoogle />} Title="Google Account" />
            <LinksMenuProfile
              eLement={<MdOutlineSwitchAccount />}
              Title="Switch Account"
            />
            <LinksMenuProfile eLement={<FaSignOutAlt />} Title="Sign Out" />
          </div>
          <hr className=" bg-[#ddd]" />
          <div>
            <LinksMenuProfile
              eLement={<SiYoutubestudio />}
              Title="YouTube Studio"
            />
            <LinksMenuProfile
              eLement={<RiCoinsFill />}
              Title="Purchases and memberships"
            />
          </div>
          <hr className=" bg-[#ddd]" />
          <div>
            <LinksMenuProfile
              eLement={<FaDatabase />}
              Title="You Data in Youtube"
            />
            <LinksMenuProfile eLement={<MdLight />} Title=" Apperances: dark" />
            <div>
              <LinksMenuProfile
                eLement={<IoLanguage />}
                Title={"Language: " + Language}
                onClick={() => handleClick()}
              />
            </div>
            <hr className=" bg-[#ddd]" />
            <div>
              <LinksMenuProfile eLement={<FiSettings />} Title="Settings" />
            </div>
            <hr className=" bg-[#ddd]" />
            <div>
              <LinksMenuProfile eLement={<GrHelp />} Title="Help" />
              <LinksMenuProfile
                eLement={<MdFeedback />}
                Title="Send Feedback"
              />
            </div>
          </div>
        </div>
      ) : null}
      {/* ///////////////// */}
    </>
  );
};

export default Navbar;
