import React, {useContext} from 'react'
import {ContactBox, ContactContent, ContactContentSocial, ContactTitle,ContactSocialMedias, ContactLabel, ContactTextBox, ContactTextArea, ContactButton} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext'
import "./contact.css"
import LanguageContext from '../../Context/languageContext'

const Contact = () => {
    
    const [setTheme, theme] = useContext(ThemeContext)
    const [setLanguage, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <ContactBox generalTheme={theme} >
                <ContactContent >
                    <ContactTitle generalTheme={theme} >Contact me</ContactTitle>
                    <form id="contactInformation">
                        <ContactLabel generalTheme={theme} gridColumn={"1/2"} gridRow={"1/2"}>Name</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                        <ContactLabel generalTheme={theme} gridColumn={"1/2"} gridRow={"3/4"}>Email</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                        <ContactLabel generalTheme={theme} gridColumn={"2/3"} gridRow={"1/2"}>Description</ContactLabel>
                        <ContactTextArea id="contactArea"/>
                        <ContactButton generalTheme={theme}>Send</ContactButton>
                        <ContactContentSocial>
                            <ContactSocialMedias url={"https://i.imgur.com/h5PAQtA.png"} target="_blank" href={"https://github.com/DarlingDelaRosa16"}/>
                            <ContactSocialMedias url={"https://i.imgur.com/gqavrtd.png"} target="_blank" href={"https://www.instagram.com/darling_delarosa/"}/>
                            <ContactSocialMedias posX={"-22.5px"} url={"https://i.imgur.com/nnqiyAA.png"} target="_blank" href={"https://www.linkedin.com/in/darling-nomar-de-la-rosa-314872219/"} />
                        </ContactContentSocial>
                        
                    </form>
                </ContactContent>
            </ContactBox>
        );
    }else{
        return (
            <ContactBox generalTheme={theme} >
                <ContactContent >
                    <ContactTitle generalTheme={theme}>Contáctame</ContactTitle>
                    <form id="contactInformation">
                        <ContactLabel generalTheme={theme} gridColumn={"1/2"} gridRow={"1/2"}>Nombre</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                        <ContactLabel generalTheme={theme} gridColumn={"1/2"} gridRow={"3/4"}>Correo Electronico</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                        <ContactLabel generalTheme={theme} gridColumn={"2/3"} gridRow={"1/2"}>Descripción</ContactLabel>
                        <ContactTextArea id="contactArea"/>
                        <ContactButton generalTheme={theme}>Enviar</ContactButton>
                        <ContactContentSocial>
                            <ContactSocialMedias url={"https://i.imgur.com/h5PAQtA.png"} target="_blank" href={"https://github.com/DarlingDelaRosa16"}/>
                            <ContactSocialMedias url={"https://i.imgur.com/gqavrtd.png"} target="_blank" href={"https://www.instagram.com/darling_delarosa/"}/>
                            <ContactSocialMedias posX={"-22.5px"} url={"https://i.imgur.com/nnqiyAA.png"} target="_blank" href={"https://www.linkedin.com/in/darling-nomar-de-la-rosa-314872219/"} />
                        </ContactContentSocial>
                    </form>
                </ContactContent>
            </ContactBox>
        );
    }
    
}
 
export default Contact;