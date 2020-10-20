import React from 'react';
import Sender from './component/Sender.js';
import Reciver from './component/Reciver.js';
import Conform from './component/price&weight.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router> 
    
    <Switch>
    <Route exact path='/sender' component={Sender}/>
    <Route exact path='/reciver' component={Reciver}/>  
    <Route exact path='/conform' component={Conform} />
    </Switch>

    </Router>
    
  );
}

export default App;
