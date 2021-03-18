import React, {Component} from 'react'
import { render } from "enzyme"

export default class DelayedButton extends Component {

    handleDelay = (event) => {
        event.persist()
        setTimeout(() => {
        this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.handleDelay}>DELAY CLICK</button>
        )
    }
}
