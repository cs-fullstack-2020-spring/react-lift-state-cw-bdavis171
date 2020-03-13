import React, { Component } from 'react';
import Player from './Player';
import './style.css'

class Ex1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPlayer: 0
        }
    }
    componentDidMount() {
        //sanity
        console.log('Ex1 mounted');
    }
    //create a function to display who pressed the button last
    updateLastPressed = (player) => {
        this.setState(
            {
                lastPlayer: player
            }
        )

    }
    render() {
        return (
            <div className = 'container'>
                <div id = 'player-one'>
                    <Player playerNum='1' updateLast={this.updateLastPressed} />
                </div>

                <div id = 'player-two'>
                    <Player playerNum='2' updateLast={this.updateLastPressed} />
                </div>
                <h3>Last Pressed: Player {this.state.lastPlayer}</h3>
            </div>
        )
    }
}

export default Ex1;