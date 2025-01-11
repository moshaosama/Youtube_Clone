import { RiShapeLine } from "react-icons/ri";
import Icons from "../Components/Icons";
import MenuProfile from "../Components/MenuHome";
import Video from "../Components/Video";
import CreateVideo from "../Components/createVideo";
import { useState } from "react";

const Home = () => {
  const lang = window.localStorage.getItem("Lang");
  const [ActiveCreateVideo, setActiveCreateVideo] = useState<boolean>(true);

  const handleClickActive = () => {
    setActiveCreateVideo(!ActiveCreateVideo);
  };

  return (
    <>
      {ActiveCreateVideo ? (
        <CreateVideo
          ActiveCreateVideo={ActiveCreateVideo}
          setActiveCreateVideo={handleClickActive}
        />
      ) : null}
      <div
        className={`flex ${
          lang === "English" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <MenuProfile />
        </div>
        <div className="w-full flex flex-col max-sm:items-center max-sm:justify-center">
          <div className="flex items-center justify-end">
            <div className="p-3 max-sm:p-0  items-center max-sm:w-80 w-full overflow-x-scroll flex gap-3 my-2 flex-row-reverse ">
              <div>
                <Icons
                  Element={<RiShapeLine />}
                  Border={""}
                  Hover={""}
                  backGround="#ddd"
                />
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm">
                <h1 className="w-20 text-center">كل المحتوي</h1>
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm h-fit">
                <h1>تشكيلات</h1>
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm h-fit">
                <h1>مباشر</h1>
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm h-fit">
                <h1 className="w-44 text-center">
                  القنوات التي تم تحميلها مؤخرا
                </h1>
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm h-fit">
                <h1 className="w-24 text-center">تمت مشاهدتها</h1>
              </div>
              <div className="bg-[#ddd] p-2 rounded-lg text-sm h-fit">
                <h1 className="w-24 text-center">محتوي جديد لك</h1>
              </div>
            </div>
          </div>
          <div className="mx-10">
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
