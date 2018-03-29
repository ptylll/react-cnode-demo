import React,{Component} from 'react';
import Footer from './component/Footer';
import { Link } from 'react-router-dom';
import { NavBar,Icon,Tabs} from 'antd-mobile';
import { observer } from 'mobx-react';
import Example from '../page/loading/loading';
import './../index.css';
import 'whatwg-fetch'


const tabs = [
  { title: '回复' },
  { title: '主题' },
];

class User extends Component{

    componentDidMount() {
        const loginName = this.props.match.params.name;
        this.props.store.fetchUser(loginName);
    }

    render(){
        const { user } = this.props.store; 
        console.log(user)
        if(user != null && user != undefined){
            console.log(user)
            return(
                <div>
                    <NavBar
                        mode="dark"
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >个人中心
                    </NavBar>
                    <div className="UserContent">
                        <div className="UserTop">
                            <div className="Userimg">
                                <img src={user.data.avatar_url} />
                            </div>
                            <div className="UserName">
                                <span>{user.data.githubUsername}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 400 }}>
                        <Tabs tabs={tabs} initalPage={'t2'}>
                            <div className="list-view" style={{ backgroundColor: '#fff' }}>
                                {user.data.recent_replies.map((item,index)=><ListItem key={index} item={item} index={index} />)}
                            </div>
                            <div className="list-view" style={{ backgroundColor: '#fff' }}>
                                {user.data.recent_topics.map((item,index)=><ListItem key={index} item={item} index={index} />)}
                            </div>
                        </Tabs>
                        </div>   
                    <Footer />
                </div>
            )
        }else{
            return(
                <div className="loadingBoxs">
                    <Example type="spin" color="rgb(53,126,221)" />
                </div>
            )
        }
        
    }
}

class ListItem extends Component{
    render(){
        const { item,index } = this.props; 
        return(
            <li key={index}>
                <Link to={`/list/${item.id}`}>
                   <div className="list-text">
                        <div className="list-title">{item.title}</div>
                        <div className="list-icon"><Icon type="right" size='xs'/></div>
                   </div>
                </Link>
            </li>
        )
    }
}

export default observer(User)