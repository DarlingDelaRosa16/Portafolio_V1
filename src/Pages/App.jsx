import React from 'react'
import Menu from '../Components/Menu/menu';
import {ThemeProvider} from '../Context/themeContext'
import { LanguageProvider } from '../Context/languageContext';

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Menu/>
            </ThemeProvider>
        </LanguageProvider>
        
    );
}
 
export default App;