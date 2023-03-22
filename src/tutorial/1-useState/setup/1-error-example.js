import React from 'react';

const ErrorExample = () => {

  let title="random title"

  const handle=()=>{
    title="Hello People"
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>;
      <button type='button'  onClick={handle}>Change Title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
