import React from 'react'
import About from "../About/about"
import { MenuBox, MenuLogo, MenuButton}  from '../../styledComponents';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import "./menu.css"

const Menu = () => {
    return (
        <Router>
            
            <MenuBox Gtheme={false}>

                <MenuLogo>Darling De la rosa</MenuLogo>
                <NavLink className="navButton" to="/aboutMe">About</NavLink>
                <NavLink className="navButton" to="/aboutMe">Projects</NavLink>
                <NavLink className="navButton" to="/aboutMe">Contact</NavLink>
                <MenuButton>ES</MenuButton>
                <MenuButton>Rosa</MenuButton>
            </MenuBox>
           
            <Switch>
                <Route path="/aboutMe"> 
                    <About/>
                </Route> 

            </Switch>
        </Router>
    );
} 
export default Menu;