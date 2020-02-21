import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import Numbers from './Numbers';  
import Sentence from './Sentence'; 
import Scroll from './Scroll'; 
import Curriculum from './Curriculum'; 
import './../NavBarre.css'; 
import './../Title.css'; 
import './../Numbers.css'; 
import './../Sentence.css'; 
import './../Scroll.css'
import './../Curriculum.css'; 
import './../mystyle.css';

class Home extends React.Component {
    render (){
        return (
            <div>
                    <NavBarre/>
                    <Title/>
                    {/* <Numbers/> */}
                    <Sentence/>
                    <Scroll/>
                    <Curriculum/>
            </div>
        ); 
    }
}

export default withRouter (Home); 