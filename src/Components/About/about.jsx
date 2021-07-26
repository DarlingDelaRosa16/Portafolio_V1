import React, {useContext} from 'react'
import { AboutBox, AboutImg, AboutInfo, AboutKnowledge } from '../../styledComponents';
import ThemeContext from '../../Context/themeContext'

const About = () => {

    const [setTheme, theme] = useContext(ThemeContext) 

    return (
        <AboutBox  Gtheme={theme[0]}>
            <AboutImg></AboutImg>
            <AboutInfo>John Davison Rockefeller (Richford, Nueva York, 8 de julio de 1839-Ormond Beach, Florida, 23 de mayo de 1937)2​ fue un empresario, inversor e industrial estadounidense, que trabajó en la industria petrolera, llegando al punto de monopolizarla. Formó parte del grupo de empresarios conocido como «barones ladrones» de la Edad Dorada de la industria en los Estados Unidos, cuyo éxito le llevó a ser el hombre más rico de su época.</AboutInfo>
            <AboutKnowledge></AboutKnowledge>
        </AboutBox>
    );
}
 
export default About;