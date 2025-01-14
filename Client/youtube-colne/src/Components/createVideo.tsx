import Button from "./Button";
import FormInput from "./FormInput";

const CreateVideo = () => {
  const lang = window.localStorage.getItem("Lang");

  const translations = {
    heading: lang === "English" ? "How you'll appear" : "مظهر قناتك",
    selectPicture: lang === "English" ? "Select picture" : "اختيار صورة",
    Titles: [
      {
        name: lang === "English" ? "Name" : "الاسم",
      },
      {
        name: lang === "English" ? "Handle" : "الاسم المعرف",
      },
    ],
    Btns: [
      { Title: lang === "English" ? "Cancel" : "الغاء", Color: "" },
      {
        Title: lang === "English" ? "Create Channel" : "انشاء قناه",
        Color: "blue-500",
      },
    ],
    terms: `By clicking Create Channel you agree to YouTube's Terms of Service.
    Changes made to your name and profile picture are visible only on YouTube and not other Google services. Learn more`,
    alignment: lang === "English" ? "left-3" : "right-3",
    textDirection: lang === "English" ? "" : "text-end",
  };

  return (
    <div className="bg-[rgba(0,0,0,0.3)] flex justify-center items-center absolute top-0 z-50 w-full h-full">
      <div className="bg-white p-10  rounded-xl relative shadow-xl ">
        <div
          className={`absolute top-3 flex justify-between w-full  ${translations.alignment}`}
        >
          <div className="text-xl bg-[#ddd] flex justify-center mx-8 p-2 rounded-full w-10 cursor-pointer">
            X
          </div>

          <h1
            className={`text-black text-2xl font-bold ${translations.textDirection}`}
          >
            {translations.heading}
          </h1>
        </div>
        <div className="my-7 flex flex-col items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#ddd]"></div>
          <div className="my-3">
            <h1 className="text-blue-400 cursor-pointer hover:underline font-bold">
              {translations.selectPicture}
            </h1>
          </div>
        </div>
        <form action="" className="flex flex-col items-center justify-center">
          {translations.Titles.map((el) => {
            return (
              <>
                <FormInput Title={el.name} Type="text" Name={""} />
              </>
            );
          })}
        </form>
        <p className="w-96 mx-10 text-[8px] my-4">{translations.terms}</p>
        <div className="flex gap-6 absolute bottom-2">
          {translations.Btns.map((el) => (
            <Button Title={el.Title} Color={el.Color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;
