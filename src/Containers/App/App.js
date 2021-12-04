import React, { Component } from 'react'
import Mario from '../../Assets/Images/mario.png'
import Luigi from '../../Assets/Images/luigi.png'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nintendoCharacters: [
        {name: 'Mario', image: <img className={'characterImage'} src={Mario} alt='Mario' />, sounds: [], id: 1},
        {name: 'Luigi', image: <img className={'characterImage'} src={Luigi} alt='Luigi' />, sounds: [], id: 2}
      ]
    }
  }
  render() {
    return (
      <div>
        {this.state.nintendoCharacters[0].image}
        {this.state.nintendoCharacters[1].image}
      </div>

    )
  }
}

export default App
