import React, {useContext} from 'react'
import About from "../About/about"
import Projects from "../Projects/Projects"
import Contact from "../Contact/contact"
import ThemeContext from '../../Context/themeContext'
import { MenuBox, MenuLogo, MenuButton, MenuLink}  from '../../styledComponents';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import "./menu.css"

const Menu = () => {

    const [setTheme, theme] = useContext(ThemeContext)  
    
    const toggleTheme = ()=>{
        if(theme[0]){setTheme([false, "white"])}
        else {setTheme([true, "black"])}
    }
    return (
        <Router>
            <MenuBox generalTheme={theme[0]}>

                <MenuLogo generalTheme={theme[0]}>Darling De la rosa</MenuLogo>

                <NavLink className="navButton" style={{color: theme[1] }} to="/aboutMe">About</NavLink>
                <NavLink className="navButton" style={{color: theme[1] }} to="/projects">Projects</NavLink>
                <NavLink className="navButton" style={{color: theme[1] }} to="/contact">Contact</NavLink>

                <MenuButton generalTheme={theme[0]} >ES</MenuButton>
                <MenuButton generalTheme={theme[0]} onClick={toggleTheme}>Rosa</MenuButton>

            </MenuBox>
           
            <Switch>

                <Route path="/aboutMe"> 
                    <About/>
                </Route> 
                <Route path="/projects"> 
                    <Projects/>
                </Route>
                <Route path="/contact"> 
                    <Contact/>
                </Route>

            </Switch>
        </Router>
    );
} 
export default Menu;