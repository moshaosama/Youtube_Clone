import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { MdSettingsVoice } from "react-icons/md";
import Icons from "./Icons";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect, useState } from "react";
import MenuProfile from "./menuProfile";

export interface DataProps {
  title: string;
  id: number;
}

const Navbar = () => {
  const [Active, setActive] = useState<boolean>(false);
  const Lang = JSON.stringify(window.localStorage.getItem("Lang"));


  return (
    <>
      <div
        className={`p-2 flex ${
          Lang === '"English"' ? "flex-row-reverse" : "flex-row"
        } justify-between items-center sticky top-0 z-50 bg-[#f1f1f1]`}
      >
        <div className="flex items-center gap-5 flex-row-reverse">
          <div className="border border-black hover:bg-blue-300 cursor-pointer flex items-center justify-center text-center rounded-full px-1 w-fit">
            <p
              className="text-sm w-fit text-blue-500"
              onClick={() => setActive(!Active)}
            >
              Sign in
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
          <div>
            <button className="bg-[#ddd] hover:bg-[#adadad] transition-all duration-200 p-2 font-semibold text-sm rounded-xl text-center ">
              Create +
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
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

        <div className="flex items-center gap-1">
          <div>
            <Icons Element={<CgDetailsMore />} Border="" Hover="bg-[#adadad]" />
          </div>
          <div className="flex items-center">
            <p>
              <FaYoutube className="text-red-500 text-3xl transition-all duration-300  rounded-full cursor-pointer" />
            </p>
            <p className="font-bold text-xl -mx-0">YouTube</p>
          </div>
        </div>
      </div>
      {Active ? <MenuProfile /> : null}
    </>
  );
};

export default Navbar;
