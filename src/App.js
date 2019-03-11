import React, { Component } from 'react';
import './App.css';
/* import Radium, { StyleRoot } from 'radium'; */
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Cris', age: 23 },
      { id: 'id2', name: 'Diana', age: 12 },
      { id: 'id3', name: 'Ibiki', age: 23 },
    ],
    otherValue: 'Some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /* ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } */
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
                      name={ person.name } 
                      age={ person.age } 
                      click={ () => this.deletePersonHandler(index) } 
                      key={ person.id } 
                      changed={ event => this.nameChangeHandler(event, person.id) } />
          }) }
        </div>
      );

      style.backgroundColor = 'red';
      /* style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }; */
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <p className={ classes.join(' ') }>React rocks !</p>
        <button
          style={ style }
          onClick={ this.togglePersonsHandler }>
          Toogle Persons
        </button>
        { persons }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi i\'m a React App'));
  }
}

export default App;
