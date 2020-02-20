import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class NavBarre extends React.Component {
    render (){
        return (
            <div>
                <nav class='navBarre'>
                    <ul class='listeContainer'> 
                        <div className='linkContainer'>
                            <li>Home</li>
                            <div className='divNumber'>
                                <div className='divImg'>
                                    <img src='img/Rectangle.png'></img>
                                </div>
                                <p>01</p>
                            </div>
                        </div>
                        <div className='linkContainer'>
                            <li>Project</li>
                            <div className='divNumber'>
                                <div className='divImg'>
                                    <img src='img/Rectangle.png'></img>
                                </div>
                                <p>02</p>
                            </div>
                        </div>
                        <div className='linkContainer'>
                            <li>Skills</li>
                            <div className='divNumber'>
                                <div className='divImg'>
                                    <img src='img/Rectangle.png'></img>
                                </div>
                                <p>03</p>
                            </div>
                        </div>
                        <div className='linkContainer'>
                            <li>Contact</li>
                            <div className='divNumber'>
                                <div className='divImg'>
                                    <img src='img/Rectangle.png'></img>
                                </div>
                                <p>04</p>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        ); 
    }
}

export default withRouter (NavBarre); 