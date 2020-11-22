import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components'


const NavBar = styled.div`
border-bottom: 1px solid white;
padding: 6px;
`
export function Header() {
 
  return (
    <NavBar>
      <Typography variant='h4' align={'center'} >LabeX</Typography>
    </NavBar>
  );
}

 