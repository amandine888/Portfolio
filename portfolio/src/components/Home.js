import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title'; 
import './../mystyle.css';

class Home extends React.Component {
    render (){
        return (
            <div>
                    <NavBarre/>
                    <Title/>
            </div>
        ); 
    }
}

export default withRouter (Home); 