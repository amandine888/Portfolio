import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import NavBarre from './NavBarre'; 
import Title from './Title';
import Footer from './Footer';
import './../Nomuse.css'; 

const header = {
    backgroundColor: '#EFDCDD', 
    height:'90vh',
}

class Nomuse extends React.Component {
    render (){
        return (
            <div>
                <div className='headerContainer' style={header} >
                    <NavBarre/>
                    <Title/>
                    <div className='formuleContainer'>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, </p>
                    </div>
                </div>
                <div className='projectContainer'>
                    <div className="sizeDiv">
                        <div className='detailsProject'>
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
                        <div className='colorContainer'>
                            <div className='color1'></div>
                            <div className='color2'></div>
                            <div className='color3'></div>
                        </div>
                        <div className='positionImg'>
                            
                            <div className='nomuseDiv1'>
                                <img src='img/Nomuse3.png'></img>
                            </div>
                            <div className='positionTitle1'>
                                <div className='nomuseDiv2'>
                                    <img src='img/Nomuse1.png'></img>
                                </div>
                                <h3>blabla</h3>
                            </div>
                            <div className='positionTitle2'>
                                <div className='nomuseDiv3'>
                                    <img src='img/Nomuse2.png'></img>
                                </div>
                                <h3>blabla</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (Nomuse); 