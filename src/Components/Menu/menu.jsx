import React, {useContext, useState} from 'react'
import About from "../About/about"
import Projects from "../Projects/Projects"
import Contact from "../Contact/contact"
import ThemeContext from '../../Context/themeContext'
import LanguageContext from '../../Context/languageContext'
import { MenuBox, MenuLogo, MenuButton, MenuLink}  from '../../styledComponents';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import "./menu.css"


const Menu = () => {

    const [setTheme, theme] = useContext(ThemeContext)  
    const [setLanguage, language] = useContext(LanguageContext)
    const [lights, setLights] = useState(faMoon)

    const toggleTheme = ()=>{
        if(theme[0]){
            setTheme([false, "white"])
            localStorage.setItem("theme", "black")
            setLights(faMoon)
        }
        else {
            setTheme([true, "black"])
            localStorage.setItem("theme", "white")
            setLights(faSun)
        }
    }

    const toggleLanguage = ()=>{
        if(language === "EN"){
            setLanguage("ES")
            localStorage.setItem("language", "ES")
        }else{
            setLanguage("EN")
            localStorage.setItem("language", "EN")
        }
        
    }
    let lang = localStorage.language
    let them = localStorage.theme
    console.log(lang)
    console.log(theme)
    console.log(localStorage)

    if(localStorage.getItem("language") === "ES"){
        return (
            <Router>
                <MenuBox generalTheme={them}>
    
                    <MenuLogo generalTheme={them}>Darling De la rosa</MenuLogo>
    
                    <NavLink className="navButton" style={{color: them }} to="/aboutMe">Sobre Mi</NavLink>
                    <NavLink className="navButton" style={{color: them }} to="/projects">Proyectos</NavLink>
                    <NavLink className="navButton" style={{color: them }} to="/contact">Contacto</NavLink>
    
                    <MenuButton generalTheme={them} onClick={toggleLanguage} >EN</MenuButton>
                    <MenuButton generalTheme={them} onClick={toggleTheme}><FontAwesomeIcon icon={lights} /> </MenuButton>
    
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
    }else{
        return (
            <Router>
                <MenuBox generalTheme={them}>
    
                    <MenuLogo generalTheme={them}>Darling De la rosa</MenuLogo>
    
                    <NavLink className="navButton" style={{color: them }} to="/aboutMe">About</NavLink>
                    <NavLink className="navButton" style={{color: them }} to="/projects">Projects</NavLink>
                    <NavLink className="navButton" style={{color: them }} to="/contact">Contact</NavLink>
    
                    <MenuButton generalTheme={them} onClick={toggleLanguage} >ES</MenuButton>
                    <MenuButton generalTheme={them} onClick={toggleTheme}><FontAwesomeIcon icon={lights} /> </MenuButton>
    
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
    
} 
export default Menu;