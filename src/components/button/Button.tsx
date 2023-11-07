import { Props } from "../../utilities/types";

export const Button = ({ content, btnClasses, handleClick }: Props) => {

  return (
    <button
      className={`btn rounded-md py-2 px-4 text-center font-semibold lg:text-lg ${btnClasses}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
