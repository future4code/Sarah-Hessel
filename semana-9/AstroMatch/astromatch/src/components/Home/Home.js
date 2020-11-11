import React, { useState } from 'react'
import Buttons from "../Buttons/Buttons"
import UserInfo from "../UserInfo/UserInfo"
import ListMatch from "../ListMatch/ListMatch"


export default function Home() {
    
    return (
        <div>
            <p>Astromatch</p>
            <ListMatch/>
            <hr/>      
            <UserInfo/>
            <Buttons/>
        </div>
       
        
    )
}