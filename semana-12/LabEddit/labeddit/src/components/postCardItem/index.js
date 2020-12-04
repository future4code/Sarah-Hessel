import React from 'react'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import { CardStyled, ReactionsContainer, VotesContainer } from '../postCardItem/styles'
import {Link} from 'react-router-dom'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PostCard(props) {

    return (
       
        <CardStyled >
             <Link to='/post'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                       {props.username}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <ReactionsContainer>
                <VotesContainer>
                    <img src={Like} alt="icon like" width="20" />
                    <div>{props.votesCount}</div>
                    <img src={Dislike} alt="icon dislike" width="20" />
                </VotesContainer>
                <div>{props.commentsCount}</div>
                <div>comentários</div>
            </ReactionsContainer>
        </CardStyled>
        
    )
}
export default PostCard;