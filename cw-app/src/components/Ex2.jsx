import React, { Component } from 'react';
import TwoPlayer from './TwoPlayer';

class Ex2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: 1,
            playerTwo: 2,
            playerOneScore: 0,
            playerTwoScore: 0,
            currentLead: 0
        }
    }
    componentDidMount() {
        //sanity
        console.log('Ex2 mounted');
    }
    //update the current lead player
    updateCurrentLead = () => {
        if (this.state.playerOneScore > this.state.playerTwoScore) {
            this.setState({ currentLead: this.state.playerOne });
        }
        else if (this.state.playerTwoScore > this.state.playerOneScore) {
            this.setState({ currentLead: this.state.playerTwo });
        }
        else {
            this.setState({ currentLead: 0 });
        }
    }
    //update player one score by 1
    updatePlayerOneScore = () => {
        let newOneScore = this.state.playerOneScore;
        this.setState(
            {
                playerOneScore: newOneScore + 1
            }
        )
        //update the lead
        this.updateCurrentLead();
    }
    //update player two score by 1
    updatePlayerTwoScore = () => {
        let newTwoScore = this.state.playerTwoScore;
        this.setState(
            {
                playerTwoScore: newTwoScore + 1
            }
        )
        //update the lead
        this.updateCurrentLead();
    }
    render() {
        return (
            <div>
                <h3>Current Lead: {this.state.currentLead} </h3>
                <TwoPlayer updateOneScore = {this.updatePlayerOneScore} updateTwoScore = {this.updatePlayerTwoScore} playerOne = {this.state.playerOne} playerTwo = {this.state.playerTwo} playerOneScore = {this.state.playerOneScore} playerTwoScore = {this.state.playerTwoScore}/>
            </div>
        )
    }
}


export default Ex2;
