import React, { useState } from 'react'
import Buttons from "../Buttons/Buttons"
import ProfileCard from "../ProfileCard/ProfileCard"
import styled from 'styled-components';

export const CardMatchs = styled.div`
display: grid; 
justify-content: center;
`

export default function ChooseProfilePage() {

    return (
        <CardMatchs>     
            <ProfileCard/>
            <Buttons/>
        </CardMatchs>
    )
}