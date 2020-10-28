import React from 'react';
import styled from 'styled-components'

//Estilização

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;

`
export class UserRegistration extends React.Component{
    state = {
        nameValue: "",
        emailValue: "",
    }

    onChangeNameValue = (event) =>{
        this.setState({nameValue: event.target.value})
    }
    onChangeEmailValue = (event) =>{
        this.setState({emailValue: event.target.value})
    }

    render(){
        return (
            <div>
                <Form>
                    <label>Nome: 
                    <input value={this.state.nameValue} 
                    onChange={this.onChangeNameValue} /> 
                    </label>
                    <label>Email: 
                    <input value={this.state.emailValue} 
                    onChange={this.onChangeEmailValue}/>
                    </label>
                    <button>Enviar</button>
                </Form>
            </div>
          );
    }
}

