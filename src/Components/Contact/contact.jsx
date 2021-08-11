import React, {useContext} from 'react'
import {ContactBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactTextArea, ContactButton} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext'
import "./contact.css"

const Contact = () => {
    
    const [setTheme, theme] = useContext(ThemeContext)

    return (
        <ContactBox generalTheme={theme[0]} >
            <ContactContent >
                <ContactTitle generalTheme={theme[0]} >Contact me</ContactTitle>
                <form id="contactInformation">
                    <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"1/2"}>Name</ContactLabel>
                    <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                    <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"3/4"}>Mail</ContactLabel>
                    <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                    <ContactLabel generalTheme={theme[0]} gridColumn={"2/3"} gridRow={"1/2"}>Description</ContactLabel>
                    <ContactTextArea id="contactArea"/>
                    <ContactButton generalTheme={theme[0]}>Send</ContactButton>
                </form>
            </ContactContent>
        </ContactBox>
    );
}
 
export default Contact;