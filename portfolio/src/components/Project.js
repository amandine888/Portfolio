import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import './../Project.css';

class Project extends React.Component {
    render (){
        return (
            <div>
                <NavBarre/>
                <Title/>
                <div className="sentenceContainer">
                    <div className='sentence'>
                        <h3>DEVELOPPEMENT WEB - <span className="myName">NOMUSE -</span> WEBDESIGN - CONSULTING</h3>
                    </div>
                    <div className='sentence'>
                        <div className='position'>
                            <h3>DEVELOPPEMENT WEB - <span className="myName">AKUAPÉLI -</span> WEBDESIGN - CONSULTING</h3>
                        </div>
                    </div>
                    <div className='sentence'>
                        <h3>DEVELOPPEMENT WEB - <span className="myName">PUISSANCE 4 -</span> WEBDESIGN - CONSULTING</h3>
                    </div>
                    <div className='sentence'>
                        <div className='position'>
                            <h3>DEVELOPPEMENT WEB - <span className="myName">MISORA -</span> WEBDESIGN - CONSULTING</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (Project); 