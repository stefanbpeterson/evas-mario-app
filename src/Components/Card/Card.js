import React, { Component } from 'react'
import './characters'
import { characters } from './characters'

export class Card extends Component {
    render() {
        return (
            <div>
                <img alt={characters[0].name} src={characters[0].image} />
            </div>
        )
    }
}

export default Card
