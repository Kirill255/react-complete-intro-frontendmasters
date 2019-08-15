import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const refEl = useRef<HTMLDivElement | null>(null);

  if (!refEl.current) {
    const div = document.createElement("div");
    refEl.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !refEl.current) return;
    modalRoot.appendChild(refEl.current);

    return () => {
      if (!refEl.current) return;
      modalRoot.removeChild(refEl.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, refEl.current);
};

export default Modal;
