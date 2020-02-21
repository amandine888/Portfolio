import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Scroll extends React.Component {
    render (){
        return (
                <div className='scrollContainer'>
                    <p>Scroll down</p>
                    <img src='img/Fleche.png'></img>
                </div>
        )
    }
}

export default withRouter (Scroll); 