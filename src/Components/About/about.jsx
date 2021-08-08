import React, {useContext} from 'react'
import { AboutBox, AboutImg, AboutInfo, AboutKnowledge, AboutLanguage, AboutTitle, AboutBackground, AboutResumeButtom } from '../../styledComponents';
import ThemeContext from '../../Context/themeContext'

const About = () => {

    const [setTheme, theme] = useContext(ThemeContext) 

    return (
        <AboutBox  generalTheme={theme[0]}>
            
            <AboutImg>
                <AboutResumeButtom>Resume</AboutResumeButtom>
            </AboutImg>
            <AboutBackground>
                <AboutTitle generalTheme={theme[0]} >Myself</AboutTitle>
                <AboutInfo generalTheme={theme[0]} >Johno , Nuevulio de 1839-Ormond Beach, Florida, 23 de mayo de 19372​ fue un empresario, 23 de mayo de 19372​ fue un empresario, inversor e industrial estadounidense, que trabajó en la industria petrolera, llegando al punto de monopolizarla. Formó parte del grupo de empresarios conocido como «barones ladrones» de la Edad Dorada de la industria en los Estados Unidos, cuyo éxito le llevó a ser el hombre más rico de su época.</AboutInfo>
                <AboutKnowledge>
                    <AboutLanguage posY={"-14px"} url={"https://i.imgur.com/o883GIL.png"}/>
                    <AboutLanguage posX={"-28px"} posY={"-14px"} url={"https://i.imgur.com/lstWdYB.png"}/>
                    <AboutLanguage url={"https://i.imgur.com/kdPSoJa.png"}/>
                    <AboutLanguage posX={"-28px"} url={"https://i.imgur.com/VsljoRE.png"}/>
                    <AboutLanguage posY={"-3px"} url={"https://i.imgur.com/n2oipMV.png"}/>
                    <AboutLanguage posY={"-5px"} url={"https://i.imgur.com/Y6439PQ.png"}/>
                    <AboutLanguage/>
                    <AboutLanguage/>
                    
                </AboutKnowledge>
            </AboutBackground>
        </AboutBox>
    );
}
 
export default About;