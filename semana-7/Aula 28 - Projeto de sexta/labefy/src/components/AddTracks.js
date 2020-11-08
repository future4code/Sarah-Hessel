import axios from 'axios';
import React from 'react';

const axiosConfig = {
    headers: {
        Authorization: "sarah-pereira-dumont"
    }
}
export class AddTrack extends React.Component {
    state = {
        nameValue: "",
        artistValue: "",
        urlValue: ""
    }
    onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value })
    }
    onChangeArtistValue = (event) => {
        this.setState({ artistValue: event.target.value })
    }
    onChangeUrlValue = (event) => {
        this.setState({ urlValue: event.target.value })
    }
    
    // --- função para adicionar uma música
    addTrack = (id) => {
        const body = {
            name: this.state.nameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, axiosConfig)
            .then(() => {
                this.setState({ nameValue: "", artistValue: "", urlValue: "" })
                this.props.getPlaylistTracks()
            }).catch((error) => {
                console.log(error.message)
            })
    }
    render() {
        return (
            <div>
                <input
                    placeholder="nome da música"
                    value={this.state.nameValue}
                    onChange={this.onChangeNameValue} />
                <input
                    placeholder="nome de artiste"
                    value={this.state.artistValue}
                    onChange={this.onChangeArtistValue} />
                <input
                    placeholder="Url"
                    value={this.state.urlValue}
                    onChange={this.onChangeUrlValue} />
                <button onClick={() => this.addTrack(this.props.playlistId)}>Adicionar</button>
            </div>
        );
    }
}
