import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerNum: this.props.playerNum,
            score: 0
           
        }
    }
    componentDidMount() {
        //sanity
        console.log('Player mounted');
    }
    //create a function to add to score
    updateScore = () => {
        let newScore = this.state.score + 1;
        this.setState(
            {
                score : newScore 
             
            }
        );
        //call the function from the parent to update who pressed the button last
            this.props.updateLast(this.state.playerNum);
        
    }
    render() {
        return (
            <div>
                <h3>Player {this.state.playerNum}</h3>
                <h3>Score: {this.state.score}</h3>
                <button onClick = {this.updateScore}>Add Score</button>
                
       
            </div>
        );
    }
}


export default Player;