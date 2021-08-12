import React, {useContext, useState} from 'react'
import About from "../About/about"
import Projects from "../Projects/Projects"
import Contact from "../Contact/contact"
import ThemeContext from '../../Context/themeContext'
import LanguageContext from '../../Context/languageContext'
import { MenuBox, MenuLogo, MenuButton, MenuLink}  from '../../styledComponents';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon} from "@fortawesome/free-solid-svg-icons"
import "./menu.css"


const Menu = () => {

    const [setTheme, theme] = useContext(ThemeContext)  
    const [setLanguage, language] = useContext(LanguageContext)
  
    const toggleTheme = ()=>{
        if(theme === "black"){
            setTheme("white")
            localStorage.setItem("theme", "white")
        }
        else {
            setTheme("black")
            localStorage.setItem("theme", "black")
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

    if(localStorage.getItem("language") === "ES"){
        return (
            <Router>
                <MenuBox generalTheme={theme}>
    
                    <MenuLogo generalTheme={theme}>Darling De la rosa</MenuLogo>
    
                    <NavLink className="navButton" style={{color: theme }} to="/">Sobre Mi</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/projects">Proyectos</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/contact">Contacto</NavLink>
    
                    <MenuButton generalTheme={theme} onClick={toggleLanguage} >EN</MenuButton>
                    <MenuButton generalTheme={theme} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>
    
                </MenuBox>
               
                <Switch>
    
                    <Route exact path="/"> 
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
                <MenuBox generalTheme={theme}>
    
                    <MenuLogo generalTheme={theme}>Darling De la rosa</MenuLogo>
    
                    <NavLink className="navButton" style={{color: theme }} to="/">About</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/projects">Projects</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/contact">Contact</NavLink>
    
                    <MenuButton generalTheme={theme} onClick={toggleLanguage} >ES</MenuButton>
                    <MenuButton generalTheme={theme} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>
    
                </MenuBox>
               
                <Switch>
    
                    <Route exact path="/"> 
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