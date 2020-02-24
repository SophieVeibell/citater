import React, { Component } from 'react';
import Citater from './Citater';
import AddCitat from './AddCitat';
import './App.scss'



class App extends Component {
  state = {
    citater : [
      { overskrift: 'Quote about life one', citat: 'Keep your face always toward the sunshine—and shadows will fall behind you', forfatter: 'white girl', id: 1 },
      { overskrift: 'Quote about life two', citat: 'It is always the simple that produces the marvelous.', forfatter: 'Amelia Barr', id: 2 },
      { overskrift: 'Quote about life three', citat: 'The power of imagination makes us infinite', forfatter: 'John Muirl', id: 3 }
    ]
    }
    addCitat = (citat) => {
      citat.id = Math.random();
      let citater = [...this.state.citater, citat]
      this.setState({
        citater: citater
      })
    }
    deleteCitat = (id) => {
      let citater = this.state.citater.filter(citat => {
        return citat.id !== id
      });
      this.setState({
        citater: citater
      })
    }
    render() {
    return (
      <div className="App">
      <div className="overskrift">
        <h1>Good design is as little design as possible.</h1>
        </div>
        <p>Guldkorn down below</p>
        <Citater deleteCitat={this.deleteCitat} citater={this.state.citater}/>
        <p>Tilføj selv et citat her:</p>
        <AddCitat addCitat={this.addCitat} />

      </div>
    );
  }
}

export default App;
