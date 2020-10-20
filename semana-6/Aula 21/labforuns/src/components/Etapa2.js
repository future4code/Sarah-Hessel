import React from 'react';
import styled from 'styled-components'

 //Estilização

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

function Etapa2() {
  return (
    <div>
      <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
      <Formulario>
          <Infos for="">7.  Qual curso?</Infos>
          <input/>
          <Infos for="">6.  Qual a unidade de ensino?</Infos>
          <input/>
      </Formulario>
    </div>
  );
}

export default Etapa2;