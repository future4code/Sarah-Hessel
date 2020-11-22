import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
display: grid;
border: 2px solid white;
margin-top: 90px;
margin-bottom: 50px;
margin-left: 50px;
background-color: white;
color: black;

`
const Photo = styled.img`
display: block;
width: 100%;
`
// o props.id no link do picsum, faz surgir imagens diferentes para cada id retornada.
export function TripContainer(props) {
  return (
      <Container>
        <Photo src={`https://picsum.photos/500/400/?a=${props.id}`} />   
        <h3>{props.name}</h3>
        <p>Data: {props.date}</p>
        <p>Duração: {props.durationInDays} dias</p>
        <p>{props.planet}</p>
        <p>{props.description}</p>
        <p></p>
      </Container>
  );
}