import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { MdSettingsVoice } from "react-icons/md";
import Icons from "./Icons";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";

import MenuPerson from "./MenuPerson";

import { Link } from "react-router";
import DropDownCreate from "./DropDownCreate";

export interface DataProps {
  title: string;
  id: number;
}

const Navbar = () => {
  const [ActiveMenuPerson, setActiveMenuPerson] = useState<boolean>(false);
  const [ActiveCreate, setActiveCreate] = useState<boolean>(false);
  const Token = window.localStorage.getItem("Token");
  const Language = window.localStorage.getItem("Lang");

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
          <div className="border border-black hover:bg-blue-300 cursor-pointer flex items-center justify-center text-center rounded-full px-1 w-fit">
            {Token ? (
              <div
                className="w-10 h-10 rounded-full"
                onClick={() => setActiveMenuPerson(!ActiveMenuPerson)}
              ></div>
            ) : (
              <Link to={"/Login"}>
                <p className="text-sm w-fit text-blue-500">
                  {Language === "English" ? "Sign in" : "تسجيل الدخول"}
                </p>
              </Link>
            )}
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
      {ActiveCreate ? <DropDownCreate /> : null}
      {/* ///////////// */}

      {/* MenuProfile */}
      {ActiveMenuPerson ? (
        <MenuPerson activeMenuPerson={ActiveMenuPerson} />
      ) : null}
      {/* ///////////////// */}
    </>
  );
};

export default Navbar;
