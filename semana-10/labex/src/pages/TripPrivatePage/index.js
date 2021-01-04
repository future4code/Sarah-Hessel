import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { Button, List, ListItem, ListItemText, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {useTripsList} from '../../hooks/useTripsList'
import {Page, Container} from './styles'

export function TripPrivatePage() {
  const history = useHistory();
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
const goToCreateTrip = () => {
  history.push('/trips/create')
}
  return (
    <Page>
    <Typography variant='h6' align={'center'} >Lista de Viagens</Typography>
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
      <Button variant={'contained'} color={'primary'} onClick={goToCreateTrip}>Criar viagem</Button>
  </Page>

  );
}