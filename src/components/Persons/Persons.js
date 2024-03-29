import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  /* static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] .getDerivedStateFromProps');
    return state;
  } */

  // REMOVED
  /* componentWillReceiveProps(props) {
    console.log('[Persons.hs] componentWillReceiveProps', props);
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] .shouldComponentUpdate');
    // Here we can prevent the component update
    // return booleean for say to react if update or not
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] .getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  // REMOVED
  /* componentWillUpdate() {
    console.log('[Persons.js] .componentWillUpdate');
  } */

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] .componentDidUpdate');
    console.log('Snapshot', snapshot);
  }

  render() {
    console.log('[Persons.js] rendering ...');
    return this.props.persons.map((person, index) => {
      return  <Person 
                name={ person.name } 
                age={ person.age }
                key={ person.id }
                click={ () => this.props.clicked(index) }
                changed={ event => this.props.changed(event, person.id) } />
    });
  }
};

export default Persons;
