import { IoHome } from "react-icons/io5";
import LinksMenu from "./LinksMenu";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import "../App.css";
import {
  MdLiveTv,
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaFire, FaHistory } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";

const MenuHome = () => {
  const Lang = window.localStorage.getItem("Lang");
  return (
    <>
      <div className="bg-white p-3 w-64 overflow-y-scroll h-[48pc] max-sm:hidden">
        <LinksMenu
          eLement={<IoHome />}
          Title={Lang === "English" ? "Home" : "الصفحه الرئيسيه"}
        />
        <LinksMenu
          eLement={<SiYoutubeshorts />}
          Title={Lang === "English" ? "Shorts" : "Shorts"}
        />
        <LinksMenu
          eLement={<MdSubscriptions />}
          Title={Lang === "English" ? "Subscriptions" : "ألاشتراكات"}
        />
        <hr className=" bg-[#ddd]" />
        <div
          className={`flex ${
            Lang == "English" ? "flex-row" : "flex-row-reverse"
          } gap-2 items-center p-3 cursor-pointer transition-all duration-200 rounded-md hover:bg-[#ddd]`}
        >
          <h1>{Lang === "English" ? "you" : "انت"}</h1>

          {Lang === "English" ? <BsArrowRight /> : <BsArrowLeft />}
        </div>
        <LinksMenu
          eLement={<FaHistory />}
          Title={Lang === "English" ? "History" : "السجل"}
        />
        <LinksMenu
          eLement={<MdOutlinePlaylistPlay />}
          Title={Lang === "English" ? "PlayLists" : "قوائم التشغيل"}
        />
        <LinksMenu
          eLement={<MdOutlineWatchLater />}
          Title={Lang === "English" ? "Whatch Later" : "المشاهده لاحقا"}
        />
        <LinksMenu
          eLement={<AiFillLike />}
          Title={Lang === "English" ? "Likes Video" : "الفيديوهات التي اعجبتني"}
        />
        <hr className=" bg-[#ddd]" />
        <div
          className={`m-3 flex flex-col ${
            Lang === "English" ? "items-start" : " items-end"
          } gap-3`}
        >
          <h1 className="font-bold">
            {Lang === "English" ? "Subscriptions" : "ألاشتراكات"}
          </h1>
          <p>{Lang == "English" ? "No Subscriptions" : "لا اشتراكات"}</p>
        </div>
        <hr className=" bg-[#ddd]" />
        <LinksMenu
          eLement={<FaFire />}
          Title={Lang === "English" ? "Trending" : "المحتوي الرائج"}
        />
        <LinksMenu
          eLement={<CiMusicNote1 />}
          Title={Lang === "English" ? "Music" : "موسيقي"}
        />
        <LinksMenu
          eLement={<MdLiveTv />}
          Title={Lang === "English" ? "Live" : "بث مباشر"}
        />
        <LinksMenu
          eLement={<SiYoutubegaming />}
          Title={Lang === "English" ? "Gaming" : "العاب الفيديو"}
        />
        <LinksMenu
          eLement={<TfiCup />}
          Title={Lang === "English" ? "Sports" : "رياضه"}
        />
        <hr className=" bg-[#ddd]" />
        <LinksMenu
          eLement={<FaFire />}
          Title={Lang === "English" ? "Trending" : "الاعدادات"}
        />
        <LinksMenu
          eLement={<CiMusicNote1 />}
          Title={Lang === "English" ? "Music" : "سجل الابلاغ عن المحتوي"}
        />
        <LinksMenu
          eLement={<MdLiveTv />}
          Title={Lang === "English" ? "Live" : "مساعده"}
        />
        <LinksMenu
          eLement={<SiYoutubegaming />}
          Title={Lang === "English" ? "Gaming" : "ارسال ملاحظات"}
        />
      </div>
    </>
  );
};

export default MenuHome;
