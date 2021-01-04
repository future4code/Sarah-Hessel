import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {Home, ContainerDiv, Text} from './styles'

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