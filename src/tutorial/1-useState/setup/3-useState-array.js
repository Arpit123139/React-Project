import React from 'react';
import { data } from '../../../data';       // importing data from data.js

const UseStateArray = () => {

  const [people,setPeople]=React.useState(data)

  const removeItem=(id)=>{
    let newPeople=people.filter((person)=>person.id !==id)
    setPeople(newPeople)
  }
  return (
    <React.Fragment>
      {people.map((person)=>{
        const {id,name}=person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={()=>removeItem(id)}>Clear Item</button>
          </div>
        )
      })}

      <button className='btn' onClick={()=>setPeople([])}>Clear Item</button>
    </React.Fragment>
  );
};

export default UseStateArray;
