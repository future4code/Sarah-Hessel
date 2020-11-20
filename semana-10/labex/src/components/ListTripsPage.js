import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { TripDetailsPage} from './TripDetailsPage';

export function ListTripsPage() {
  const history = useHistory();
  
  const goToApplicationFormPage = () => {
    history.push("/application-form")
  } 

  return (
    <div>
      <button onClick={goToApplicationFormPage}>Me candidatar</button>
      <TripDetailsPage/>
    </div>
  );
}