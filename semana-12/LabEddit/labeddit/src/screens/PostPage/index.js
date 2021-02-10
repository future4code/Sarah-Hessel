import { React, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Page, ListContainer } from './styles'
import PostCard from '../../components/postCardItem'
import { BASE_URL } from '../../constants/url_api'
import { TextField, Button } from '@material-ui/core';
import CommentListItem from '../../components/commentListItem/index'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#26a69a'
        },
    },
});
function PostPage() {
    const [postDetail, setPostDetail] = useState(null);
    const [newComment, setNewComment] = useState("");
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history.push('/login')
        }
        else if (!params.postId) {
            history.push('/feed')
        }
    }, [])

    useEffect(() => {
        fetchPostDetail();
    }, [])

    const fetchPostDetail = () => {
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}/posts/${params.postId}`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setPostDetail(response.data.post)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    const handleUpdateComment = (event) => {
        setNewComment(event.target.value)
    }
    const handleCreateComment = async () => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const body = {
            text: newComment
        }
        try {
            await axios.post(`${BASE_URL}/posts/${params.postId}/comment`, body, axiosConfig)
            setNewComment("")
            fetchPostDetail();
        } catch (error) {
            alert("Não foi possivel enviar seu comentário, tente novamente.")
            console.error(error)
        }
    }
    const handleCommentVotes = async (commentId, direction) => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            direction: direction
        }
        try {
            await axios.put(`${BASE_URL}/posts/${params.postId}/comment/${commentId}/vote`, body, axiosConfig)
            fetchPostDetail();
        } catch (error) {
            alert("Não foi possivel votar no comentário, tente novamente")
            console.error(error)
        }

    }
    return (
        <Page>
            <ThemeProvider theme={theme}>
                {postDetail !== null && <PostCard post={postDetail} hideComment />}
                <br/>
                <TextField
                    placeholder={"Seu comentario"}
                    value={newComment}
                    onChange={handleUpdateComment}
                />
                <br />
                <Button
                    onClick={handleCreateComment}
                    color="primary"
                    variant="contained"
                >
                    Enviar
            </Button>
                <ListContainer dense>
                    {postDetail && postDetail.comments.map((comment) => {
                        return (
                            <CommentListItem comment={comment} handleCommentVotes={handleCommentVotes} />
                        )
                    })}
                </ListContainer>
            </ThemeProvider>
        </Page>
    )
}

export default PostPage;