import React, { Component } from 'react';
import clasees from './App.css';
/* import Radium, { StyleRoot } from 'radium'; */
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
/* import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; */

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] .constructor');
  }

  state = {
    persons: [
      { id: 'id1', name: 'Cris', age: 23 },
      { id: 'id2', name: 'Diana', age: 12 },
      { id: 'id3', name: 'Ibiki', age: 23 },
    ],
    otherValue: 'Some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] .getDerivedStateFromProps', props);
    return state;
  }

  /* componentWillMount() {
    // Not used
    console.log('[App.js] .componentWillMount');
  } */

  componentDidMount() {
    // Here we can do http request
    console.log('[App.js] .componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] .shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] .componentDidUpdate');
  }

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
    console.log('[App.js] .render');
    /* const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }; */

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={ this.state.persons }
        clicked={ this.deletePersonHandler }
        changed={ this.nameChangeHandler } ></Persons>;

      /* style.backgroundColor = 'red'; */
      /* style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }; */
    }

    return (
      <div className={ clasees.App }>
        <Cockpit
          title={ this.props.appTitle }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }></Cockpit>
        { persons }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi i\'m a React App'));
  }
}

export default App;
