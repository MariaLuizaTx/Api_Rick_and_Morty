import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
    }
    body{
        background-color: #042940;
    }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 25vw;
    
    @media (max-width: 700px) {
        width: 90vw;
    }
`;

export const ContainerDasInfos = styled.section`
    height: 280vh;
    width: 79vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 700px) {

    border: solid 3px red;
    }
`;

export const ContainerInfo = styled.section`
    height: 50vh;
    width: 17vw;
    display: flex;
    padding-top: 12px;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: solid 3px #9fc131;
    background-color: #005c53;

    :hover{
        cursor: pointer;
        transform: scale(105%) ;
        transition: ease-in-out;
    }

    img {
    width: 10vw;
    border-radius: 50%;
    border: 5px solid transparent;
    background: linear-gradient(45deg, purple, orange) border-box;
    }

    p {
    font-family: "Delicious Handrawn", cursive;
    font-weight: bold;
    font-size: 0.9em;
    color: #dbf227;
    }

    @media (max-width: 700px) {
    height: 50vh;
    width: 80vw;
    padding-top: 5px;

    img {
        width: 40vw;
    }

    p {
        font-size: 1.2em;
    }
    }
`;
