import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useRequestData } from './useRequestData';
import {TripContainer} from './TripContainer'


export function ListTripsPage() {
  const history = useHistory();
  
  const goToApplicationFormPage = () => {
    history.push("/application-form")
  } 

  const data = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/trips', undefined)
 
  return (
    <div>
      {data && data.trips.map((item, i) => {
        return <TripContainer id={i} name={item.name} durationInDays={item.durationInDays} planet={item.planet} date={item.date} description={item.description}/>
      })}
      <button onClick={goToApplicationFormPage}>Me candidatar</button>
    </div>
  );
}