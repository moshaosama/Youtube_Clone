import Icons from "./Icons";

interface LinksMenuProps {
  eLement: React.ReactElement;
  Title: string;
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
  return (
    <>
      <div
        className={`flex ${
          Lang === "English" ? "flex-row" : "flex-row-reverse"
        } items-center justify-start gap-4 cursor-pointer p-1 rounded-md hover:bg-[#ddd] transition-all duration-300`}
        onClick={onClick}
      >
        <Icons Element={eLement} Border={""} Hover={""} Color={Color} />
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default LinksMenu;
