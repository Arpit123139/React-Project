import React, { useState } from 'react';

const UseStateObject = () => {

  const [person,setPerson]=useState({
    name:'arpit',
    age:22,
    message:'random-message'
  })

  const handler=()=>{
    const x={
      name:'Srijan',
      age:23,
      message:'dksmdk'
    }
    console.log(x)
    // setPerson({...person,message:'Hello I am There'})
    //setPerson({...people,x})        // this will not update the value
    setPerson({...person,name:'Srijan',age:23,message:'dksmdk'})
  }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={handler}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateObject;
