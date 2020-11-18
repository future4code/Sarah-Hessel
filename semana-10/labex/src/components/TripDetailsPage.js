import React from 'react';
import { useHistory } from 'react-router-dom';

export function TripDetailsPage() {
  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/application-form")
  } 
  return (
    <div>
    <p>TripDetailsPage</p>
    <button onClick={goToApplicationFormPage}>Me candidatar</button>
    </div>
    
  );
}