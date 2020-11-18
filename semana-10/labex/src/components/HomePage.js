import React from 'react';
import { useHistory } from 'react-router-dom';

export function HomePage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login")
  }
  const goToListTripsPage = () => {
    history.push("/trips/list")
  }
  return (
    <div>
      <p>Sou o HomePage</p>
      <button onClick={goToLogin}>Login</button>
      <p>Faça conosco viagens espaciais extraordinárias</p>
      <button onClick={goToListTripsPage}>Ver viagens</button>
    </div>
  );
}