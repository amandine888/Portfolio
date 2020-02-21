import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Sentence extends React.Component {
    render () {
        return (
            <div className= 'sentenceContainer'>
                <div className= 'sentence'>
                    <h3>DEVELOPPEMENT WEB - <span className="myName">AMANDINE DIVAY -</span> WEBDESIGN - CONSULTING</h3>
                </div>
            </div>
        )
    }
}

export default withRouter (Sentence); 