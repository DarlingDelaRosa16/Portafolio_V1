import React from 'react'
import Menu from '../Components/Menu/menu';
import {ThemeProvider} from '../Context/themeContext'

const App = () => {
    return (
        <ThemeProvider>
            <Menu/>
        </ThemeProvider>
    );
}
 
export default App;