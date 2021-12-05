import React, { Component } from 'react'
import Mario from '../../Assets/Images/mario.png'
import Luigi from '../../Assets/Images/luigi.png'
import Peach from '../../Assets/Images/peach.png'
import Daisy from '../../Assets/Images/daisy.png'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nintendoCharacters: [
        {name: 'Mario', image: <img className={'characterImage'} src={Mario} alt='Mario' />, sounds: [], id: 1},
        {name: 'Luigi', image: <img className={'characterImage'} src={Luigi} alt='Luigi' />, sounds: [], id: 2},
        {name: 'Peach', image: <img className={'characterImage'} src={Peach} alt='Peach' />, sounds: [], id: 3},
        {name: 'Daisy', image: <img className={'characterImage'} src={Daisy} alt='Daisy' />, sounds: [], id: 4}
      ]
    }
  }
  render() {
    return (
      <div id='app'>
        <div id='mainTitle'>
          <h1>Eva and Allie's <br /> <span style={{letterSpacing: '0.3vh', marginTop: '10vh'}}>NINTENDO FRIENDS</span></h1>
        </div>
        <div id='nintendoCharacters'>
          {this.state.nintendoCharacters[0].image}
          {this.state.nintendoCharacters[1].image}
          {this.state.nintendoCharacters[2].image}
          {this.state.nintendoCharacters[3].image}
        </div>
      </div>

    )
  }
}

export default App
