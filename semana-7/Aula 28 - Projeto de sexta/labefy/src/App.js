import React from 'react';
import './App.css';
import {PlaylistCreator} from './components/PlaylistCreator'
import {UserList} from './components/UserList'

class App extends React.Component{

  render(){
    return (
      <div>
      <PlaylistCreator/>
      <UserList/>
      </div>
    );
  }
}
export default App;
