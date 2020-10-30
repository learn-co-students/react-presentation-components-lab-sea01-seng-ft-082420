import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        let toggleMood = ''
        if (this.state.mood === 'happy') {
            toggleMood = 'sad'
        } else {
            toggleMood = 'happy'
        }

        this.setState({
            mood: toggleMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}