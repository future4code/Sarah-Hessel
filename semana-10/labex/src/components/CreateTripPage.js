import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useForm } from '../hooks/useForm';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import imgBackground from '../assets/background-space.jpg'
import Typography from '@material-ui/core/Typography';
import { useProtectedPage } from '../hooks/useProtectedPage';
import styled from "styled-components";

 const FormContainer = styled.form`
  background-color: white;
  border-radius: 10px;
  display: grid;
  gap: 16px;
  margin-left: 400px;
  margin-right: 400px;
`
const Page = styled.form`
  color: white;
  background-image: url(${imgBackground});
  padding-bottom: 400px;
  padding-top: 50px;
`

export const CreateTripPage = () => {
  const history = useHistory()

  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  useProtectedPage()
  
  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      description: form.description,
      durationInDays: form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      history.push('/trips/list')
    })
  }
  return <Page>
    <Typography variant="h4" align={'center'} gutterBottom>Criar Viagem</Typography>
    <FormContainer onSubmit={onSubmitForm}>
      <TextField
        label={'Nome'} 
        onChange={onChangeInput}
        name={'name'}
        value={form['name']}
      />
      <TextField
        label={'Planeta'}
        onChange={onChangeInput}
        name={'planet'}
        value={form['planet']}
      />
      <TextField
        label={'Descrição'}
        onChange={onChangeInput}
        name={'description'}
        value={form['description']}
      />
      <TextField
        label={'Duração em dias'} type={'number'}
        onChange={onChangeInput}
        name={'duration'}
        value={form['duration']}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Criar</Button>
    </FormContainer>
  </Page>
}
