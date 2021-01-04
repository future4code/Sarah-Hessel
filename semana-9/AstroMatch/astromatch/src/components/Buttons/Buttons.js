import React, { useState } from 'react'
import { Container} from './styled'

export default function Buttons() {
    const onClickNo = () =>{
        console.log("nããoo")
    }
    const onClickYes = () =>{
        console.log("siimm")
    }
    return (
        <Container>
            <button onClick={onClickNo}>Não</button>
            <button onClick={onClickYes}>Sim</button>
        </Container>
    )
}