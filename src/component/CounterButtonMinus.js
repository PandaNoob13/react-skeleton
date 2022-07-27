import {Component} from 'react';

class CounterButtonMinus extends Component{
    constructor(props){
        super(props)
    }
    buttonMinus = () => {
        let number = this.props.number - 1;
        this.props.callback(number);
    }
    render(){
        return(
            <div>
                <button onClick={this.buttonMinus}>decrement</button>
            </div>
        )
    }
}
export default CounterButtonMinus;