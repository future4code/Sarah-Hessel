import React from 'react';
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
 const Infos = styled.label`
  padding: 10px;
 `

function Etapa3() {
  return (
    <div>
      <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
      <Formulario>
          <Infos for="">7.  Por que você não terminou um curso de graduação?</Infos>
          <input/>
          <Infos for="">8.  Você fez algum curso complementar?</Infos>
          <select>
            <option>Nenhum</option>
            <option>Curso técnico</option>
            <option>Curso de inglês</option>
          </select>
      </Formulario>
      
    </div>
  );
}

export default Etapa3;