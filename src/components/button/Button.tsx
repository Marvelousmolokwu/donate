import { ButtonProps } from "../../utilities/types";

export const Button = ({ content, btnClasses, handleClick }: ButtonProps) => {

  return (
    <button
      className={`btn rounded-md py-2 px-4 text-center text-sm font-semibold lg:text-lg ${btnClasses}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
