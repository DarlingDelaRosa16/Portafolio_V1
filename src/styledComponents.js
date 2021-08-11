import styled from "styled-components"

/////////MENU////////////////////////////////////

export const MenuBox = styled.div`
    display: inline-block;
    display: grid;
    position: relative;
    grid-template-rows: 32px 48px;
    grid-template-columns: 1fr auto auto auto auto auto 100px ;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(20px);
    background-size: cover;
    background: ${(props)=> props.generalTheme !== "white" ? "linear-gradient(white, rgb(218, 220, 221))" : "linear-gradient(#ddd,gray, black)" } ;
    //background-image: url(${(props)=> props.generalTheme ? "https://cdn.pixabay.com/photo/2017/03/27/21/38/sunset-2180346__340.jpg" : "https://cdn.pixabay.com/photo/2016/03/09/15/18/stars-1246590_960_720.jpg" });
    box-shadow: ${(props)=> props.generalTheme  ? "rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px -3px 0px inset" : "rgba(200, 200, 200, 0.5) 0px 2px 4px, rgba(200, 200, 200, 0.3) 0px 7px 13px -3px, rgba(200, 200, 200, 0.3) 0px -3px 0px inset;"}
    //border-bottom: ${(props)=> props.generalTheme ? "3px solid  #ff8c00": "3px solid  #1e90ff" } ;
`;

export const MenuLogo = styled.h1`
    color: ${(props)=> props.generalTheme};
    display: inline;
    grid-row:2/3;
    margin-left: 100px;
    padding-left: 10px; 
    font-size: 21px;
    height: 30px;
    margin-top: 10px;   
    border: none;
`;

export const MenuButton = styled.button`
    color: ${(props)=> props.generalTheme};
    width: auto;
    font-size: 15px;
    margin-top: 10px;
    grid-row:2/3;
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
    grid-template-columns: 100px 1fr 1fr 100px;
    grid-template-rows:  70px 1fr 1fr;
    min-height: 599px;
    background-image: url(${(props)=> props.generalTheme ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
`;

export const AboutImg = styled.div`
    width: 99%;
    display: grid;
    grid-template-rows: 1fr 70px;
    grid-template-columns: 1fr 150px;
    grid-column: 2/3;
    grid-row: 1/4;
    border-radius: 5px;
    margin: 10px 0px 10px 0px;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
`;
export const AboutResumeButtom = styled.button`
    width: 130px;
    height: 50px;
    background: none;
    color: white;
    grid-column: 2/3;
    grid-row: 2/3;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &:hover{
        transform: scale(1.05, 1.05); 
        cursor: pointer ;
    }
`;

export const AboutInfo = styled.div`
    width: 80%;
    grid-column: 3/4;
    grid-row: 2/3;
    text-align:justify;
    margin-inline: 10%;
    margin-top:10px;
    color:${(props)=> props.generalTheme ? "black": "white" };
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    
`;

export const AboutBackground = styled.div`
    grid-column: 3/4;
    margin:10px;
    grid-row: 1/4;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .25);
    backdrop-filter: blur(20px);
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
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr) );
    grid-template-rows:repeat(auto-fill, minmax(90px, 1fr) ) ;
`;

export const AboutLanguage = styled.div`
    width: 75px;
    height: 75px;    
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-image:url(${(props)=> props.url}); 
    background-position-x: ${(props)=> props.posX}; 
    background-position-y: ${(props)=> props.posY}; 
    background-size: cover;
    &:hover{
        transform: scale(1.05, 1.05);
    }
`;



////////Projects////////////////////////////////

export const ProjectsBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr) );
    grid-template-rows: auto;
    min-height: 599px;
    background-image: url(${(props)=> props.generalTheme ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: white;
    border-radius: 5px;
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
    border-radius: 5px;
    grid-column:1/5 ;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
`;

export const ProjectsInfo = styled.p`
    grid-column:5/8 ;
    display: grid;
    grid-template-rows: auto auto 40px;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    margin: 2px 2px 7px 5px;
    color: ${(props)=> props.generalTheme ? "white": "black" };
    background:${(props)=> props.generalTheme ? "linear-gradient(#ddd,rgb(218, 220, 221), #ffffff)" : "linear-gradient(#ddd,gray,grey, #000)" } ;
   
`;

export const ProjectsTitle = styled.h1`
    grid-row: 1/2;
    margin: 5px;
    grid-column: 1/3;
    font-size: 20px;
    text-align:center;
    color: ${(props)=> props.generalTheme ? "black": "white" };
`;

export const ProjectsDescription = styled.p`
    grid-row: 2/3;
    margin-top: 0;
    grid-column: 1/3;
    font-size: 15px;
    text-align:center;
    color: ${(props)=> props.generalTheme ? "black": "white" };
`;

export const ProjectsLink = styled.button`
    color: ${(props)=> props.generalTheme ? "black" : "black" };
    grid-column: ${(props)=> props.column};
    margin: 5px;
    grid-row: 3/4;
    &:hover{
        cursor: pointer;
    }
`;

////////CONTACT///////////////////////////////

export const ContactBox = styled.div`
    width: 100%;
    display: grid;
    min-height: 599px;
    background-image: url(${(props)=> props.generalTheme ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: auto 1fr ;
    width: 80%;
    margin-top: 60px;
    margin-inline:10%;
    height: 400px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(20px);
`;

export const ContactTitle = styled(AboutTitle)`
    grid-column: 1/3;
`;

export const ContactTextBox = styled.input`
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    margin: 2% 5% 5% 5%;
    font-size:20px;
    width: 90%;
    background:rgb(218, 220, 221);
    padding: 5px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    margin-left: 5%;
    color: ${(props)=> props.generalTheme ? "black": "white" };
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
`;

export const ContactTextArea = styled.textarea`
    grid-column: 2/3;
    font-size:20px;
    grid-row: 2/5;
    padding: 5px;
    margin: 2% 5% 5% 5%;
    width: 90%;
    border-radius: 5px;
    background:rgb(218, 220, 221);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
`;

export const ContactButton = styled(AboutResumeButtom)`    
    color: ${(props)=> props.generalTheme ? "black": "white" };
    margin-left: 5%;
    grid-column: 2/3;
    grid-row: 5/6;
    height: 40px;
`;
