import {React, useEffect} from 'react';
import Header from '../../components/header/index'
import PostCard from '../../components/postCardItem'
import {Typography, TextField } from '@material-ui/core'
import { Form, FeedContainer, Page } from './styles'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url_api'

function FeedPage() {
    useEffect(() => {
        const authentication = useProtectPage   // autenticação
     }, [useProtectPage])
  
    const posts = useRequestData(`${BASE_URL}/posts`, undefined)

    return (  
        <Page>
        <Header />
   <FeedContainer>
       <Typography variant="h5"> Feed </Typography>
       <Form>
           <TextField
                type="text"
                placeholder="Escreva aqui"
           />
           <button
               type="submit"
               variant="contained"
               color="primary"
           >
               Postar
           </button>
       </Form>
       {posts && posts.posts.map (post => {
           return(
            <PostCard
                key={post.post_id}
                title={post.title}
                username={post.username}
                text={post.text}
                votesCount={post.votesCount}
                commentsCount={post.commentsCount}
            />
           )
       })}
   </FeedContainer>
   </Page>
    )
}

export default FeedPage;