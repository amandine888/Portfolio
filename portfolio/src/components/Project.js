import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title'; 
import './../mystyle.css';

class Project extends React.Component {
    render (){
        return (
            <div>
                <NavBarre/>
                <Title/>
                <div>
                    <div className='sentence'>
                        <h3>DEVELOPPEMENT WEB - <span className="myName">NOMUSE -</span> WEBDESIGN - CONSULTING</h3>
                    </div>
                    <div className='sentence'>
                        <h3>DEVELOPPEMENT WEB - <span className="myName">AKUAPÉLI -</span> WEBDESIGN - CONSULTING</h3>
                    </div>
                    <div className='sentence'>
                        <h3>DEVELOPPEMENT WEB - <span className="myName">PUISSANCE 4 -</span> WEBDESIGN - CONSULTING</h3>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withRouter (Project); 