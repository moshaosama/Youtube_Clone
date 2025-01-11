interface BtnProps {
  Title: string;
  Color: string;
}

const Button = ({ Title, Color }: BtnProps) => {
  return (
    <>
      <button className={`text-${Color} font-bold text.md`}>{Title}</button>
    </>
  );
};

export default Button;
