import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

/*
We had to make it so the ref could never potentially be null by instantiating it inside the ref.
Yes, this will create a new DOM node every time you render, and no that's probably not a big deal. We already know that React.Modal doesn't re-render very often.
You can do it like we had been doing by using the type HTMLDivElement | null but then you have to null check anywhere you use elRef.current which is burdensome.
*/
const Modal: FunctionComponent = ({ children }) => {
  const refEl = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return;
    modalRoot.appendChild(refEl.current);

    return () => {
      modalRoot.removeChild(refEl.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, refEl.current);
};

export default Modal;
