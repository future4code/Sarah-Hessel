import axios from 'axios';
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

    createUser = () => {
        const body = {     // body da requisição Post
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers:{
                Authorization: "sarah-pereira-dumont"
            }
        }).then(() => {                // já que o response não está sendo usado, pode ser substituido por um ().
            alert("Usuário criado com sucesso!! :D")       // mensagem de sucesso
            this.setState({nameValue:"", emailValue:""})  // limpar os inputs
        }).catch(error => {          //mensagem de erro, caso dê
            console.log("error.message")
        })
            
    };
    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    }
    onChangeEmailValue = (event) => {
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
                    <button onClick={this.createUser}>Enviar</button>
                </Form>
            </div>
          );
    }
}

