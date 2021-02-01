import {React, useEffect} from 'react';
import { TextField, Button, Typography} from '@material-ui/core'
import { Form, SignUpContainer, Page } from './styles'
import { useForm } from '../../hooks/useForm'
import { user } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#26a69a'
        },
    },
});

function SignUpPage() {
    const history = useHistory()
    const { form, onChange } = useForm({ email: '', password: '', username: '' })

    useEffect(() => {
        const authentication = useProtectPage   // autenticação
     }, [useProtectPage])
  
    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)

    }
    const handleSubmission = (event) => {
        event.preventDefault()
        user(form, "/signup", history)
    }

    return (
        <Page>
            <ThemeProvider theme={theme}>
            <SignUpContainer>
                <br/>
                <Typography variant="h5">Cadastrar-se</Typography>
                <Form onSubmit={handleSubmission}>
                    <TextField
                        name="username"
                        placeholder="Nome de usuário"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        name="email"
                        placeholder="Email"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Senha"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Cadastrar
                </Button>
                </Form>
            </SignUpContainer>
            </ThemeProvider>
        </Page>
    )
}

export default SignUpPage;