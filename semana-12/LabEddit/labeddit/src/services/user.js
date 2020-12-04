import axios from 'axios'
import {BASE_URL} from '../constants/url_api'
import {goToFeedPage} from '../router/coodinator'

export const user = (body, id, history) => {
    axios.post(`${BASE_URL}${id}`, body)
    .then(response => {
        localStorage.setItem('token', response.data.token)  // local para guardar o token
        goToFeedPage(history)
    }).catch(error => {
       console.error(error)
    })
}