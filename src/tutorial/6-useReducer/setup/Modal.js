import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("re-render")
      closeModal();
    }, 1000);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};


export default Modal;
