import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalId = document.getElementById('modal');

const Modal = ({ children }) => {
  const ref = useRef(null);
  if (!ref.current) {
    ref.current = document.createElement('div');
  }

  useEffect(() => {
    modalId.appendChild(ref.current);
    return () => modalId.removeChild(ref.current);
  }, []);

  return createPortal(<div>{children}</div>, ref.current); //render to korlam na dom e ??
};

export default Modal;
