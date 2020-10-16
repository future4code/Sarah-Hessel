import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paula'}
          fotoUsuario={'https://images.generated.photos/Kd_BoUw8sWK9_dQIo9Jr1tKQhzLt-zzYboYA9hP6hrI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50LzAx/ODc0NzYucG5n.png'}
          fotoPost={'https://picsum.photos/id/1025/4951/3301'}
          descricaoFoto={'Ai está você, Bartolomeu hahaha'}
        />
        <Post
          nomeUsuario={'Morgana'}
          fotoUsuario={'https://images.generated.photos/m9TycrgRv8I01MK1Ay3D4vFsyLd4L8W697tsjdEwMqk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwODQxMDYuanBn.jpg'}
          fotoPost={'https://picsum.photos/id/116/3504/2336'}
          descricaoFoto={'Me sentindo em JRango. #disney #kamaleãoAtor #leonardoDi #faroeste #queSede'}
        />
        <Post
          nomeUsuario={'Sandra'}
          fotoUsuario={'https://images.generated.photos/ZD6JRE8uGrKmICH-wDvrn-MQ3am4ZZriA4V6ezTbuXQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDI4MzQuanBn.jpg'}
          fotoPost={'https://picsum.photos/id/1011/5472/3648'}
          descricaoFoto={'Encolhida admirando a paisagem.'}
        />
        
      </div>
    );
  }
}
export default App;
