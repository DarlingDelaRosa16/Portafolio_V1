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
`;

////////GENERAL//////////////////////////////////
