import React, { useState } from 'react';
import {data} from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

//Prop drilling is a situation in whixh we pass the function as a (removeItem) as a Prop even though is is not neede din the middle we have to go to Top o Bottom
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
