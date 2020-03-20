import React, { Component, Fragment } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    //handle button press
    handleButton = (event) => {
        event.preventDefault();
        this.props.updateLastPressed(this.props.playerNum);
    }
    render() { 
        return ( 
            <Fragment>
                <h3>Player {this.props.playerNum}</h3>
                <button onClick={this.handleButton}>Click Me!</button>
            </Fragment>
         );
    }
}
 
export default Player;