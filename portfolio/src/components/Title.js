import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Title extends React.Component{
    render (){
        return (
            <div className='titleContainer'>
                <h1>INTRO</h1>
            </div>
        )
    }
}

export default withRouter (Title); 