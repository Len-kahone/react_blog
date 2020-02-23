import React from 'react';
import Login from './Login'
import AdminIndex from './AdminIndex';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
function Main(){
    return (
      <Router>
        <Route path="/login"  component={Login}></Route>
        <Route path="/index"  component={AdminIndex}></Route>
        {/* <Redirect from="/" to="/login"></Redirect> */}
      </Router>
    );

    
}
export default Main