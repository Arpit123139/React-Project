import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('')          
   const firstValue = text || 'hello world';           // if text is false then it will return the 'hello world'
   const secondValue = text && 'hello world';          //if text is false then it will return ''==text

  return <>
  <h1>{text || 'helloword'}</h1>
  </>
};

export default ShortCircuit;
