import React from 'react';
import { TextField, Button, Typography} from '@material-ui/core'
import { Form, SignUpContainer } from './styles'
import Header from '../../components/header/index' 
import { useForm } from '../../hooks/useForm'
import { user } from '../../services/user';
import { useHistory } from 'react-router-dom';



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
        <div>
            <Header/>
            <SignUpContainer>
                <Typography variant="h5">Cadastrar-se</Typography>
                <Form onSubmit={handleSubmission}>
                    <TextField
                        name="username"
                        placeholder="Nome de usuário"
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                    >
                        Cadastrar
                </Button>
                </Form>
            </SignUpContainer>
        </div>
    )
}

export default SignUpPage;