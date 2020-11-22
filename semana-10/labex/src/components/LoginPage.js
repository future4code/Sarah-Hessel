import { React } from 'react';
import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core'
import styled from 'styled-components'
import imgBackground from '../assets/background-space.jpg'
import axios from 'axios'

const LoginForm = styled.form`
  display: grid;
  margin-left: 640px;
  margin-right: 640px;
  background-color: white;
  gap: 10px;
`
const Page = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  height: 810px;
  color: black;
`

export function LoginPage() { 
  const history = useHistory();
  const [form, onChange] = useForm({ 
    email: "", 
    password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault(); // evita atualização da página

    const body = {
      email: form.email,
      password: form.password
    }
  }
  
  const logIn = () => {
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/login", body)
    
    .then((res) => {
      localStorage.setItem("token", res.data.token) 
      history.push('/trips/details')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Page>
      <Typography variant='h5' align={'center'} gutterBottom>Área Restrita</Typography>
      
      <LoginForm onSubmit={onSubmitForm}>
        <TextField 
          label={'ID'}
          variant="outlined"
          value={form.email}
          type={"email"}
          onChange={onChange}
          name={"email"}
          required 
        />
        <TextField 
          label={'Senha'}
          variant="outlined"
          value={form.password}
          type={"password"}
          onChange={onChange}
          name={"password"}
          required 
        />
        <Button variant={'contained'} color={"black"}onClick={logIn}>Login</Button>
      </LoginForm>
    </Page>
  );
}