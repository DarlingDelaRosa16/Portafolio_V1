import React, {useContext} from 'react'
import { AboutBox, AboutImg, AboutInfo, AboutKnowledge, AboutLanguage, AboutTitle, AboutBackground, AboutResumeButtom } from '../../styledComponents';
import ThemeContext from '../../Context/themeContext'
import LanguageContext from '../../Context/languageContext'

const About = () => {

    const [/*setTheme*/, theme] = useContext(ThemeContext) 
    const [/*setLanguage*/, language] = useContext(LanguageContext)

    if(language ==="EN"){
        return (
            <AboutBox  generalTheme={theme}>
                
                <AboutImg posX={"-75px"} posY={"-15px"} url={"https://i.imgur.com/BefHqap.png"}>
                    
                </AboutImg>
                <AboutBackground>
                    <AboutTitle generalTheme={theme}>About Me</AboutTitle>
                    <AboutInfo generalTheme={theme} >
                        Hello. Im Darling De la rosa a software developer and advanced technician graduated from ITSC. Im focused in tecnologies with JavaScript and I try to impruve my skills creating projects and using news tecnologies, I want to contribute with my time, effort and knowledge in developming, updating and administrating web apps. Some of my skill are:
                    </AboutInfo>
                    <AboutKnowledge>
    
                        <AboutLanguage posY={"-14px"} url={"https://i.imgur.com/o883GIL.png"}/>
                        <AboutLanguage posX={"-28px"} posY={"-14px"} url={"https://i.imgur.com/lstWdYB.png"}/>
                        <AboutLanguage url={"https://i.imgur.com/kdPSoJa.png"}/>
                        <AboutLanguage posX={"-28px"} url={"https://i.imgur.com/VsljoRE.png"}/>
                        <AboutLanguage posY={"-3px"} url={"https://i.imgur.com/n2oipMV.png"}/>
                        <AboutLanguage posY={"-6px"} url={"https://i.imgur.com/Y6439PQ.png"}/>
                        <AboutLanguage url={"https://i.imgur.com/ylapIvL.jpg"}/>
                        <AboutLanguage url={"https://i.imgur.com/9pQPwtS.png"}/>
                        <AboutLanguage posX={"-9px"} posY={"-4px"} url={"https://i.imgur.com/nFWi6jw.png"}/>                                    
                    </AboutKnowledge>
                </AboutBackground>
            </AboutBox>
        );
    }else{
        return (
            <AboutBox  generalTheme={theme}>
                
                <AboutImg posX={"-75px"} posY={"-15px"} url={"https://i.imgur.com/BefHqap.png"}>
                    
                </AboutImg>
                <AboutBackground>
                    <AboutTitle generalTheme={theme} >Sobre Mi</AboutTitle>
                    <AboutInfo generalTheme={theme} >
                        Hola. Soy Darling De la rosa desarrollador de software y tecnico avanzado graduado del ITSC. Estoy enfocado en tecnologias relacionadas con JavaScript, Me mantengo creando proyectos y practicas personales utilizando diferentes tecnologias para mejorar mis habilidades, Quiero contribuir con mi tiempo, esfuerzo y conocimiento en el desarrollo, actualización y administración de aplicaciones web. Algunas de mis habilidades son:
                    </AboutInfo>
                    <AboutKnowledge>
                        <AboutLanguage posY={"-14px"} url={"https://i.imgur.com/o883GIL.png"}/>
                        <AboutLanguage posX={"-28px"} posY={"-14px"} url={"https://i.imgur.com/lstWdYB.png"}/>
                        <AboutLanguage url={"https://i.imgur.com/kdPSoJa.png"}/>
                        <AboutLanguage posX={"-28px"} url={"https://i.imgur.com/VsljoRE.png"}/>
                        <AboutLanguage posY={"-3px"} url={"https://i.imgur.com/n2oipMV.png"}/>
                        <AboutLanguage posY={"-6px"} url={"https://i.imgur.com/Y6439PQ.png"}/>
                        <AboutLanguage url={"https://i.imgur.com/ylapIvL.jpg"}/>
                        <AboutLanguage url={"https://i.imgur.com/9pQPwtS.png"}/>
                        <AboutLanguage posX={"-9px"} posY={"-4px"} url={"https://i.imgur.com/nFWi6jw.png"}/>                                    
                    </AboutKnowledge>
                </AboutBackground>
            </AboutBox>
        );
    }
    
}
 
export default About;