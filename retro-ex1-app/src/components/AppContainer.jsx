import React, { Component, Fragment } from 'react';
import Player from './Player';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playerNum: 0
         }
    }

    //update the last player button pressed
    updateLastPressed = (newNum) => {
        this.setState({playerNum: newNum});
    }
    render() { 
        return ( 
            <Fragment>
                <div className="container">
                <h1 className="header">Retro Exercise 1 App</h1>
                <h2 className="lead">Last Button Pressed: Player {this.state.playerNum}</h2>

                <div className='player-one'>
                    <Player playerNum={1} updateLastPressed={this.updateLastPressed}/>
                </div>

                <div className='player-two'>
                    <Player playerNum={2} updateLastPressed={this.updateLastPressed}/>
                </div>
                </div>
            </Fragment>
         );
    }
}
 
export default AppContainer;