import Icons from "./Icons";

interface LinksMenuProps {
  eLement: React.ReactElement;
  Title: string;
  onClick?: () => void;
}

const LinksMenuProfile = ({ eLement, Title, onClick }: LinksMenuProps) => {
  return (
    <>
      <div
        className="flex items-center gap-10 cursor-pointer p-1 hover:bg-[#ddd] transition-all duration-300"
        onClick={onClick}
      >
        <Icons Element={eLement} Border={""} Hover={""} />
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default LinksMenuProfile;
