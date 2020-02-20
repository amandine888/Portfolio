import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Home from './components/Home'; 
import NavBarre from './components/NavBarre'; 

class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Home} />
        {/* <Route path='/NavBarre' component={NavBarre}></Route> */}
      </Switch>
    </Router>
  );
  }
}

export default App;
