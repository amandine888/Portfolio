import React from 'react'; 
import {withRouter, Redirect} from 'react-router-dom'; 
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import Footer from './Footer';
import './../Akuapeli.css'; 

const header = {
    backgroundColor: '#E3DFEC', 
    height:'90vh',
}

const link = {
    fontSize: '1.25em', 
    textDecoration: 'none', 
    color: '#66242D', 
    textTransform: 'uppercase', 
    fontWeight: '600',
}

class Akuapeli extends React.Component {
    render (){
        return (
            <div className='akuapeliContainer'>
                <div className='headerContainerAkuapeli' style={header} >
                    <NavBarre/>
                    <Title/>
                    <div className='formuleContainerAkuapeli'>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, </p>
                    </div>
                </div>
                <div className='projectContainerAkuapeli'>
                    <div className="sizeDivAkuapeli">
                        <div className='detailsProjectAkuapeli'>
                            <div>
                                <h4>project</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC,</p>
                            </div>
                            <div>
                                <h4>my role</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC,</p>
                            </div>
                            <div>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC,</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='colorContainerAkuapeli'>
                            <div className='color4'></div>
                            <div className='color5'></div>
                            <div className='color6'></div>
                        </div>
                        <div className='positionImgAkuapeli'>
                            <div className='akuapeliDiv1'>
                                <img src='img/Akuapeli1.png'></img>
                            </div>
                            <div className='positionTitleAkua1'>
                                <div className='akuapeliDiv2'>
                                    <img src='img/Akuapeli4.png'></img>
                                </div>
                                <h3>blabla</h3>
                            </div>
                            <div className='positionTitleAkua2'>
                                <div className='akuapeliDiv3'>
                                    <img src='img/Nomuse2.png'></img>
                                </div>
                                <h3>blabla</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='linkDivAkua'>
                    <Link to='' style={link} >Link to the project</Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (Akuapeli); 