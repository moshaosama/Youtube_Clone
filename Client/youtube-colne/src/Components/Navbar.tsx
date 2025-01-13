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
import {
  FaCloudUploadAlt,
  FaDatabase,
  FaGoogle,
  FaSignOutAlt,
  FaYoutube,
} from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect, useState } from "react";
import { SiYoutubestudio } from "react-icons/si";
import { RiCoinsFill, RiLiveFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GrHelp } from "react-icons/gr";
import LinksMenu from "./LinksMenu";

export interface DataProps {
  title: string;
  id: number;
}

const Navbar = () => {
  const [ActiveMenuPerson, setActiveMenuPerson] = useState<boolean>(false);
  const [ActiveCreate, setActiveCreate] = useState<boolean>(false);

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
      {/* Navbar */}
      <div
        className={`p-3 flex ${
          Language === "English" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center transition-all duration-300 sticky top-0 z-50 bg-white shadow-sm`}
      >
        <div
          className={`flex items-center gap-5 ${
            Language === "English" ? "flex-row-reverse" : "flex-row"
          } max-sm:hidden`}
        >
          <div
            className="border border-black hover:bg-blue-300 cursor-pointer flex items-center justify-center text-center rounded-full px-1 w-fit"
            onClick={() => setActiveMenuPerson(!ActiveMenuPerson)}
          >
            <p className="text-sm w-fit text-blue-500">
              {Language === "English" ? "Sign in" : "تسجيل الدخول"}
            </p>
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
          <div onClick={() => setActiveCreate(!ActiveCreate)}>
            <button className="bg-[#f1f1f1] hover:bg-[#cecece] transition-all duration-200 p-2 font-semibold text-sm rounded-xl text-center ">
              {Language === "English" ? "Create +" : "+ أنشاء"}
            </button>
          </div>
        </div>

        <div
          className={`flex ${
            Language == "English" ? "flex-row" : "flex-row-reverse"
          }  items-center gap-2 max-sm:hidden`}
        >
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
                className=" sm:hidden rounded-md mx-1 w-52 transition-all duration-200 border border-solid"
                placeholder="Serach"
              />
              <p className="sm:hidden">
                <Icons Element={<CiSearch />} Border={""} Hover={""} />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //////////// */}

      {/* DropDownCreate */}
      {ActiveCreate ? (
        <div className="mx-40 bg-white w-fit p-2 fixed top-14 rounded-xl z-50">
          {Language === "English" ? (
            <div>
              <h1> </h1>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div onClick={() => {}}>
                <LinksMenu
                  eLement={<FaCloudUploadAlt />}
                  Title="تحميل الفيديو"
                />
              </div>
              <div>
                <LinksMenu eLement={<RiLiveFill />} Title="بث محتوي مباشر" />
              </div>
            </div>
          )}
        </div>
      ) : null}
      {/* ///////////// */}

      {/* MenuProfile */}
      {ActiveMenuPerson ? (
        <div
          className={`flex flex-col justify-start bg-white  ${
            Language == "English" ? "ms-[89pc]" : "me-[89pc]"
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
                Title={"Language: " + Language}
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
      {/* ///////////////// */}
    </>
  );
};

export default Navbar;
