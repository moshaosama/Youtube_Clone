interface IconProps {
  Element: React.ReactElement;
  Border: string;
  Hover: string;
  Color?: string;
  Size?: string;
}

const Icons = ({
  Element,
  Border,
  Hover,
  Color = "black",
  Size = "xl",
}: IconProps) => {
  return (
    <>
      <div
        className={`${Border} border-solid border-black text-${Size} p-2 transition-all duration-300 text-${Color} rounded-full cursor-pointer hover:${Hover}`}
      >
        {Element}
      </div>
    </>
  );
};

export default Icons;
