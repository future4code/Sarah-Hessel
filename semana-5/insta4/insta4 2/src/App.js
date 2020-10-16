import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
    valorInputPostagem: ""

  };

  adicionaPessoa = () =>{
    const novaPostagem = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPostagem
      
    };
    const novoPessoas = [...this.state.pessoas, novaPostagem];
    this.setState({pessoas: novoPessoas})
    this.setState({ valorInputPessoa: "" });
    this.setState({ valorInputFoto: "" });
    this.setState({ valorInputPostagem: "" });
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
        <input
        value = {this.state.valorInputPessoa}
        placeholder = "Usuario"
        onChange = {this.onChangeInputPessoa}
        />
        <input
        value = {this.state.valorInputFoto}
        placeholder = "URL Foto de perfil"
        onChange = {this.onChangeInputFoto}
        />
        <input
        value = {this.state.valorInputPostagem}
        placeholder = "URL postagem"
        onChange = {this.onChangeInputPostagem}
        />
        <div>
        <button onClick={this.adicionaPessoa}> Postar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}
export default App;
