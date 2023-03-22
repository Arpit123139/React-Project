import React, { useState, useEffect } from 'react';
// by default runs after every re-render runs everytime when the component is render 
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value,setValue]=useState(0);
  // if(value>=1)
  // {
  //     useEffect(()=>{                                      // this syntazx is not right because we cannot use hooks inside conditional
  //     // every time render occur this is called 
  //     console.log('Call UseEffect')
  //     document.title=`New Message {${value}}`
  //   })
  // }

  useEffect(()=>{                                      
        // every time render occur this is called 
        console.log('Call UseEffect')
        if(value>=1)
          document.title=`New Message {${value}}`
      },[value])         //the second parameter is a dependency array if it is [] empty then it runs on initial render for this case it comes into play whenever the value changes


  console.log('render component')
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>setValue(value+1)}>Click Me</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
