import { ref } from 'joi';
import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render                   /***********************Important********* */
// target DOM nodes/elements


const UseRefBasics = () => {

  const refContainer=useRef(null);
  const divContainer=useRef(null);
  const handleSubmit=(e)=>{
    e.preventDefault()
      console.log(refContainer.current.value)             // It preserves the value
      console.log(divContainer.current.value)             // this will show undefined
      console.log(divContainer.current)
  }

  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus()
  })
  return <>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContainer}></input>
        <button type='submit'>Submit</button>
      </div>
    </form>
    <div ref= {divContainer}>Hello World</div>
  </>;
};

export default UseRefBasics;
