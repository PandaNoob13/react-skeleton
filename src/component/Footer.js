import {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className='text-center p-2 bg-dark'>
                    <span className='text-white'>
                        Enigma camp 2022 <a className='text-white' href='https://enigmacamp.com'>
                            Click Here!
                        </a>
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer;