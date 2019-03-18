import React, { Component } from 'react';
import classes from './Person.css';
/* import Radium from 'radium'; */

class Person extends Component {
  /* const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  } */

  /* const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong !');
  } */
  render() {
    console.log('[Person.js] rendering ...');

    return (
      <div className={ classes.Person }>
        <h3 onClick={ this.props.click }>I'm a { this.props.name } ! and I am { this.props.age } years old</h3>
        <p>{ this.props.children }</p>
        <input type="text" onChange={ this.props.changed } value={ this.props.name } />
      </div>
    );
  }
}

export default Person;
