import React, { useState } from 'react'
import styled from 'styled-components'

const ListContainer = styled.div `
display: flex;
align-items: center;
border-bottom: 1px solid grey;

:hover{
    background-color: rgba(0,0,0,0.1);
}
` 
const Avatar = styled.img`
border-radius: 50%;
margin-right: 8px;
margin-left: 8px;
width: 30px;
height: 30px;
`
export default function MatchListItem(props) {
    const profile = props.profile

    return (
        <ListContainer>
            <Avatar src={profile.photo}/>
            <p>{profile.name}</p>
        </ListContainer>
    )
}