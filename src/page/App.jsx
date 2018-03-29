import React, { Component } from 'react';
import { HashRouter, Route,Switch,Redirect} from 'react-router-dom';
import Home from './home';
import User from './User';
import Announce from './announce';
import Message from './Message';
import Lists from './component/List';
import SignIn from './signIn';
import SignOut from './signout';
import NotFound from './component/NotFound';

class App extends Component{
 
    render(){
        const store = this.props.store
        return(
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" render={({match,location }) => <Home  match ={match} location={location}  store = {store} />} />
                        <Route  path="/user/:name" render={({match,location }) => <User match ={match } location={location} store = {store} />} />
                        <Route  path="/Announce" render={({match,location }) => <Announce match ={match} location={location}  store = {store} />} />
                        <Route  path="/Message" render={({match,location }) => <Message match ={match} location={location}  store = {store} />} />
                        <Route  path="/list/:id" render={({match,location,history }) => <Lists match ={match} location={location} history={history}  store = {store} />} />
                        <Route  path="/signin" render={({match,location }) => <SignIn  match ={match }  location={location} store = {store} />} />
                        <Route  path="/signout" render={({match,location }) => <SignOut match ={match } location={location}  store = {store} />} />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </HashRouter>    
        )
    }
}

export default App