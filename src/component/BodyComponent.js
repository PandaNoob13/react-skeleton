import {Component} from 'react'
// Penulisan class
class BodyComponent extends Component {
    render(){
        return (
            <>
                <h1>Body Component</h1>
                <p>Welcome {this.props.secondName}</p>
            </>
        )
    }
}

export default BodyComponent; // Harus export supaya bisa kebaca sama app.js