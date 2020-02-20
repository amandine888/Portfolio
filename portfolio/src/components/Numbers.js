import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Numbers extends React.Component {
    render (){
        return (
            <div className='pageNumber'>
                <h2>01</h2>
            </div>
        ); 
    }
}

export default withRouter (Numbers); 