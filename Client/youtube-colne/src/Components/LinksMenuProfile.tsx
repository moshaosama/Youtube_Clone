import Icons from "./Icons";

interface LinksMenuProps {
  eLement: React.ReactElement;
  Title: string;
}

const LinksMenuProfile = ({ eLement, Title }: LinksMenuProps) => {
  return (
    <>
      <div className="flex items-center gap-10 cursor-pointer p-1 hover:bg-[#ddd] transition-all duration-300">
        <Icons Element={eLement} Border={""} Hover={""} />
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default LinksMenuProfile;
