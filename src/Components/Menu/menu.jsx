import React, {useContext, useState} from 'react'
import About from "../About/about"
import Projects from "../Projects/Projects"
import Contact from "../Contact/contact"
import ThemeContext from '../../Context/themeContext'
import LanguageContext from '../../Context/languageContext'
import { MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown}  from '../../styledComponents';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon, faBars} from "@fortawesome/free-solid-svg-icons"
import "./menu.css"


const Menu = () => {

    const [setTheme, theme] = useContext(ThemeContext)  
    const [setLanguage, language] = useContext(LanguageContext)
    const [onOpen, setOnOpen] = useState(false)

    const toggleTheme = ()=>{
        setOnOpen(false)
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
        setOnOpen(false)
        if(language === "EN"){
            setLanguage("ES")
            localStorage.setItem("language", "ES")
        }else{
            setLanguage("EN")
            localStorage.setItem("language", "EN")
        }
        
    }
    const toggleMenu = ()=>{
        if(onOpen === false)setOnOpen(true)
        else setOnOpen(false)
    }    

    if(localStorage.getItem("language") === "ES"){
        return (
            <Router>
                <MenuBox generalTheme={theme}>
                    
                    <MenuLogo generalTheme={theme}>Darling De la rosa Vanderhorst</MenuLogo>
                    
                    <NavLink className="navButton" style={{color: theme }} to="/">Sobre Mi</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/projects">Proyectos</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/contact">Contacto</NavLink>
    
                    <MenuButton generalTheme={theme} display={"none"} onClick={toggleLanguage} >EN</MenuButton>
                    <MenuButton generalTheme={theme} display={"none"} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>
                    
                    <MenuButtonDropDown onClick={toggleMenu} generalTheme={theme}><FontAwesomeIcon icon={faBars} /></MenuButtonDropDown>

                </MenuBox>

                <MenuBoxDropDown see={onOpen} generalTheme={theme}>

                    <NavLink className="navDropButton" onClick={toggleMenu} style={{color: theme }} to="/">Sobre Mi</NavLink>
                    <NavLink className="navDropButton" onClick={toggleMenu}style={{color: theme }} to="/projects">Proyectos</NavLink>
                    <NavLink className="navDropButton" onClick={toggleMenu} style={{color: theme }} to="/contact">Contacto</NavLink>
                
                    <MenuButton generalTheme={theme} onClick={toggleLanguage} >EN</MenuButton>
                    <MenuButton generalTheme={theme} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>

                </MenuBoxDropDown>
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
    
                    <MenuLogo generalTheme={theme}>Darling De la rosa Vanderhorst</MenuLogo>
    
                    <NavLink className="navButton" style={{color: theme }} to="/">About</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/projects">Projects</NavLink>
                    <NavLink className="navButton" style={{color: theme }} to="/contact">Contact</NavLink>
    
                    <MenuButton generalTheme={theme} display={"none"} onClick={toggleLanguage} >ES</MenuButton>
                    <MenuButton generalTheme={theme} display={"none"} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>

                    <MenuButtonDropDown onClick={toggleMenu} generalTheme={theme}  ><FontAwesomeIcon icon={faBars} /></MenuButtonDropDown>
                </MenuBox>

                <MenuBoxDropDown see={onOpen} generalTheme={theme}>

                    <NavLink className="navDropButton" onClick={toggleMenu} style={{color: theme }} to="/">About</NavLink>
                    <NavLink className="navDropButton" onClick={toggleMenu} style={{color: theme }} to="/projects">Projects</NavLink>
                    <NavLink className="navDropButton" onClick={toggleMenu} style={{color: theme }} to="/contact">Contact</NavLink>

                    <MenuButton generalTheme={theme} onClick={toggleLanguage} >ES</MenuButton>
                    <MenuButton generalTheme={theme} onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /> </MenuButton>

                </MenuBoxDropDown>

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