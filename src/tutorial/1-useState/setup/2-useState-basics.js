import React, { useState } from 'react';
//useState - function

// GENEARAL RULES OF HOOKS
  //1- Component must be uppercase
  //2-must be in a function/component body
  //3-cannot call conditionally 
  
const UseStateBasics = () => {

  console.log(useState)   // useState is a  function............
  // console.log(useState('hello world'));
  // const value=useState(1)[0];
  // const handler=useState(1)[1];

  // console.log("value "+value)
  // console.log("handler "+handler)

  //when we invoke a useState function we get a array with two values 
  // one is the text and other is the setText function which controlls tghe first value 
  const [text,setText]=useState('random title');          // useState maintains a value of the variable even in the render bwt two screen....
  console.log(setText);

  const handle=()=>{
    if(text=='random title')
      setText('Hello World')
    else
      setText('random title')
  }
  return (<React.Fragment>
    <h2>{text}</h2>
    <button className='="btn' onClick={handle}>Change title</button>
  </React.Fragment>);
};

export default UseStateBasics;
