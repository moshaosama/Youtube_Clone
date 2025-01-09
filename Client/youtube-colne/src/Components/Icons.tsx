interface IconProps {
  Element: React.ReactElement;
  Border: string;
  Hover: string;
  Color?: string;
  Size?: string;
  backGround?: string;
}

const Icons = ({
  Element,
  Border,
  Hover,
  Color = "black",
  Size = "xl",
  backGround,
}: IconProps) => {
  return (
    <>
      <div
        className={`${Border} border-solid border-black bg-[${backGround}] text-${Size} p-2 transition-all duration-300 text-${Color} rounded-full cursor-pointer hover:${Hover}`}
      >
        {Element}
      </div>
    </>
  );
};

export default Icons;
