import { FaCloudUploadAlt } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import LinksMenu from "./LinksMenu";

const DropDownCreate = () => {
  const Language = window.localStorage.getItem("Lang");
  return (
    <>
      <div className="mx-40 bg-white w-fit p-2 fixed top-14 rounded-xl z-50">
        {Language === "English" ? (
          <div>
            <h1> </h1>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div onClick={() => {}}>
              <LinksMenu eLement={<FaCloudUploadAlt />} Title="تحميل الفيديو" />
            </div>
            <div>
              <LinksMenu eLement={<RiLiveFill />} Title="بث محتوي مباشر" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownCreate;
