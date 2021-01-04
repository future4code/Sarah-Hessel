import { React } from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton} from '@material-ui/core';

const CommentListItem = (props) => {

    const handleUpVotes = () => {
        if(props.comment.userVoteDirection === 1){
            props.handleCommentVotes(props.comment.id, 0)
        }
        else {
            props.handleCommentVotes(props.comment.id, 1)
        }
    }
    const handleDownVotes = () => {
        if(props.comment.userVoteDirection === 1){
            props.handleCommentVotes(props.comment.id, 0)
        }
        else {
            props.handleCommentVotes(props.comment.id, - 1)
        }
    }
    return (
        <ListItem>
            <ListItemText
                primary={props.comment.username}
                secondary={props.comment.text}
            />
            <ListItemSecondaryAction>
                <IconButton onClick={handleDownVotes}>
                    <ArrowDownward color={props.comment.userVoteDirection === -1 ? "secondary" : "disable"}/>
                </IconButton>
                <span>{props.comment.votesCount}</span>
                <IconButton onClick={handleUpVotes}>
                    <ArrowUpward color={props.comment.userVoteDirection === 1 ? "primary" : "disable"}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CommentListItem;