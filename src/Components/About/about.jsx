import React, {useContext} from 'react'
import { AboutBox, AboutImg, AboutInfo, AboutKnowledge, AboutLanguage, AboutTooltip, AboutTitle, AboutBackground, AboutResumeButtom } from '../../styledComponents';
import ThemeContext from '../../Context/themeContext'

const About = () => {

    const [setTheme, theme] = useContext(ThemeContext) 

    return (
        <AboutBox  generalTheme={theme[0]}>
            
            <AboutImg url={"https://i.imgur.com/ybuE1m1.jpg"}>
                <AboutResumeButtom>Resume</AboutResumeButtom>
            </AboutImg>
            <AboutBackground>
                <AboutTitle generalTheme={theme[0]} >About Me</AboutTitle>
                <AboutInfo generalTheme={theme[0]} >
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
}
 
export default About;