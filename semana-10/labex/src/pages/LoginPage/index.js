import axios from 'axios'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {TextField, Button, Typography} from '@material-ui/core'
import {LoginForm, Page} from './styles'

export function LoginPage() { 
  const history = useHistory();
  const [form, onChange] = useForm({ 
    email: "", 
    password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault(); // evita atualização da página
  }
  
  const logIn = () => {
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/login", body)
    
    .then((res) => {
      window.localStorage.setItem("token", res.data.token)   
      history.push('/trips')
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