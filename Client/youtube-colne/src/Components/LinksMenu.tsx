import Icons from "./Icons";

interface LinksMenuProps {
  eLement: React.ReactElement | string | any;
  Title: string | any;
  onClick?: () => void;
  Color?: string;
}

const LinksMenu = ({
  eLement,
  Title,
  onClick,
  Color = "black",
}: LinksMenuProps) => {
  const Lang = window.localStorage.getItem("Lang");
  const transitions = {
    flexBox: Lang === "English" ? "flex-row" : "flex-row-reverse",
  };
  return (
    <>
      <div
        className={`flex ${transitions.flexBox} items-center justify-start text-sm gap-4 cursor-pointer p-1 rounded-md hover:bg-[#ddd] transition-all duration-300`}
        onClick={onClick}
      >
        <Icons Element={eLement} Border={""} Hover={""} Color={Color} />
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default LinksMenu;
