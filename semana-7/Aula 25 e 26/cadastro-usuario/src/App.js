import React from 'react';
import {UserRegistration} from './components/UserRegistration'
import {UserList} from './components/UserList'


class App extends React.Component {
  state = {
    userRegistration: true
  }
  changePage = () => {
    this.setState({userRegistration: !this.state.userRegistration})
  }
  render(){
    const currentPage = this.state.userRegistration ? ( <UserRegistration/>) : ( <UserList/>)   //ternario
    return (
      <div>
        {currentPage}
        <button onClick={this.changePage}>Mudar de pagina</button>
        
      </div>
    );
  }
}

export default App;
