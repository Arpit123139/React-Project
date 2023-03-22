import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value,setValue]=useState(0)

  const complexIncrease = () => {
    let count=0;
    setTimeout(() => {
      // setValue(value + 1);             // jo value set hai screen pe wohi lega agar current value 0 hai aur hmm kitni baar bhi click kare woh ek se hi increment hogi
      // console.log(value)
      setValue((prevState) => {
        console.log(prevState,count++);
        return prevState + 1;
      });
   }, 2000);
  };

  const Decrease=()=>{
    setValue(value-1);
  //  console.log(value);
  }
  return (
  
    <React.Fragment>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={Decrease}>Decrease</button>
      <button className='btn' onClick={()=>setValue(0)}>Reset</button>
      <button className='btn' onClick={()=>setValue(value+1)}>Increase</button>
      <p></p>
      <h2>more complex counter</h2>
        <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>

    </React.Fragment>
  );
};

export default UseStateCounter;
