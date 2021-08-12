import React, { createContext, useReducer, useState } from 'react'

const ThemeContext = createContext();  

const ThemeProvider = ( {children} ) => {
    let light = ""
    if(localStorage.getItem("theme") !== undefined){
        light = localStorage.getItem("theme")
    }else{
        localStorage.setItem("theme", "white")
    }

    const [theme, setTheme] = useState(light)    
    return (
        <ThemeContext.Provider value={[setTheme, theme]}>
            {children}
        </ThemeContext.Provider>
    );
}
export {ThemeProvider};
export default ThemeContext;  