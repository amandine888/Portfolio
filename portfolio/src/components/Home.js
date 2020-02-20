import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import Numbers from './Numbers';  
import Sentence from './Sentence'; 
import './../NavBarre.css'; 
import './../Title.css'; 
import './../Numbers.css'; 
import './../Sentence.css'; 
import './../mystyle.css';

class Home extends React.Component {
    render (){
        return (
            <div>
                    <NavBarre/>
                    <Title/>
                    {/* <Numbers/> */}
                    <Sentence/>
            </div>
        ); 
    }
}

export default withRouter (Home); 