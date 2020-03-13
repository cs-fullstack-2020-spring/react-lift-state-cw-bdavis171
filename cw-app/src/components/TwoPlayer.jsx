import React, {Component} from 'react';
import './style.css';
class TwoPlayer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('TwoPlayer mounted');
    }
    render() {
        return(
            <div className = 'container'>
                <div id = 'player-one'>
                    <h3>Player {this.props.playerOne}</h3>
                    <h3>Score: {this.props.playerOneScore}</h3>
                    <button onClick = {this.props.updateOneScore}>Add 1 pt</button>
                </div>
                <div id = 'player-two'>
                    <h3>Player {this.props.playerTwo}</h3>
                    <h3>Score: {this.props.playerTwoScore}</h3>
                    <button onClick = {this.props.updateTwoScore}>Add 1 pt</button>
                </div>
            </div>
        )
    }
}

export default TwoPlayer;