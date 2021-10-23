import React, { Component } from 'react'
import './characters'
import { characters } from './characters'

export class Card extends Component {
    render() {
        return (
            <div>
                <img alt={characters[2].name} src={require(`${characters[2].image}`).default} />
            </div>
        )
    }
}

export default Card
