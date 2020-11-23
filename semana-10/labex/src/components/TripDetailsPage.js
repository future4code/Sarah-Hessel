import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { Button, List, ListItem, ListItemText, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import imgBackground from '../assets/background-space.jpg'
import {useTripsList} from '../hooks/useTripsList'

const Page = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  height: 810px;
`

const Container = styled.div`
  background-color: white;
  margin-left: 100px;
  margin-right: 100px;
`
export function TripDetailsPage() {
  const trips = useTripsList()
  const [trip, setTrip] = useState({})

  useProtectedPage();

  useEffect(() => {
    getTripDetail()
  }, [])    

const getTripDetail = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/trip/NoIFVcOiSgTKTIPVZwXS",
  {
    headers:{
      auth: localStorage.getItem("token")
    }
  }).then((response) => {
    setTrip(response.data.trip)
  }).catch((erro) => {
    console.log(erro)
  })
}
  return (
    <Page>
    <Typography variant='h6' align={'center'} >Detalhes das viagens</Typography>
    <Container>
    <List>
      {trips.map((trip) => {
        return <Link to={`/trips/details/${trip.id}`}>
          <ListItem button>
            <ListItemText primary={trip.name} />
          </ListItem>
        </Link>
      })}
    </List>
    </Container>
    <Link to={'/trips/create'}>
      <Button variant={'contained'} color={'primary'}>Criar viagem</Button>
    </Link>
  </Page>

  );
}