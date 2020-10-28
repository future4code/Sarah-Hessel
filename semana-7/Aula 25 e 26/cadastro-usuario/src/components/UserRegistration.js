import React from 'react';
import styled from 'styled-components'

//Estilização

const RegistrationContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 4fr;
`
const Form = styled.form`
display: flex;
padding-left: 20em;
flex-direction: column;
align-items: center;
border: 1px solid black;

`
export class UserRegistration extends React.Component{
    render(){
        return (
            <RegistrationContainer>
                <Form>
                    <label>Nome: <input type="text" id="User" name="Name" /> </label>
                    <label>Email: <input type="text" id="User" name="Email"/></label>
                    <button>Enviar</button>
                </Form>
            </RegistrationContainer>
          );
    }
}

