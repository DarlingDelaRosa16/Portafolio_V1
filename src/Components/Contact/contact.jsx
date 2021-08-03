import React, {useContext} from 'react'
import {ContactBox} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext'

const Contact = () => {
    
    const [setTheme, theme] = useContext(ThemeContext)

    return (
        <ContactBox generalTheme={theme[0]} ></ContactBox>
    );
}
 
export default Contact;