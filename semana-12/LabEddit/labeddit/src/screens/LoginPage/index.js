import React from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Button, Typography, Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { goToSignUp } from '../../router/coodinator'
import { useForm } from '../../hooks/useForm'
import { user } from '../../services/user'
import { Form, LoginPageContainer } from './styles'
import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
import {orange, red} from '@material-ui/core/colors';
import Header from '../../components/Header/index'


const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: red,
    },
});

export const AvatarContainer = styled(Avatar)`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`

function LoginPage() {
    const history = useHistory();
    const { form, onChange } = useForm({ email: '', password: '' })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)

    }
    const handleSubmission = (event) => {
        event.preventDefault()     // previne o comportamento padrão do form de recarregar a pagina
        user(form, "/login", history)
        /* 
        login (form) mesma coisa que:
         const body = {
            email: form.email,
            password: form.password
         }
        */
    }
    return (
        <div>
             <Header title={'login'} />
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
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Senha"
                    name="password"
                    type="password"
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
            <Button color="secondary" variant="outlined" onClick={() => goToSignUp(history)} > Não é cadastrado? Faça aqui </Button>
        </LoginPageContainer>
        </div>
    )
}

export default LoginPage;