import React from 'react'
import { Link } from 'react-router-dom';
import "../css/navbar.css"
import { MenuOutlined } from '@ant-design/icons';
import CompanyButton from './CompanyButton';


export default function Navbar() {
    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    

    return (
        <div className="topnav  " id="myTopnav">
            <div className="site-wide-margin space-around">
                <div className="placeholder-nav">
                </div>

                <div className="logo">
                </div>
                
                <div>
                    <Link to="/" className="nav-link">HOME</Link>
                    <Link to="/about-us" className="nav-link">ABOUT US</Link>
                    <Link to="/contact-us" className="nav-link">CONTACT US</Link>
                    <a className="icon"  onClick={()=>myFunction()}>
                        <i className=""><MenuOutlined /></i>
                    </a>
                    {/* <SignInButton title="Sign in"/> */}
                    <div className="sign-in-nav">
                    <CompanyButton title="Sign in" isDark={false} isFullWidth={false} isAlwaysFullWidth={false} marginTop="mar5"/>
                    </div>
                </div>
            </div>
      </div>
    )
}
