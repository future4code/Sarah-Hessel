import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PlaylistCreator } from './PlaylistCreator';

// Estilização

const DeleteButton = styled.span`
color: red;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
        Authorization: "sarah-pereira-dumont"
    }
}

export class UserList extends React.Component {
    state = {
        tracks: [],
        playlistId: "",
        playlistName: "",
        userList: [],
        details: false,
        quantity: ""
    };

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    // --- função para pegar as playlist
    getAllPlaylists = () => {
        axios.get(baseUrl, axiosConfig)
            .then(response => {
                this.setState({ userList: response.data.result.list })
            }).catch(error => {
                console.log(error.message)
            })
    }

    // --- função para deletar uma playlist diretamente pelo id
    deleteUser = (userId) => {
        axios.delete(`${baseUrl}/${userId}`, axiosConfig)
            .then(() => {
                alert('Sua playlist foi deletada com sucesso!')
                this.getAllPlaylists()       // --- chama a função para atualizar a tela após deletar.
            }).catch((error) => {
                console.log(error.message);
            })
    }

    // --- função para mostrar detalhes
    displayDetails = () => {
        this.setState({ details: !this.setState.details })
    }

    // --- função para pegar as musicas 
    getPlaylistsTracks = (id, name) => {
        this.displayDetails()
        axios.get(`${baseUrl}/${id}/tracks`, axiosConfig)
            .then((response) => {
                this.setState({ tracks: response.data.result.tracks })
                this.setState({ playlistName: name })
                this.setState({ playlistId: id })
                this.setState({ quantity: response.data.result.quantity })
            }).catch((error) => {
                console.log(error.message)
            })
    }
    render() {
        const renderUserList = this.state.userList.map((item) => {
            return (
                <div>
                    <p key={item.id}>
                        <span onClick={() => this.getPlaylistsTracks(item.id, item.name)}>{item.name}</span>
                        <DeleteButton onClick={() => this.deleteUser(item.id)}>X</DeleteButton>
                    </p>
                </div>
            )
        })
        return (
            <div>
                <PlaylistCreator getAllPlaylists={this.getAllPlaylists} />
                {renderUserList}
            </div>
        );
    }
}