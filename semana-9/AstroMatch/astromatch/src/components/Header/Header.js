import React from 'react'
import Astromatch from '../../assets/Astromatch.png'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid grey;
align-items: center;
padding: 0px 30px;
`

export default function Header(props) {
        //  <img src={Astromatch}/>
        return (
        <HeaderContainer>
                <button onClick={props.goToChooseProfilePage}>Voltar</button>
                <div>astromatch</div>
                <button onClick={props.goToMatchListPage}>Lista</button>
        </HeaderContainer>
        )
}