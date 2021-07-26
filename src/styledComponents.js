import styled from "styled-components"

/////////MENU////////////////////////////////////

export const MenuBox = styled.div`
    display: inline-block;
    width: 100%;
    padding-top:20px;
    height: 35px;
    background-color: ${(props)=> props.Gtheme ? "#eee8aa": "black" } ;
    border-bottom: ${(props)=> props.Gtheme ? "3px solid  #ff8c00": "3px solid  #1e90ff" } ;
`;

export const MenuLogo = styled.h1`
    color: ${(props)=> props.Gtheme ? "black": "white" };
    display: inline;
    padding-left: 10px; 
    font-size: 21px;
    height: 30px;
    margin-top: 10px;   
    border: none;
`;

export const MenuButton = styled.button`
    color: ${(props)=> props.Gtheme ? "black": "white" };
    width: auto;
    border: none;
    background: none;
    margin-left: 2px;
    height: 20px;
    &:hover{
        cursor: pointer ;
    }
`;

////////ABOUTME//////////////////////////////////

export const AboutBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 5px;
    height: 592px;
    background-color:${(props)=> props.Gtheme ? "#F0E68C": "gray" } ;
`;

export const AboutImg = styled.div`
    width: 93%;
    margin: 10px;
    grid-column: 1/2;
    grid-row: 1/3;
    background-color: blue;
    border-radius: 10px;
`;

export const AboutInfo = styled.div`
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/2;
    color:${(props)=> props.Gtheme ? "white": "black" };
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
`;

export const AboutKnowledge = styled(AboutInfo)`
    grid-row: 2/3;
`;
////////Projects////////////////////////////////

export const ProjectsBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 599px;
    background-color:${(props)=> props.Gtheme ? "#F0E68C": "gray" } ;   
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-rows: 250px 240px;
    width:270px;
    height: 550px;
    margin: 10px;
    border: solid black 2px;
    border-radius: 10px;
`;

export const ProjectsImg = styled.div`
    width: 100%;
    grid-row:1/2 ;
    border-radius: 10px 10px 0px 0px;
    background: green;
`;

export const ProjectsInfo = styled.p`
    color: ${(props)=> props.Gtheme ? "white": "black" };
    font-size: 22px;
    background: yellow;
`;