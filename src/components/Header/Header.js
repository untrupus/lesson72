import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="logo">
               <img src="https://mypizza.kg/img/logo--pizza.png"
                    className="logoImg"
                    alt="logo"/>
           </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink exact to='/'
                                 className="navLink"
                                 activeStyle={{
                                     textDecoration: "underline",
                                 }}
                        >Menu</NavLink></li>
                    <li>
                        <NavLink to='/orders'
                                 className="navLink"
                                 activeStyle={{
                                     textDecoration: "underline",
                                 }}
                        >Orders</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;