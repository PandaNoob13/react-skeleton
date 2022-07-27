import {Component} from 'react';

class CounterButtonPlus extends Component{
    constructor(props){
        super(props)
    }
    buttonPlus = () => {
        let number = this.props.number + 1;
        this.props.callback(number);
    }
    render(){
        return(
            <div>
                <button onClick={this.buttonPlus}>increment</button>
            </div>
        )
    }
}
export default CounterButtonPlus;