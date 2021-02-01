import {React, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Button, Typography, Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { goToSignUp } from '../../router/coodinator'
import { useForm } from '../../hooks/useForm'
import { user } from '../../services/user'
import { Form, LoginPageContainer, Page } from './styles'
import styled from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useProtectPage} from '../../hooks/useProtectPage'

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#26a69a'
        },
    },
});

export const AvatarContainer = styled(Avatar)`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`

function LoginPage() {
    useProtectPage()
    const history = useHistory();
    const { form, onChange } = useForm({ email:"", password:"" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)

    }
    const handleSubmission = (event) => {
        event.preventDefault()     // previne o comportamento padrão do form de recarregar a pagina
        user(form, "/login", history)
        /* 
        (form) mesma coisa que:
         const body = {
            email: form.email,
            password: form.password
         }
        */
    }
    return (
        <Page>
            <ThemeProvider theme={theme}>
        <LoginPageContainer>
            <AvatarContainer >
                <LockOutlinedIcon />
            </AvatarContainer>
            <Typography variant="h5"> Entrar </Typography>
            <Form onSubmit={handleSubmission}>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Senha"
                    name="password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Entrar
                </Button>
            </Form>
            <Button color="secondary" variant="outlined" onClick={() => goToSignUp(history)} > Não é cadastrado? Crie sua conta </Button>
        </LoginPageContainer>
        </ThemeProvider>
        </Page>
    )
}

export default LoginPage;