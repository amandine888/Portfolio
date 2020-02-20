import React from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Numbers extends React.Component {
    render (){
        return (
            <div className=''>
                <p>01</p>
            </div>
        )
    }
}

export default withRouter (Numbers); 