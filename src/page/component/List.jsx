import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Example from '../loading/loading';
import "../../index.css";

const history = createHistory();

class List extends Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.store.fetchDetails(id);      
    }
    render(){
        const { details } = this.props.store;
        let mian;
            console.log(this.props)
            if(details){
                mian = (

                    <div>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.goBack()}
                            >详情
                        </NavBar>
                        <h1 className="title">{details.title}</h1>
                        <div className="detail" dangerouslySetInnerHTML={{__html:details.content}}></div>
                        <div className="reply-list">
                        <div className="reply-title">
                            一共{details.reply_count}条回复 
                        </div>
                        <div className="reply-item">
                        <ul>
                        {details.replies.map((item,index)=><ReplyItem item={item} key={index} />)}
                        </ul>
                        </div>
                        </div>
                    </div>
                )
            }else{
                mian = (
                    <div className="loadingBoxs">
                        <Example type="spin" color="rgb(53,126,221)" />
                    </div>
                )
            }
            return(
                <div>
                    {mian}
                </div>
            )
    }
}

class ReplyItem extends Component{
    render(){
        const {item} = this.props

        return(
            <li className="flex reply-li">
                <div className="reply-header">
                    <div className="reply-img">
                        <img src={item.author.avatar_url} alt=""/>
                    </div>
                </div>
                <div className="reply-com">
                    <div className="reply-User">
                        <span><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link></span>
                    </div>
                    <div className="reply-Mian" dangerouslySetInnerHTML={{__html:item.content}}></div>
                    <div className="reply-back"></div>
                </div>
            </li>
        )
    }
}

export default observer(List)
