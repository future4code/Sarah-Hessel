import React, { Component } from 'react';
import styled from 'styled-components'

// Estilização
const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 20px;
`
const Formulario = styled.ol`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
const Infos = styled.li`
    padding: 10px;
`

function Etapa1() {
  return (
    <div>
      <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
      <Formulario>
          <Infos><label for="nome">Qual seu nome?</label></Infos>
          <input/>
          <Infos><label for="idade">Qual sua idade?</label></Infos>
          <input/>
          <Infos><label for="email">Qual seu email?</label></Infos>
          <input/>
          <Infos><label for="escolaridade">Qual sua escolaridade?</label></Infos>
          <select>
            <option>Ensino fundamental incompleto</option>
            <option>Ensino fundamental completo</option>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
          </select>
      </Formulario>
    </div>
  );
}

export default Etapa1;