import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';


export const CardStyled = styled(Card)`
    margin-left: auto;
    margin-right: auto;
    width: 26vw;
    min-width: 260px;
`
export const ReactionsContainer = styled(CardActions)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid black;
    gap: 5px;
`
export const VotesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;
    margin-top: 3px;
`