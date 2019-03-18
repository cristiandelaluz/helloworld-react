import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      console.log('--- HTTP emulated request')
    }, 1000);
  }, [props.persons]);
  // Second param is for determine wich properties we want to change
  // Pass [] for run only one time at begining
  // We can use many times useEffect()

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={ classes.Cockpit }>
      <h1>{ props.title }</h1>
      <p className={ assignedClasses.join(' ') }>React rocks !</p>
      <button
        /* style={ style } */
        className={ btnClass }
        onClick={ props.clicked }>
        Toogle Persons
      </button>
    </div>
  );
}

export default cockpit;
