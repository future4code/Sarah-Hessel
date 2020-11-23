import React from 'react';
import styled from 'styled-components'
import { Typography } from '@material-ui/core';


const FooterEstilizado = styled.div`
border-bottom: 1px solid white;
padding: 6px;
`
export function Footer() {
 
  return (
    <FooterEstilizado>
      <Typography variant='h6' align={'center'} >Criado por Sarah Hessel</Typography>
    </FooterEstilizado>
  );
}
