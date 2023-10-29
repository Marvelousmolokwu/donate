import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import validator from "validator";
type Props = {
  name: string;
  id: string;
};
export const Visibilityinput = ({ name, id }: Props) => {
  const [visibility, setVisibilty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Not a Strong Password");
    }
  };

  return (
    <>
      <div
        className="flex items-center
   bg-backgroundcolor rounded-md pr-2  border border-overlay hover:border-2 hover:border-primary "
      >
        <input
          type={visibility ? "text" : "password"}
          name={name}
          className="p-2  w-full rounded-lg outline-none border-none bg-backgroundcolor "
          id={id}
          onChange={(e) => {
            if (id === "password") {
              validate(e.target.value);
            }
          }}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisibilty(!visibility);
          }}
        >
          {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </div>
      {errorMessage === "" ? null : (
        <span className="text-sm text-primary">{errorMessage}</span>
      )}
    </>
  );
};
