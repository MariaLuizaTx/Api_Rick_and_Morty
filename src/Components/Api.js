import React from "react";
import axios from "axios";
import * as S from "./Style";

const API = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character"
    });

    export default class Api extends React.Component {
    state = {
        info: []
    };

    PegarInform = async () => {
        const resposta = await API.get();
        console.log(resposta);
        console.log(this.state.info);
        const itensApi = resposta.data.results.map((item) => {
        return {
            ...item
        };
        });

        this.setState({
        info: itensApi
        });
    };

    componentDidMount() {
        this.PegarInform();
    }

    render() {
        return (
        <S.Container>
            <S.GlobalStyle />
            <S.Logo
            src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
            alt="logo"
            />
            <S.ContainerDasInfos>
            {this.state.info.map((item) => (
                <S.ContainerInfo>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.status}</p>
                <p>{item.location.name}</p>
                </S.ContainerInfo>
            ))}
            </S.ContainerDasInfos>
        </S.Container>
        );
    }
}