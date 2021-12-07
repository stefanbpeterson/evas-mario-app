import React, { Component } from 'react'

export class CharacterCard extends Component {
    constructor(props) {
        super(props)
    }

    renderCards() {
        for (let ninChar of this.props.nintendoCharacters) {
            console.log(ninChar)
        }
    }

    render() {
        return (
            <div>
                {this.renderCards}
            </div>
        )
    }
}

export default CharacterCard
