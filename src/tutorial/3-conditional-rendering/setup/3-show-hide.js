import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  //the line number 11 denotes when the show is true then only show the Item component
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}         
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
