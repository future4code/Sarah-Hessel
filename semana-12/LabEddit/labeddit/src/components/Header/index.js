import React from 'react'
import { NavBar } from './styles'
import { goToLogin } from '../../router/coodinator'
import { useHistory, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'



function Header(props) {
    const history = useHistory();

    const HeaderAcess = () => {
        switch (props.title) {
            case ('login'):
                return <Link to={'/cadastrar'}>
                    <Button>Cadastrar</Button>
                </Link>

            case ('feed'):
                return <h3>Logado</h3>
            default:
                break
        }
    }
    return (
        <NavBar>
            <HeaderAcess />
        </NavBar>
    )
}

export default Header;