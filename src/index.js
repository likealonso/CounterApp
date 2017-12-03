import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Counter extends Component {
    constructor () {
        super();
        this.state = {
            counter: 0
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }
    

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Clock counter={this.state.counter} updateCounter={this.updateCounter}/>
                <Clock counter={this.state.counter} updateCounter={this.updateCounter}/>
                <Clock counter={this.state.counter} updateCounter={this.updateCounter}/>
                <Clock counter={this.state.counter} updateCounter={this.updateCounter}/>
            </div>
        )
    }
    
}

const Clock = (props) => {
    return (
        <div>
            <h2>{props.counter}</h2>
            <button onClick={props.updateCounter}>Increment</button>
        </div>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'));

export default Counter