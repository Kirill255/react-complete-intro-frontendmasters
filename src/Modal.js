import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const refEl = useRef(null);

  if (!refEl.current) {
    const div = document.createElement("div");
    refEl.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(refEl.current);

    return () => modalRoot.removeChild(refEl.current);
  }, []);

  return createPortal(<div>{children}</div>, refEl.current);
};

export default Modal;
