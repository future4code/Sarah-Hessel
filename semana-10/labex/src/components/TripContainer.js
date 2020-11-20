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

export function TripContainer(props) {
  return (
      <Container>
        <Photo src={`https://picsum.photos/500/400/?a=`} />
        <h2></h2>
        <p></p>
        <p></p>
        <p></p>
      </Container>
  );
}