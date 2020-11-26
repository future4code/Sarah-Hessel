import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import {Button} from '@material-ui/core'
import { useRequestData } from '../../hooks/useRequestData';
import {TripContainer} from '../../components/TripContainer'
import {Page, Container} from './styles'

export function ListTripsPage() {
  const history = useHistory();
  
  const goToApplicationFormPage = () => {
    history.push("/application-form")
  } 

  const data = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/trips', undefined)
 
  return (
    <Page>
      <Typography variant='h4' align={'center'}>Viagens Disponíveis</Typography>
      <Container>
        {data && data.trips.map((item, i) => {
          return <TripContainer id={i} name={item.name} durationInDays={item.durationInDays} planet={item.planet} date={item.date} description={item.description}/>
        })}
      </Container>
      <Button variant={"contained"} color={'primary'} onClick={goToApplicationFormPage}>Me candidatar</Button>
    </Page>
  );
}