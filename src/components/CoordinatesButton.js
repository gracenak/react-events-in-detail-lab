import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    handleButton = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}


    render() {
        return(
            <button onClick={this.handleButton}>CLICK</button>
        )
    }
}
