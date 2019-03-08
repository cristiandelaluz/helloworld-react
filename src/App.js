import React, { Component } from 'react';
import './App.css';
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

  nameChangeHandler = (event) => {
    this.setState({ persons: [
      { name: 'Cris', age: 23 },
      { name: event.target.value , age: 12 },
      { name: 'Ibiki', age: 28 }
    ] });
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person name={ person.name } age={ person.age } click={ () => this.deletePersonHandler(index) } key={ person.id } />
          }) }
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
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
