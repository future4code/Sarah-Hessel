import React from 'react';
import styled from 'styled-components';

// Estilização
const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
`
const Textinho = styled.p`
  display: flex;
  justify-content: center;
`


function Etapa4() {
  return (
    <div>
      <Titulo>O FORMULÁRIO ACABOU</Titulo>
      <Textinho>Muito obrigado por participar! Entraremos em contato!</Textinho>
      
    </div>
  );
}

export default Etapa4;