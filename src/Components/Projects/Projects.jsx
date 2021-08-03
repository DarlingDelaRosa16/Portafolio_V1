import React, {useContext} from 'react'
import {ProjectsBox, ProjectsCard, ProjectsTitle ,ProjectsImg, ProjectsInfo, ProjectsDescription} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext';

const Projects = () => {

    const [setTheme, theme] = useContext(ThemeContext)

    return (
        <ProjectsBox generalTheme={theme[0]}>
            <ProjectsCard>
                <ProjectsImg>

                </ProjectsImg>
                <ProjectsInfo generalTheme={theme[0]}>
                    <ProjectsTitle generalTheme={theme[0]}>Hola Miop</ProjectsTitle>
                    <ProjectsDescription generalTheme={theme[0]}>Te cuento que estoy creando esto para conseguir un trabajo lo mas pronto posible, Necesito uno donde me emplee haciendo lo que estudie o si no para que espere tanto</ProjectsDescription>
                </ProjectsInfo>
            </ProjectsCard>
            <ProjectsCard>
                
                <ProjectsInfo>
                    
                </ProjectsInfo>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsImg>

                </ProjectsImg>
                <ProjectsInfo>
                   
                </ProjectsInfo>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsImg>

                </ProjectsImg>
                <ProjectsInfo>
                    
                </ProjectsInfo>
            </ProjectsCard>
        </ProjectsBox>
    );
}
 
export default Projects;