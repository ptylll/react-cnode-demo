import React,{Component} from 'react';
import Footer from './component/Footer';
import {Link } from 'react-router-dom';
import { NavBar,Icon,Modal} from 'antd-mobile';
import {observer} from 'mobx-react'; 
import LoginIntercept from './component/LoginIntercept';
import './../index.css'
const alert = Modal.alert;

class Messagelist extends Component{

    render(){
        const {item} = this.props
        // console.log(item);
        return(
            <li>
                <Link to={`/list/${item.id}`}>
                    <div className="Message-com">
                        <div className="Message-author"><img src={item.author.avatar_url}/></div>
                        <div className="Message-Text">
                            <h3 className="Message-title">{item.author.loginname}<em></em></h3>
                            <p className="Message-reply">回复你的话题<em>{item.topic.title}</em></p>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

class Messages extends Component{

    componentDidMount() {
        const flag = this.props.store.loginInt;
        if(flag){
            this.props.store.fetchMessage()
        }
    }
    render(){
        const flag = this.props.store.loginInt;
        let  main;
        if(flag){
            return(
                <div>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                    >消息列表</NavBar>
                    {
                        <ul className="Message-content">
                            {this.state.Messages.map((item,index)=><Messagelist key={index} item={item} index={index} />)}
                        </ul>
                    }
                    <Footer />
                </div>
            )
        }else{
            return(
                <div>
                    <LoginIntercept />
                    <Footer />
                </div>    
            )
        }
    }
}

export default observer(Messages)