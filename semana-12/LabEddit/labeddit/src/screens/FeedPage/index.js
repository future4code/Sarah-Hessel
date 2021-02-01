import { React, useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../../components/header/index'
import PostCard from '../../components/postCardItem'
import { TextField, Button, Card } from '@material-ui/core'
import { FeedContainer, ButtonContainer, Page } from './styles'
import { useProtectPage } from '../../hooks/useProtectPage'
import { BASE_URL } from '../../constants/url_api'
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#26a69a',
    }
  },
});

function FeedPage() {
    const [isLoading, setLoading] = useState(false)
    const [posts, setPost] = useState(undefined)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        const authentication = useProtectPage   // autenticação
    }, [useProtectPage])

    useEffect(() => {
        fetchPost();
    }, [])

    const fetchPost = () => {
        const token = localStorage.getItem('token')
        setLoading(true)
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setPost(response.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }
    const handleVotePost = async (postId, direction) => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            direction: direction
        }
        try {
            await axios.put(`${BASE_URL}/posts/${postId}/vote`, body, axiosConfig)
            fetchPost();
            setTitle('')
            setText('')
        } catch (error) {
            alert("Não foi possivel votar no post, tente novamente")
            console.error(error)
        }

    }

    const createPost = async () => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const body = {
            text: text,
            title: title
        }
        try {
            setLoading(true)
            await axios.post(`${BASE_URL}/posts`, body, axiosConfig)
            fetchPost();
        } catch (error) {
            alert("Não foi possivel criar o post")
            console.error(error)
        }
    }
    const handleOnChangeText = (event) => {
        setText(event.target.value)
    }
    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <Page>
        <ThemeProvider  theme={theme}>
            <Header />
            <FeedContainer>
                
                <Card>
                    <TextField
                        type="text"
                        placeholder="Título"
                        value={title}
                        onChange={handleOnChangeTitle}
                    />
                    <br/>
                    <TextField
                        type="text"
                        placeholder="Escreva seu post aqui"
                        value={text}
                        onChange={handleOnChangeText}
                    />
                    <ButtonContainer>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={createPost}
                        >
                            Postar
                    </Button>
                    </ButtonContainer>
                </Card>
                {isLoading && <progress />}
                {posts && posts.posts.map(post => {
                    return (
                        <PostCard
                            key={post.post_id}
                            title={post.title}
                            id={post.id}
                            username={post.username}
                            text={post.text}
                            votesCount={post.votesCount}
                            commentsCount={post.commentsCount}
                            handleVotePost={handleVotePost}
                        />
                    )
                })}
            </FeedContainer>
        </ThemeProvider >
        </Page>
    )
}

export default FeedPage;