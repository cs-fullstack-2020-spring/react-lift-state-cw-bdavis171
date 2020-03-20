import React, { Component, Fragment } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playerScore: 0
         }
    }

    //update score
    updatePlayerScore = (event) => {
        event.preventDefault();
        let newScore = this.state.playerScore + 1;
        this.setState({playerScore: newScore});
        this.props.updateScore(newScore);
        this.props.updatePlayerLead();
    }
    render() { 
        return ( 
            <Fragment>
                <h3>Player {this.props.playerNum}</h3>
                <button onClick={this.updatePlayerScore}>Add 1 to Score</button>
            </Fragment>
         );
    }
}
 
export default Player;