import React,{Component}from 'react';
import { BrowserRouter, HashRouter, Switch, Route,Router, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './page/home';
import User from './page/User'
import Announce from './page/announce'
import Message from './page/Message'
import Lists from './page/component/List'
import SignIn from './page/signIn'
import SignOut from './page/signout'

const Routes = [
    {path:'/', exact:true,component:Home},
    {path:'/user/:name', exact:false,component:User},
    {path:'/Announce', exact:false,component:Announce},
    {path:'/Message', exact:false,component:Message},
    {path:'/list/:id', exact:false,component:Lists},
    {path:'/signin', exact:false,component:SignIn},
    {path:'/signout', exact:false,component:SignOut},
]

class Routers extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    {/* <Route exact path="/" component={Home}/>
                    <Route  path="/list/:id" component={Lists}/>
                    <Route  path="/user/:name" component={User}/>
                    <Route  path="/announce" component={Announce}/>
                    <Route  path="/message" component={Message}/>
                    <Route  path="/signin" component={SignIn}/>
                    <Route  path="/signout" component={SignOut}/> */}
                    {
                        Routes.map((route,index)=>(
                            <Route 
                                key={index}
                                path={route.path}
                                component={route.component}
                                exact={route.exact}
                            />
                        ))
                    }
                </div>
            </HashRouter>
        )
    }
}
export default Routers

