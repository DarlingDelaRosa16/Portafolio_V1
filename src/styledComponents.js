import styled from "styled-components"

/////////MENU////////////////////////////////////

export const MenuBox = styled.div`
    display: inline-block;
    width: 100%;
    padding-top:20px;
    height: 35px;
    background-color: ${(props)=> props.generalTheme ? "#eee8aa": "black" } ;
    border-bottom: ${(props)=> props.generalTheme ? "3px solid  #ff8c00": "3px solid  #1e90ff" } ;
`;

export const MenuLogo = styled.h1`
    color: ${(props)=> props.generalTheme ? "black": "white" };
    display: inline;
    padding-left: 10px; 
    font-size: 21px;
    height: 30px;
    margin-top: 10px;   
    border: none;
`;

export const MenuButton = styled.button`
    color: ${(props)=> props.generalTheme ? "black": "white" };
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
    grid-template-rows:  70px 1fr 1fr;
    min-height: 599px;
    background-color:${(props)=> props.generalTheme ? "#F0E68C": "gray" } ;
`;

export const AboutImg = styled.div`
    width: 99%;
    grid-column: 1/2;
    grid-row: 1/4;
    margin: 10px 0px 10px 1%;
    background-image: url("https://res.cloudinary.com/practicaldev/image/fetch/s--BuPz-p40--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nphrgz8yfnjylrwfr0yl.png");
    
`;

export const AboutInfo = styled.div`
    width: 80%;
    grid-column: 2/3;
    grid-row: 2/3;
    text-align:justify;
    margin-inline: 10%;
    margin-top:10px;
    color:${(props)=> props.generalTheme ? "black": "white" };
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
`;

export const AboutTitle = styled.h1`
    font-size: 25px;
    width:80%;
    margin-inline:10%;
    grid-column: 2/3;
    grid-row:1/2;
    text-align:center;
    color:${(props)=> props.generalTheme ? "black": "white" };
`;
export const AboutKnowledge = styled(AboutInfo)`
    grid-row: 3/4;
    display: grid;
    width: 80%;
    margin-inline: 10%;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr) );
    grid-template-rows:repeat(auto-fill, minmax(90px, 1fr) ) ;
`;

export const AboutLanguage = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: red ;
    &:hover{
        transform: scale(1.05, 1.05) 
    }
`;
////////Projects////////////////////////////////

export const ProjectsBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr) );
    grid-template-rows: auto;
    min-height: 599px;
    background-color:${(props)=> props.generalTheme ? "#F0E68C": "gray" } ;   
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: white;
    border-radius: 5px 5px 5px 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width:95%;
    height: 280px;
    margin: 10px;
    &:hover{
        transform: scale(1.01, 1.01) 
    }
`;

export const ProjectsImg = styled.div`
    width: 100%;
    margin:2px 0px 7px 2px;
    border-radius: 5px 5px 5px 5px;
    grid-column:1/5 ;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
`;

export const ProjectsInfo = styled.p`
    grid-column:5/8 ;
    border-radius: 5px 5px 5px 5px;
    margin: 2px 2px 7px 5px;
    color: ${(props)=> props.generalTheme ? "white": "black" };
    background:${(props)=> props.generalTheme ? "linear-gradient(#FF8C00,orange, #ffffff)" : "linear-gradient(gray,grey, #000)" } ;
   
`;

export const ProjectsTitle = styled.h1`
    font-size: 20px;
    text-align:center;
    color: ${(props)=> props.generalTheme ? "black": "white" };
`;

export const ProjectsDescription = styled.p`
    font-size: 15px;
    text-align:center;
    color: ${(props)=> props.generalTheme ? "black": "white" };
    
`;

////////CONTACT///////////////////////////////

export const ContactBox = styled.div`
    width: 100%;
    min-height: 599px;
    background-color: ${(props)=> props.generalTheme ? "#F0E68C": "gray" }; 
`;