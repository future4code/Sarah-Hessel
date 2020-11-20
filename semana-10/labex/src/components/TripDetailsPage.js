import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useProtectedPage } from '../hooks/useProtectedPage';
import axios from 'axios';

export function TripDetailsPage() {
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
    <div>{trip.name}</div>

  );
}