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
  border-radius: 10px;
  gap: 10px;
`
const Page = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  padding-top: 50px;
  height: 810px;
  color: white;
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
      window.localStorage.setItem("token", res.data.token)   
      history.push('/trips/details')
    })
    .catch((error) => {
      window.alert(" ID ou senha incorretos. Será que temos um invasor por aqui?")
    })
  }

  return (
    <Page>
      <Typography variant='h4' align={'center'} gutterBottom>Área Restrita</Typography>
      
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
        <Button variant={'contained'} color={"primary"}onClick={logIn}>Login</Button>
      </LoginForm>
    </Page>
  );
}