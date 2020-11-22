import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import imgBackground from '../assets/background.jpg'
import {Button} from '@material-ui/core'


const Home = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  height: 810px;
`
const ContainerDiv = styled.div`
  margin-top: 150px;
  font-size: 14px;
`
const Text = styled.h2`
 color: white;
`

export function HomePage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login")
  }
  const goToListTripsPage = () => {
    history.push("/trips/list")
  }
  return (
    <Home>
      <Button variant={"contained"} color={'primary'} onClick={goToLogin}>Login</Button>
      <ContainerDiv>
        <Text>Faça conosco viagens espaciais extraordinárias!</Text>
        <Button variant={"contained"} color={'black'}  onClick={goToListTripsPage}>Ver viagens</Button>
      </ContainerDiv>
    </Home>
  );
}