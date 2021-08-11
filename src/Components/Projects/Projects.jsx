import React, {useContext, useState} from 'react'
import {ProjectsBox, ProjectsCard, ProjectsTitle ,ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsLink} from "../../styledComponents"
import ThemeContext from '../../Context/themeContext';

const Projects = () => {

    const [setTheme, theme] = useContext(ThemeContext)

    if(theme[2]!=="ES"){
        return (
            <ProjectsBox generalTheme={theme[0]}>
                <ProjectsCard>
                    <ProjectsImg url={"https://i.imgur.com/BEDdBib.png"}/>
    
                    <ProjectsInfo generalTheme={theme[0]}>
                        <ProjectsTitle generalTheme={theme[0]}>My Comunity app</ProjectsTitle>
                        <ProjectsDescription generalTheme={theme[0]}>This aplication is for read news about whatever topic</ProjectsDescription>
                        <ProjectsLink generalTheme={theme[0]} column={"1/2"}>Github</ProjectsLink>
                        <ProjectsLink generalTheme={theme[0]} column={"2/3"}>Live</ProjectsLink>
                    </ProjectsInfo>
                </ProjectsCard>
                            
                <ProjectsCard>
                    <ProjectsImg url={"https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg"}/>
                    <ProjectsInfo generalTheme={theme[0]}>
                        <ProjectsTitle generalTheme={theme[0]}>My Comunity app</ProjectsTitle>
                        <ProjectsDescription generalTheme={theme[0]}>Esta aplicacion es para leer noticias de cualquier tema</ProjectsDescription>
                        <ProjectsLink generalTheme={theme[0]} column={"1/2"}>Github</ProjectsLink>
                        <ProjectsLink generalTheme={theme[0]} column={"2/3"}>Funcionando</ProjectsLink>
                    </ProjectsInfo>
                </ProjectsCard>
                
            </ProjectsBox>
        );
    }else{
        return (
            <ProjectsBox generalTheme={theme[0]}>
                <ProjectsCard>
                    <ProjectsImg url={"https://i.imgur.com/BEDdBib.png"}/>
    
                    <ProjectsInfo generalTheme={theme[0]}>
                        <ProjectsTitle generalTheme={theme[0]}>Hola Miop</ProjectsTitle>
                        <ProjectsDescription generalTheme={theme[0]}>Te cuento que estoy creando esto para conseguir un trabajo lo mas pronto posible, Necesito uno donde me emplee haciendo lo que estudie o si no para que espere tanto</ProjectsDescription>
                        <ProjectsLink generalTheme={theme[0]} column={"1/2"}>Github</ProjectsLink>
                        <ProjectsLink generalTheme={theme[0]} column={"2/3"}>Live</ProjectsLink>
                    </ProjectsInfo>
                </ProjectsCard>
                            
                <ProjectsCard>
                    <ProjectsImg url={"https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg"}/>
                    <ProjectsInfo generalTheme={theme[0]}>
                        <ProjectsTitle generalTheme={theme[0]}>Hola Miop</ProjectsTitle>
                        <ProjectsDescription generalTheme={theme[0]}>Te cuento que estoy creando esto para conseguir un trabajo lo mas pronto posible, Necesito uno donde me emplee haciendo lo que estudie o si no para que espere tanto</ProjectsDescription>
                        <ProjectsLink generalTheme={theme[0]} column={"1/2"}>Github</ProjectsLink>
                        <ProjectsLink generalTheme={theme[0]} column={"2/3"}>Live</ProjectsLink>
                    </ProjectsInfo>
                </ProjectsCard>
                
            </ProjectsBox>
        );
    }
    
}
 
export default Projects;