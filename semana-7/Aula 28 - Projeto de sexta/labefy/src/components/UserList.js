import React from 'react';
import styled from 'styled-components'

// Estilização

const DeleteButton = styled.span`
color: red;
`
export class UserList extends React.Component{
    state = {
        userList: [
         {
             id: "1",
             name: "Playlist 1"
         },
         {
             id: "2",
             name: "Playlist 2"
         }
        ]
    }

  render(){
      const renderUserList = this.state.userList.map(usuario =>{
          return(
            <p key={usuario.id}>
                {usuario.name}
                <DeleteButton> X </DeleteButton>
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