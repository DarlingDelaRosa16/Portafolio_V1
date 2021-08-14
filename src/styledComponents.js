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
    box-shadow: ${(props)=> props.generalTheme !== "white" ? "rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px -3px 0px inset" : "rgba(200, 200, 200, 0.5) 0px 2px 4px, rgba(200, 200, 200, 0.3) 0px 7px 13px -3px, rgba(200, 200, 200, 0.3) 0px -3px 0px inset;"};
    @media screen and (max-width: 1220px){
        grid-template-columns: 1fr auto auto auto auto auto 50px ;
    }
    @media (max-width: 920px){
        grid-template-columns: 1fr auto auto auto auto auto 20px ;
    }  
    @media (max-width: 880px){
        grid-template-columns: 1fr auto auto auto auto auto 5px ;
    }  

`;

export const MenuButtonDropDown = styled.button`
    display:none;
    color: ${(props)=> props.generalTheme};
    width: auto;
    margin-right:10px;
    margin-left: 10px;
    font-size: 20px;
    grid-row:2/3;
    border: none;
    background: none;
    &:hover{
        cursor: pointer ;
    }
    @media (max-width: 760px){
        display: block;
    }
    
`;

export const MenuBoxDropDown = styled.div`
    visibility: ${(props)=> props.see ? "visible" : "hidden"};
    width: 300px;
    position: absolute;
    display: grid;
    grid-template-rows: auto auto auto;
    z-index: 1;
    right: -1px;
    margin-top: -3px;
    border: 1px solid black;
    background: ${(props)=> props.generalTheme !== "white" ? "linear-gradient(white, rgb(218, 220, 221))" : "linear-gradient(gray, black)" } ;
    @media (min-width: 760px){
        display: none;
    }
`;

export const MenuLogo = styled.h1`
    color: ${(props)=> props.generalTheme};
    display: inline;
    grid-row:2/3;
    margin-left: 100px; 
    font-size: 21px;
    height: 30px;
    margin-top: 10px;   
    border: none;
    @media (max-width: 1220px){
        margin-left: 50px;
    }
    @media (max-width: 920px){
        margin-left: 20px;
    }
    @media (max-width: 388px){
        grid-row:1/3;
    }
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
    @media (max-width: 760px){
        display: ${(props)=> props.display};
        grid-row: 4/5;
        margin-bottom: 10px;
    }
    
`;

////////ABOUTME//////////////////////////////////

export const AboutBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr 1fr 100px;
    grid-template-rows:  70px 1fr 1fr;
    min-height: 599px;
    background-image: url(${(props)=> props.generalTheme !== "white" ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
    @media (max-width: 1220px){
        grid-template-columns: 50px 1fr 1fr 50px;
    }
    @media (max-width: 920px){
        grid-template-columns: 20px 1fr 1fr 20px;
    }
    @media (max-width: 880px){
        grid-template-columns: 5px 1fr 1fr 5px;
    }
    
`;

export const AboutImg = styled.div`
    width: 99%;
    display: grid;
    background-position-x: ${(props)=> props.posX}; 
    background-position-y: ${(props)=> props.posY};
    grid-template-rows: 1fr 50px 10px;
    grid-template-columns: 1fr 150px;
    grid-column: 2/3;
    grid-row: 1/4;
    border-radius: 5px;
    margin: 10px 0px 10px 0px;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
    @media (max-width: 760px){
        width: 96%;
        margin-left:2%;
        grid-column: 2/4;
        grid-row: 1/3;
    }
`
export const AboutResumeButtom = styled.a`
    width: 130px;
    font-size: 20px;
    text-align: center;
    padding-top: 5px;
    text-decoration: none;
    color: black;
    background: linear-gradient(white, gray);
    grid-column: 2/3;
    grid-row: 2/3;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &:hover{
        transform: scale(1.05, 1.05); 
        cursor: pointer;
    }
`;

export const AboutInfo = styled.div`
    width: 80%;
    grid-column: 3/4;
    grid-row: 2/3;
    text-align:justify;
    margin-inline: 10%;
    margin-top:10px;
    color:${(props)=> props.generalTheme };
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    @media (max-width: 426px){
        width: 96%;
        margin-inline: 2%;
    }
`;

export const AboutBackground = styled.div`
    grid-column: 3/4;
    padding-bottom: 10px;
    margin:10px;
    grid-row: 1/4;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .25);
    backdrop-filter: blur(20px);
    @media (max-width: 760px){
        width: 96%;
        margin-left:2%;
        grid-column: 2/4;
        grid-row: 3/5;
    }
    
    
`;
export const AboutTitle = styled.h1`
    font-size: 25px;
    width:80%;
    margin-inline:10%;
    grid-column: 2/3;
    grid-row:1/2;
    text-align:center;
    color:${(props)=> props.generalTheme };
`;
export const AboutKnowledge = styled(AboutInfo)`
    grid-row: 3/4;
    display: grid;
    width: 80%;
    margin-inline: 10%;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr) );
    grid-template-rows:repeat(auto-fill, minmax(90px, 1fr) ) ;
    @media (max-width: 426px){
        width: 96%;
        margin-inline: 2%;
    }
`;

export const AboutLanguage = styled.div`
    width: 75px;
    height: 75px;    
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-image:url(${(props)=> props.url}); 
    background-position-x: ${(props)=> props.posX}; 
    background-position-y: ${(props)=> props.posY}; 
    background-size: cover;
    &:hover{
        transform: scale(1.05, 1.05);
    }
    @media (max-width: 426px){
       margin-left: 7.5px;
    }
`;

////////Projects////////////////////////////////

export const ProjectsBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr) );
    grid-template-rows: auto;
    min-height: 599px;
    background-image: url(${(props)=> props.generalTheme !== "white" ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
    @media (max-width: 399px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
    }
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width:95%;
    height: 285px;
    margin: 10px;
    &:hover{
        transform: scale(1.01, 1.01) 
    }
    @media (max-width: 426px){
        grid-template-rows: 1fr 1fr;
    }
`;

export const ProjectsImg = styled.div`
    width: 100%;
    margin:2px 0px 7px 2px;
    border-radius: 5px;
    grid-column:1/5 ;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
    @media (max-width: 426px){
        margin:0;
        border-radius: 5px 5px 0 0;
        grid-column:1/8 ;
        grid-row:1/2;
    }
`;

export const ProjectsInfo = styled.p`
    grid-column:5/8 ;
    display: grid;
    grid-template-rows: auto auto 40px;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    margin: 2px 2px 7px 5px;
    color: ${(props)=> props.generalTheme};
    background:${(props)=> props.generalTheme !== "white" ? "linear-gradient(#ddd,rgb(218, 220, 221), #ffffff)" : "linear-gradient(gray, #000)" } ;
    @media (max-width: 426px){
        margin:0;
        border-radius: 0 0 5px 5px ;
        grid-column:1/8 ;
        grid-row:2/3;
    }
`;

export const ProjectsTitle = styled.h1`
    grid-row: 1/2;
    margin: 5px;
    grid-column: 1/3;
    font-size: 20px;
    text-align:center;
    color: ${(props)=> props.generalTheme};
`;

export const ProjectsDescription = styled.p`
    grid-row: 2/3;
    margin-top: 0;
    grid-column: 1/3;
    font-size: 15px;
    text-align:center;
    color: ${(props)=> props.generalTheme};
`;

export const ProjectsLink = styled.button`
    color:  "black";
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
    background-image: url(${(props)=> props.generalTheme !== "white" ? "https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg" : "https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_960_720.jpg" }); 
    background-size: cover;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: auto 1fr ;
    width: 80%;
    margin-top: 40px;
    margin-inline:10%;
    height: 400px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(20px);
    @media screen and (max-width: 1220px){
        width: 90%;
        margin-inline:5%;
    }
    @media (max-width: 920px){
        width: 96%;
        margin-inline:2%;
    }  
    @media (max-width: 690px){
        grid-template-rows: 50px auto auto ;
        min-height: 520px;
    }   
`;
export const ContactContentSocial = styled.div`
    display: grid;
    grid-column:1/2;
    grid-row :5/6;
    width: 50%;
    height: 100%;  
    margin-inline: 5%; 
    grid-template-columns: repeat(auto-fill, minmax(55px, 1fr) );
    @media (max-width: 690px){
        grid-column:2/3;
        grid-row: 8/10;
        width: 100%;
    } 
    @media (max-width: 380px){
        grid-column:1/3;
        grid-row: 10/11;
        width: 100%;        
        margin-top: 10px;
    } 
`;
export const ContactSocialMedias = styled.a`
    width: 45px;
    height: 45px;   
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

export const ContactTitle = styled(AboutTitle)`
    grid-column: 1/3;
    @media (max-width: 690px){
        margin: 0;
        width: 100%;
    } 
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
    @media (max-width: 690px){
        grid-column:1/3;
        margin: 0% 2% 2% 2%;
    }
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    margin-left: 5%;
    color: ${(props)=> props.generalTheme };
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    
    @media (max-width: 690px){
        grid-column:${(props)=> props.gridC} ;
        grid-row:${(props)=> props.gridR} ;
    }
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
    @media (max-width: 690px){
        grid-column:1/3;
        grid-row: 7/8;
        margin: 0% 2% 2% 2%;
        height: 100px;
    }
    
`;

export const ContactButton = styled(AboutResumeButtom)`    
    color: ${(props)=> props.generalTheme };
    margin-left: 5%;
    background: none    ;
    grid-column: 2/3;
    grid-row: 5/6;
    height: 40px;
    @media (max-width: 690px){
        grid-column:1/2;
        grid-row: 8/10;
    }
    @media (max-width: 380px){
        grid-column:1/2;
        margin-top: 10px;
        grid-row: 8/10;
        width: 96%;
    } 
`;
