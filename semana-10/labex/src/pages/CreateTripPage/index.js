import React from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {FormContainer, Page} from './styles'


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
