import React, { Component } from 'react'
import Mario from '../../Assets/Images/mario.png'
import Luigi from '../../Assets/Images/luigi.png'
import Peach from '../../Assets/Images/peach.png'
import Daisy from '../../Assets/Images/daisy.png'
import Toad from '../../Assets/Images/toad.png'
import Yoshi from '../../Assets/Images/yoshi.png'
import Rosalina from '../../Assets/Images/rosalina.png'
import Bowser from '../../Assets/Images/bowser.png'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nintendoCharacters: [
        {name: 'Mario', image: <img className={'characterImage'} src={Mario} alt='Mario' />, sounds: [], id: 1},
        {name: 'Luigi', image: <img className={'characterImage'} src={Luigi} alt='Luigi' />, sounds: [], id: 2},
        {name: 'Peach', image: <img className={'characterImage'} src={Peach} alt='Peach' />, sounds: [], id: 3},
        {name: 'Daisy', image: <img className={'characterImage'} src={Daisy} alt='Daisy' />, sounds: [], id: 4},
        {name: 'Toad', image: <img className={'characterImage'} src={Toad} alt='Toad' />, sounds: [], id: 5},
        {name: 'Yoshi', image: <img className={'characterImage'} src={Yoshi} alt='Yoshi' />, sounds: [], id: 6},
        {name: 'Rosalina', image: <img className={'characterImage'} src={Rosalina} alt='Rosalina' />, sounds: [], id: 7},
        {name: 'Bowser', image: <img className={'characterImage'} src={Bowser} alt='Bowser' />, sounds: [], id: 8}
      ]
    }
  }

  renderCharacters() {

  }

  render() {
    return (
      <div id='app'>
        <div id='subTitle'>Eva and Allie's</div>
        <div id='mainTitle'>
          <h1><span style={{letterSpacing: '0.3vh'}}><span style={{color: 'red'}}>N</span><span style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>T</span><span style={{color: 'white'}}>E</span><span style={{color: 'red'}}>N</span><span style={{color: 'yellow'}}>D</span><span style={{color: 'green'}}>O</span> <span style={{color: 'blue'}}>F</span><span style={{color: 'white'}}>R</span><span style={{color: 'red'}}>I</span><span style={{color: 'yellow'}}>E</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>D<span style={{color: 'white'}}>S</span></span></span></h1>
        </div>
        
        <div id='nintendoCharacters'>
          {this.state.nintendoCharacters[0].image}
          {this.state.nintendoCharacters[1].image}
          {this.state.nintendoCharacters[2].image}
          {this.state.nintendoCharacters[3].image}
          {this.state.nintendoCharacters[4].image}
          {this.state.nintendoCharacters[5].image}
          {this.state.nintendoCharacters[6].image}
          {this.state.nintendoCharacters[7].image}
        </div>
      </div>

    )
  }
}

export default App
