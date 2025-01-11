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
  const transition = {
    TitlesOne: [
      {
        Element: <IoHome />,
        Title: Lang === "English" ? "Home" : "الصفحه الرئيسيه",
      },
      {
        Element: <SiYoutubeshorts />,
        Title: Lang === "English" ? "Shorts" : "Shorts",
      },
      {
        Element: <MdSubscriptions />,
        Title: Lang === "English" ? "Subscriptions" : "ألاشتراكات",
      },
    ],
    TitlesTwo: [
      {
        ELement: <FaHistory />,
        Title: Lang === "English" ? "History" : "السجل",
      },
      {
        ELement: <MdOutlinePlaylistPlay />,
        Title: Lang === "English" ? "PlayLists" : "قوائم التشغيل",
      },
      {
        ELement: <MdOutlineWatchLater />,
        Title: Lang === "English" ? "Whatch Later" : "المشاهده لاحقا",
      },
      {
        ELement: <AiFillLike />,
        Title: Lang === "English" ? "Likes Video" : "الفيديوهات التي اعجبتني",
      },
    ],
    Arrow: Lang === "English" ? <BsArrowRight /> : <BsArrowLeft />,
    YouText: Lang === "English" ? "you" : "انت",
    FlexBox: Lang == "English" ? "flex-row" : "flex-row-reverse",
  };
  return (
    <>
      <div className="bg-white p-3 w-60 overflow-y-scroll h-[92.4vh] max-sm:hidden">
        {transition.TitlesOne.map((el) => (
          <LinksMenu eLement={el.Element} Title={el.Title} />
        ))}
        <hr className=" bg-[#ddd]" />
        <div
          className={`flex ${transition.FlexBox} gap-2 items-center p-3 cursor-pointer transition-all duration-200 rounded-md hover:bg-[#ddd]`}
        >
          <h1>{transition.YouText}</h1>

          {transition.Arrow}
        </div>
        {transition.TitlesTwo.map((el) => (
          <LinksMenu eLement={el.ELement} Title={el.Title} />
        ))}
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
