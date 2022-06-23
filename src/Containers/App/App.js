import React, { Component } from 'react'
import Mario from '../../Assets/Images/mario.png'
import MarioSound from '../../Assets/Sounds/Mario/Its_a_me_Mario.mp3'
import Luigi from '../../Assets/Images/luigi.png'
import LuigiSound from '../../Assets/Sounds/Luigi/luigi_mamma_mia.wav'
import Peach from '../../Assets/Images/peach.png'
import Daisy from '../../Assets/Images/daisy.png'
import Toad from '../../Assets/Images/toad.png'
import Yoshi from '../../Assets/Images/yoshi.png'
import Rosalina from '../../Assets/Images/rosalina.png'
import Bowser from '../../Assets/Images/bowser.png'
import Goomba from '../../Assets/Images/goomba.png'
import Boo from '../../Assets/Images/king-boo.png'
import DryBones from '../../Assets/Images/dry-bones.png'
import DryBonesSound from '../../Assets/Sounds/Dry-Bones/dry_bones_taunt.wav'
import './App.css'

const dryBonesAudio = new Audio(DryBonesSound)
const marioAudio = new Audio(MarioSound)
const luigiAudio = new Audio(LuigiSound)

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
        {name: 'Bowser', image: <img className={'characterImage'} src={Bowser} alt='Bowser' />, sounds: [], id: 8},
        {name: 'Goomba', image: <img className={'characterImage'} src={Goomba} alt='Goomba' />, sounds: [], id: 9},
        {name: 'Boo', image: <img className={'characterImage'} src={Boo} alt='Boo' />, sounds: [], id: 10},
        {name: 'Dry Bones', image: <img className={'characterImage'} src={DryBones} alt='Dry Bones' />, sounds: [], id: 11}
      ]
    }
  }

  playMarioSound() {
    marioAudio.play()
  }

  playLuigiSound() {
    luigiAudio.play()
  }

  playDryBonesSound() {
    dryBonesAudio.play()
  }



  render() {
    return (
      <div id='app'>
        <div id='subTitle'>Eva and Allie's</div>
        <div id='mainTitle'>
          <h1><span style={{letterSpacing: '0.3vh'}}><span style={{color: 'red'}}>N</span><span style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>T</span><span style={{color: 'white'}}>E</span><span style={{color: 'red'}}>N</span><span style={{color: 'yellow'}}>D</span><span style={{color: 'green'}}>O</span> <span style={{color: 'blue'}}>F</span><span style={{color: 'white'}}>R</span><span style={{color: 'red'}}>I</span><span style={{color: 'yellow'}}>E</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>D<span style={{color: 'white'}}>S</span></span></span></h1>
        </div>
        
        <div id='nintendoCharacters'>
          <img onClick={this.playMarioSound} className='characterImage' src={Mario} alt='Mario'></img>
          <img onClick={this.playLuigiSound} className='characterImage' src={Luigi} alt='Luigi'></img>
          {this.state.nintendoCharacters[2].image}
          {this.state.nintendoCharacters[3].image}
          {this.state.nintendoCharacters[4].image}
          {this.state.nintendoCharacters[5].image}
          {this.state.nintendoCharacters[6].image}
          {this.state.nintendoCharacters[7].image}
          {this.state.nintendoCharacters[8].image}
          {this.state.nintendoCharacters[9].image}
          <img onClick={this.playDryBonesSound} className='characterImage' src={DryBones} alt='Dry Bones'></img>
        </div>
      </div>
    )
  }
}

export default App
