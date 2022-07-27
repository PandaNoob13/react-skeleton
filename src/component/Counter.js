import {Component} from 'react';
import CounterButtonMinus from './CounterButtonMinus';
import CounterButtonPlus from './CounterButtonPlus'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            number : this.props.default
        }
        //this.increment = this.increment.bind(this)
    }
    increment = (val) => {
        this.setState({
            number: val
        })
    }
    decrement = (val) => {
        this.setState({
            number: val
        })
    }
    // increment() {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }
    // decrement = () => { // Arrow func gausah di bind, karna dh otomatis
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

    render(){
        return(
            <div>
                <h1 className='text-dark mx-2'>{this.state.number}</h1>
                <CounterButtonPlus callback={this.increment} number={this.state.number}/>
                <CounterButtonMinus callback={this.decrement} number={this.state.number}/>
                {/* <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button> */}
            </div>
        )
    }
}
export default Counter;