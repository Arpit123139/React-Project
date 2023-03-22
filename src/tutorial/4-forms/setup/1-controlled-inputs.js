import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);            //array of objects

  const handleSubmit = (e) => {
    e.preventDefault();         // this is done to prevent the current behaviour so as soon as we submit the form the page does not get refresh... and whatevere is there in the consolle remain there

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };     //new way to get random id...
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });

      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
          {
            people.map((person)=>{
              const {id,firstName,email}=person
              return (
                <div className='item' key={id}>
                  <h4>{firstName}</h4>
                  <p>{email}</p>
                </div>
              );
            })
          }
          
        
      </article>
    </>
  );
};

export default ControlledInputs;
