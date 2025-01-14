interface FormInputProps {
  Title: string;
  Type: string;
  Name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput = ({ Title, Type, Name, onChange }: FormInputProps) => {
  const Lang = window.localStorage.getItem("Lang");
  const transition = {
    Text: Lang == "English" ? "" : "text-end",
  };
  return (
    <>
      <p className="flex flex-col items-end gap-1 mx-10 my-2">
        <label htmlFor={Title} className={`text-[#b6b6b6] `}>
          {Title}
        </label>
        <input
          type={Type}
          id={Title}
          name={Name}
          className={`border-[3px] ${transition.Text} rounded-lg p-2 border-solid border-[#ddd] max-sm:w-60 focus-visible:border-blue-400 w-96`}
          onChange={onChange}
        />
      </p>
    </>
  );
};

export default FormInput;
