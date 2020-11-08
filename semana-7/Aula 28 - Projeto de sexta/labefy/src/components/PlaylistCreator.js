import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "sarah-pereira-dumont"
    }
}

export class PlaylistCreator extends React.Component {
    state = {
        nameValue: "",
    }

    // --- on change do input 
    OnChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value })
    }

    // --- função para criar uma playlist
    createPlaylist = () => {
        const body = {
            name: this.state.nameValue,
        }
        axios.post(baseUrl, body, axiosConfig
        ).then(() => {
            this.setState({ nameValue: "" })
            alert("Playlist criada com sucesso! :D")
            this.props.getAllPlaylists()
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <div>
                <label> Playlist:
                <input
                        placeholder="Nome da playlist"
                        value={this.state.nameValue}
                        onChange={this.OnChangeNameValue} />
                </label>
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        );
    }
}