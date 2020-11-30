import React from 'react';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components'


const NavBar = styled.div`
border-bottom: 1px solid white;
padding: 6px;

  a{
    text-decoration: none;
  }
`

export function Header() {
 
  return (
    <NavBar>
      <a href="/"
>        <Typography variant='h4' align={'center'} >LabeX</Typography>
      </a>      
    </NavBar>
  );
}

 