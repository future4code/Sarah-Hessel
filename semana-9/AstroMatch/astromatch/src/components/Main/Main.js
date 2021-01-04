import React, { useState } from 'react';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import Header from '../Header/Header';
import ListMatch from '../ListMatch/ListMatch';
import styled from 'styled-components';

export const CardMatchs = styled.div`
justify-content: center;
border: 1px solid black;
border-radius: 3px;
margin-top: 10px;
margin-left: 400px;
width: 400px;
height: 600px;
`

function Main() {
  const [currentScreen, setCurrentScreen] = useState(false)

  //função para mudar de página
  const chooseCurrentSreen = (props) => {
    switch (currentScreen) {
      case 'profile':
        return <ChooseProfilePage />
      case 'list':
        return <ListMatch />
      default:
        return <ChooseProfilePage />
    }
  }
  const goToChooseProfilePage = () => {
    setCurrentScreen('profile')
  }
  const goToMatchListPage = () => {
    setCurrentScreen('list')
  }
  return (
    <CardMatchs>
      <Header
        goToChooseProfilePage={goToChooseProfilePage}
        goToMatchListPage={goToMatchListPage}
      />
      {chooseCurrentSreen()}

    </CardMatchs>
  );
}

export default Main;
