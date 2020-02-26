import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import './../Footer.css'; 

const style = {
    listStyle: 'none',
    textDecoration: 'none',
    color:'#66242D',
    fontSize:'1.5em',
    textTransform:'uppercase',  
}

class Footer extends React.Component {
    render (){
        return (
            <div className='footerDiv'>
                <div className='discover'>
                    <p>discover more project</p>
                    <img src='img/Fleche.png'></img>
                </div>
                <footer>
                    <ul className='linkProject'>
                        <li>
                        <Link to= '/Nomuse' style={style}>- nomuse -</Link>
                        </li>
                        <li>
                        <Link to= '/Akuapeli' style={style}>- akuapéli -</Link>
                        </li>
                        <li>
                        <Link to= '/Nomuse' style={style}>- misora -</Link>
                        </li>
                        <li>
                        <Link to= '/Nomuse' style={style}>- puissance4 -</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default withRouter (Footer); 