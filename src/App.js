import logo from './logo.svg';
import './App.css'; //Import Css
import BodyComponent from './component/BodyComponent';
import BodyComponentFunc from './component/BodyComponentFunc';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import Content from './component/Content'
import Footer from './component/Footer';
import Parent from './component/Parent'
import Greet from './component/Greet'
import Counter from './component/Counter'


function App() { // Bagian JSX (java script extention)
  const name = "Samuel Maynard"
  const hello = <h1 style = {{color: 'white', fontSize: '60px'}}>Hello, {name}</h1>
  const buttonStyle = {
    padding : '10px',
    paddingLeft : '3px',
    paddingRight: '3px',
    color : 'grey',
    fontSize : '10px'
  }
  // Kalo ga butuh styling, taroh tag kosong aja
  const buttonText = {
    text : 'Send'
  }
  return (

    <Counter default='2'/>
    //<Greet/>
    // <>
    //   <Navbar/>
    //   <div style={{minHeight: '100vh'}}>
    //     <Content/>
    //     <BodyComponent secondName="Maynard"/>
    //     <BodyComponentFunc firstName="Samuel"/>
    //     <Parent name='sam' age={22}/>
    //   </div>
    //   <Footer/>
    // </>

    //<h1>BROO</h1>
    // <div className="App"> 
    //   <header className="App-header">

    //     {/* <BodyComponent/>
      
    //     {/* {hello}
    //     <button style={buttonStyle}>{buttonText.text}</button>
    //     <button className="my-button">{buttonText.text}</button> */}
    //   </header>
    // </div>
  );
}

export default App;
