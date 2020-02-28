import React from 'react'; 
import {withRouter, Redirect} from 'react-router-dom'; 
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import './../Contact.css'; 

const reseaux = {
    fontSize: '1.25em',
    textDecoration: 'none',
    color: '#66242D',
}

class Contact extends React.Component {
    render () {
        return (
            <div className='contactContainer'>
                <NavBarre/>
                <Title/>
                <div className='socialDiv'>
                    <div className='gitDiv'>
                        <img src='img/github.png'></img>
                        <Link to='https://github.com/amandine888' style={reseaux}>Link to Github</Link>
                    </div>
                    <div className='linkedinDiv'>
                        <img src='img/linkedin.png'></img>
                        <Link to='https://www.linkedin.com/in/amandine-divay2/' style={reseaux}>Link to Linkedin</Link>
                    </div>
                </div>
                <div className='formContainer'>
                    <form className='formDiv'>
                        <div className='enterName'>
                            <label>Please let me your name</label>
                            <input></input>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                        </div>
                        <div className='enterEmail'>
                            <label>and your email</label>
                            <input></input>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter (Contact); 