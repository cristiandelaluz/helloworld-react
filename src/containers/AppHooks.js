import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Cris', age: 23 },
      { name: 'Diana', age: 12 },
      { name: 'Ibiki', age: 23 }
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('Was clicked !');
    setPersonsState({ persons: [
      { name: 'Cristian', age: 23 },
      { name: 'Diana', age: 12 },
      { name: 'Ibiki', age: 28 }
    ] });
  }; 

  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <button onClick={ switchNameHandler }>Switch name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }></Person>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My Hobbies: Free fire</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }></Person>
    </div>
  );
}

export default app;
