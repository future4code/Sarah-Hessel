import React from 'react'
import { useHistory } from 'react-router'
import { CardStyled, ReactionsContainer, VotesContainer } from '../postCardItem/styles'
import { CardContent, Typography, CardHeader, Avatar, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import CommentIcon from '@material-ui/icons/Comment';

function PostCard(props) {
    const history = useHistory()

    const goToPostPage = () => {
        history.push(`/post/${props.id}`)
    }

    const handleVoteUpVote = (direction) => {
        props.handleVotePost(props.id, 1)
    }
    const handleVoteDownVote = (direction) => {
        props.handleVotePost(props.id, -1)
    }
    return (
        <CardStyled>
            <CardHeader
                avatar={
                    <Avatar></Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={props.username}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <ReactionsContainer disableSpacing>
                <VotesContainer>
                    <IconButton onClick={handleVoteDownVote}>
                        <ArrowDownward />
                    </IconButton>
                    <p>{props.votesCount}</p>
                    <IconButton onClick={handleVoteUpVote}>
                        <ArrowUpward />
                    </IconButton>
                </VotesContainer>
                <IconButton>
                    <ShareIcon />
                </IconButton>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<CommentIcon />}
                    onClick={goToPostPage}
                >
                    {props.commentsCount}
                </Button>
            </ReactionsContainer>
        </CardStyled>
    )
}
export default PostCard;