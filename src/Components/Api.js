import React from "react";
import axios from "axios";

const API = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
});

export default class Api extends React.Component{
    state = {
        info:[]
    };

    PegarInform = async () => {
        const resposta = await API.get();
        console.log(resposta);
        console.log(this.state.info)
        const itensApi = resposta.data.results.map((item) => {
            return{
                ...item
            };
    });

    this.setState({
        info: itensApi
    });
};

    componentDidMount(){
        this.PegarInform();
    }

    render(){
        return(
            <div>
                <h1>Rick and Morty</h1>
                {this.state.info.map((item) => (
                    <div>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.status}</p>
                    <p>{item.location.name}</p>
                    </div>
                ))}
            </div>
        );
    }
}