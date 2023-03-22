import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  console.log('useEffect')

  const [width,setWidth]=useState(window.innerWidth);

  const checkSize=()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    console.log('useEffect');
    // Now as it does not have a cleanup function so every time the event occur the setWidth is called and re-render occur every time so useEffect is called at every re-render 

    window.addEventListener('resize',checkSize);

    //cleanup function is performmed at the time of exiting from useEffect()

    return ()=>{
      window.removeEventListener('resize',checkSize)
      }
  })

  return <>
  <h1>Window </h1>
  <h3>{width}</h3>
  </>;
};

export default UseEffectCleanup;
