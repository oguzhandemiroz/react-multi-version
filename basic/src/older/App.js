import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: this.props.counter || 0
        }
        

        this.increaseCounter = this.increaseCounter.bind(this)
        this.decreaseCounter = this.decreaseCounter.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
    }

    increaseCounter() {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }

    decreaseCounter() {
        this.setState(prevState => ({counter: prevState.counter - 1}))
    }

    render() {
        return (
            <div>
                Older ({this.state.counter})

                <div>
                <button onClick={this.increaseCounter}>+</button>
                <button onClick={this.decreaseCounter}>-</button>
                </div>
            </div>
        )
    }
}

export default App
