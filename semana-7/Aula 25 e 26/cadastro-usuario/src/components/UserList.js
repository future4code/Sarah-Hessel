import React from 'react';
import styled from 'styled-components'

//Estilização

const DeleteButton = styled.span` //tag inline: não quebra de linha
color: red;
margin-left: 5px;
`

export class UserList extends React.Component{
    state = {
       userList: [
        {
            id: "1",
            name: "Mulher-Maravilha"
        },
        {
            id: "2",
            name: "Mulher-Gato"
        }
       ]
    }
    render(){
        const renderUserList = this.state.userList.map(usuario => { 
            return(
                <p key={usuario.id}>
                    {usuario.name}
                    <DeleteButton>X</DeleteButton>
                </p>
            )
        })
        return (
            <div>
                <p>{renderUserList}</p>
            </div>
          );
    }
}
