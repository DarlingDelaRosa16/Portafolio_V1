import React, { createContext, useReducer, useState } from 'react'

const ThemeContext = createContext();  

const ThemeProvider = ( {children} ) => {

    const [theme, setTheme] = useState([true, "black"])
    
    return (
        <ThemeContext.Provider value={[setTheme, theme]}>
            {children}
        </ThemeContext.Provider>
    );
}
export {ThemeProvider};
export default ThemeContext;  