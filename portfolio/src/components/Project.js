import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import './../mystyle.css';

class Project extends React.Component {
    render (){
        return (
            <div>
                <NavBarre/>
            </div>
        )
    }
}

export default withRouter (Project); 