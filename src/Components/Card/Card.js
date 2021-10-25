import React, { Component } from 'react'
import './characters'
import { characters } from './characters'

export class Card extends Component {
    render() {
        return (
            <div>
                <img alt={characters[0].name} src={require(`${characters[5].image}`).default} />
                {console.log(characters[0].sounds[0])}
            </div>
        )
    }
}

export default Card
