import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

//Estilização

const Formulario = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 3fr;
  margin-left: 580px;
  margin-right: 600px;
  
`
const Botao = styled.button`
  position: block;
  margin-left: 700px;
  border: 1px solid black;
  border-radius: 40px;
  width: 80px;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  
`
const Postagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Titulo = styled.h2`
  color: black;
  margin-right: 160px;
  margin-bottom: 5px;
  font-size: 21px;
`
const Texto1 = styled.p`
  font-size: 14px;
  margin-right: 6px;
`


class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'Paula',
        fotoUsuario: 'https://images.generated.photos/Kd_BoUw8sWK9_dQIo9Jr1tKQhzLt-zzYboYA9hP6hrI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50LzAx/ODc0NzYucG5n.png',
        fotoPost:'https://picsum.photos/id/1025/4951/3301',
        descricaoFoto: 'Ai está você, Bartolomeu hahaha'
      },
      {
        nomeUsuario: 'Morgana',
        fotoUsuario: 'https://images.generated.photos/m9TycrgRv8I01MK1Ay3D4vFsyLd4L8W697tsjdEwMqk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwODQxMDYuanBn.jpg',
        fotoPost:'https://picsum.photos/id/116/3504/2336',
        descricaoFoto: 'Me sentindo em DRango. #disney #kamaleãoAtor #leonardoDi #faroeste #queSede'
      },
      {
        nomeUsuario: 'Sandra',
        fotoUsuario: 'https://images.generated.photos/ZD6JRE8uGrKmICH-wDvrn-MQ3am4ZZriA4V6ezTbuXQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDI4MzQuanBn.jpg',
        fotoPost:'https://picsum.photos/id/1011/5472/3648',
        descricaoFoto: 'Encolhida nesse barco balançante admirando a paisagem *-*'
      }
    ],
    valorInputPessoa: "",
    valorInputFoto: "",
    valorInputPostagem: "",
    valorInputDescricao: ""

  };

  adicionaPessoa = () =>{
    const novaPostagem = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPostagem,
      descricaoFoto: this.state.valorInputDescricao
      
    };
    const novoPessoas = [novaPostagem, ...this.state.pessoas];
    this.setState({pessoas: novoPessoas})
    this.setState({ valorInputPessoa: "" });
    this.setState({ valorInputFoto: "" });
    this.setState({ valorInputPostagem: "" });
    this.setState({ valorInputDescricao: "" });
  };
  onChangeInputPessoa = (event) =>{
    this.setState({valorInputPessoa: event.target.value});
  };
  onChangeInputFoto = (event) =>{
    this.setState({valorInputFoto: event.target.value});
  };
  onChangeInputPostagem = (event) =>{
    this.setState({valorInputPostagem: event.target.value});
  };
  onChangeInputDescricao = (event) =>{
    this.setState({valorInputDescricao: event.target.value});
  };


  render() {
    const listaDeComponentes = this.state.pessoas.map((posts) => {
      return (
        <Post 
        nomeUsuario = {posts.nomeUsuario}
        fotoUsuario = {posts.fotoUsuario}
        fotoPost = {posts.fotoPost}
        descricaoFoto = {posts.descricaoFoto}
        />

      );
    });

    return (
      
    <div>
      <Postagem className="Postagem">
        <Titulo>Faça uma postagem</Titulo>
        <Texto1>Compartilhe momentos incríveis com os seus amigos :) </Texto1>
      </Postagem>
      <Formulario>
        <input
        value = {this.state.valorInputPessoa}
        onChange = {this.onChangeInputPessoa}
        placeholder = "Seu usuário"
        />
        <input
        value = {this.state.valorInputFoto}
        onChange = {this.onChangeInputFoto}
        placeholder = "Seu rostinho aqui (URL)"
        />
        <input
        value = {this.state.valorInputPostagem}
        onChange = {this.onChangeInputPostagem}
        placeholder = "Importe uma foto (URL)"
        />
        <input
        id="descricao"
        value = {this.state.valorInputDescricao}
        onChange = {this.onChangeInputDescricao}
        placeholder = "Descrição do seu post"
        />
      </Formulario>
      <div>
        <Botao onClick={this.adicionaPessoa}> Postar</Botao>
      </div>
        <div>{listaDeComponentes}</div>
    </div>
    );
  }
}
export default App;
