import React, {Component} from 'react'; 
import {auth} from "../firebase";
import '../App.css';
class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="signout">
                <button className = "signout-button" onClick = {() => {auth.signOut()}}>Sign out</button>
                </div>
                <h1 className="header">Workflow</h1>
            </div>
            
            

        );
    }
}

export default Header; 