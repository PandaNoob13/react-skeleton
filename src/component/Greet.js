import {Component} from 'react';

class Greet extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'Enigma Camp'}
    }
    change = () => {
        this.setState({name : 'It Bootcamp'})
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={this.change}>Ubah Elemen</button>
            </div>
        )
    }
}

export default Greet;