import React, { Component, Fragment } from 'react';
import Player from './Player';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playerNum: 0,
            playerOneScore:0,
            playerTwoScore: 0,
            isPlayerOneLead: false,
            isPlayerTwoLead: false
         }
    }

    // update player lead
    updatePlayerLead = () => {
        if (this.state.playerOneScore > this.state.playerTwoScore) {
            this.setState({
                isPlayerOneLead: true,
                isPlayerTwoLead: false
            })
        }
        else if (this.state.playerTwoScore > this.state.playerOneScore){
            this.setState({
                isPlayerOneLead: false,
                isPlayerTwoLead: true
            })
        }
    }

    // update player one score
    updatePlayerOneScore = (newScore) => {
        this.setState({playerOneScore: newScore});
    }

    // update player two score
    updatePlayerTwoScore = (newScore) => {
        this.setState({playerTwoScore: newScore});
    }

    render() { 
        let newLead;
        if (this.state.isPlayerOneLead) {
            newLead = <h2>The winner is Player 1!!!</h2>
        }
        else if (this.state.isPlayerTwoLead) {
            newLead = <h2>The winner is Player 2!!!</h2>
        }
        return ( 
            <Fragment>
                <div className="container">
                    <div className="header">
                    <h1>Retro Exercise 2 App</h1>
                    {newLead}
                    </div>

                    <div className="player-one">
                        <Player playerNum = {1} updatePlayerLead={this.updatePlayerLead} updateScore={this.updatePlayerOneScore}/>
                        <h4>Score: {this.state.playerOneScore}</h4>
                    </div>

                    <div className="player-two">
                        <Player playerNum = {2} updatePlayerLead={this.updatePlayerLead} updateScore={this.updatePlayerTwoScore}/>
                        <h4>Score: {this.state.playerTwoScore}</h4>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default AppContainer;