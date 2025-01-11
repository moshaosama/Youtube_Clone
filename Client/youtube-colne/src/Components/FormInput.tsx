interface FormInputProps {
  Title: string;
  Type: string;
}
const FormInput = ({ Title, Type }: FormInputProps) => {
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
          className={`border-[3px] ${transition.Text} rounded-lg p-2 border-solid border-[#ddd] focus-visible:border-blue-400 w-96`}
        />
      </p>
    </>
  );
};

export default FormInput;
