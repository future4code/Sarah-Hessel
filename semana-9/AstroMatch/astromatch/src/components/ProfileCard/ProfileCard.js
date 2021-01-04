import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContainer } from './styled'
import { ProfileInfo } from './styled'
import { Photo } from './styled'


const personData = {
    photo: "Foto de alguém",
    name: "Nome de alguém",
    age: "Idade de alguém",
    bio: "Descrição de alguém"
}
export default function ProfileCard() {
    const [person, setPerson] = useState(personData)

    useEffect(() => {
        profileToChoose()
    }, [])

    // função para pegar perfis
    const profileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:sarah/person")
            .then(response => {
                setPerson(response.data.profile)
            })
            .catch(error => {
                console.log("Deu erro -> ", error)
            })
    }

    return (
        <CardContainer>
            <Photo src={person.photo} />
            <ProfileInfo>
                <p>{person.name}, {person.age}</p>
                <p>{person.bio}</p>
            </ProfileInfo>
        </CardContainer>
    )
}