import React from 'react';
import styled from 'styled-components'
import AssignmentIndRounded from '@material-ui/core/'

const NavBar = styled.div`
border: 1px solid black;
`
export function Header() {
  return (
    <NavBar>
      <p>LabeX</p>
    </NavBar>
  );
}

 