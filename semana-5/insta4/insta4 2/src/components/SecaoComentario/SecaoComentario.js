import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario: ""  // aparecer as letras na barra de comentario. barra de comentario vazia.
	}

	onChangeComentario = (event) => {
        this.setState({
			comentario: event.target.value  //input funcionando
		})
		console.log(event.target.value)  // verificando o salvamento no console.
	}
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar} >Enviar</button>
		</div>
	}
}
