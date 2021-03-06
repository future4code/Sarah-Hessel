import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../screens/LoginPage/index'
import SignUpPage from '../screens/SignUpPage/index'
import FeedPage from '../screens/FeedPage/index'
import PostPage from '../screens/PostPage/index'

function Router(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <LoginPage/>
            </Route>
            <Route exact path='/cadastrar'>
                <SignUpPage/>
            </Route>
            <Route exact path='/feed'>
                <FeedPage/>
            </Route>
            <Route exact path='/post/:postId'>
                <PostPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;