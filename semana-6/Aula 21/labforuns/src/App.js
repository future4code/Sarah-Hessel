import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from'./components/Etapa1';
import Etapa2 from'./components/Etapa2';
import Etapa3 from'./components/Etapa3';
import Etapa4 from'./components/Final';
import styled from 'styled-components'

// Estilização

const Botao = styled.button`
  position: block;
  margin-left: 737px;
`


class App extends React.Component {  // Componente de classe 
  state = {
    etapa: 1,
  }
  onClickProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    });
  };
   renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Etapa4/>
  }
};
  render(){
    return (
      <div>
        {this.renderizaEtapa()}
        <Botao onClick={this.onClickProximaEtapa}>Proxima etapa</Botao>
      </div>
    );
  }
}
export default App;
