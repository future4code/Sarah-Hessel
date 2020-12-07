import { React, useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../../components/header/index'
import PostCard from '../../components/postCardItem'
import { Typography, TextField, Button, Card } from '@material-ui/core'
import { FeedContainer, ButtonContainer } from './styles'
import { useProtectPage } from '../../hooks/useProtectPage'
import { BASE_URL } from '../../constants/url_api'

function FeedPage() {
    const [isLoading, setLoading] = useState(false)
    const [posts, setPost] = useState(undefined)
    

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
        try{
           await axios.put(`${BASE_URL}/posts/${postId}/vote`, body, axiosConfig) 
           fetchPost();
        }catch(error){
            alert("Não foi possivel votar no post, tente novamente")
            console.error(error)
        }
        
    }
   

    return (
        <div>
            <Header />
            <FeedContainer>
                <Typography variant="h5"> Feed </Typography>
                <Card>
                    <TextField
                        type="text"
                        placeholder="Escreva aqui"
                    />
                    
                    <ButtonContainer>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
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
        </div>
    )
}

export default FeedPage;