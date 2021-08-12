import React, {useContext} from 'react'
import {ContactBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactTextArea, ContactButton} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext'
import "./contact.css"
import LanguageContext from '../../Context/languageContext'

const Contact = () => {
    
    const [setTheme, theme] = useContext(ThemeContext)
    const [setLanguage, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <ContactBox generalTheme={theme[0]} >
                <ContactContent >
                    <ContactTitle generalTheme={theme[0]} >Contact me</ContactTitle>
                    <form id="contactInformation">
                        <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"1/2"}>Name</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                        <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"3/4"}>Email</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                        <ContactLabel generalTheme={theme[0]} gridColumn={"2/3"} gridRow={"1/2"}>Description</ContactLabel>
                        <ContactTextArea id="contactArea"/>
                        <ContactButton generalTheme={theme[0]}>Send</ContactButton>
                    </form>
                </ContactContent>
            </ContactBox>
        );
    }else{
        return (
            <ContactBox generalTheme={theme[0]} >
                <ContactContent >
                    <ContactTitle generalTheme={theme[0]} >Contactame</ContactTitle>
                    <form id="contactInformation">
                        <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"1/2"}>Nombre</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                        <ContactLabel generalTheme={theme[0]} gridColumn={"1/2"} gridRow={"3/4"}>Correo Electronico</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                        <ContactLabel generalTheme={theme[0]} gridColumn={"2/3"} gridRow={"1/2"}>Descripción</ContactLabel>
                        <ContactTextArea id="contactArea"/>
                        <ContactButton generalTheme={theme[0]}>Enviar</ContactButton>
                    </form>
                </ContactContent>
            </ContactBox>
        );
    }
    
}
 
export default Contact;