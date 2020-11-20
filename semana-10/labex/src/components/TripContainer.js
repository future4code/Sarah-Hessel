import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
border: 1px solid black;
margin-left: 600px;
margin-right: 600px;
padding: 10px;
`
const Photo = styled.img`
display: block;
width: 100%;
`
// o props.id no link do picsum, faz surgir imagens diferentes para cada id.
export function TripContainer(props) {
  return (
      <Container>
        <Photo src={`https://picsum.photos/500/400/?a=${props.id}`} />   
        <h2>{props.name}</h2>
        <p>Data: {props.date}</p>
        <p>Duração: {props.durationInDays} dias</p>
        <p>{props.planet}</p>
        <p>{props.description}</p>
        <p></p>
      </Container>
  );
}