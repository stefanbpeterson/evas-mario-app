import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nintendoCharacters: [
        {name: 'Mario', image: '', sounds: [], id: 1}, 
        {name: 'Luigi', image: '',sounds: [], id: 2}
      ]
    }
  }
  render() {
    return (
      <h1>This is a test.</h1>
    )
  }
}

export default App
