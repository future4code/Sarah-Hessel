import React from 'react';

export class PlaylistCreator extends React.Component{
 state={
   nameValue: "",
 }

 OnChangeNameValue = (event) =>{
  this.setState({nameValue: event.target.value})
 }
 

  render(){
    return (
      <div>
      <label>Criar Playlist: 
        <input value={this.state.nameValue} 
        onChange={this.OnChangeNameValue}/>
      </label>
      <button>Enviar</button>
      </div>
    );
  }
}