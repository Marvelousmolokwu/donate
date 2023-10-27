import { useState } from "react";

export const useModal = () => {
  const [modal, Setmodal] = useState<boolean>(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return {
    modal,
    Setmodal,
  };
};
