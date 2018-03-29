import React,{Component} from 'react';
import {NavBar,Icon, Button,WhiteSpace,Modal} from 'antd-mobile';
import {withRouter} from "react-router-dom";
import './../index.css';
import 'whatwg-fetch';
const alert = Modal.alert;

class Signin extends Component{
    constructor(props){
        super(props)
        this.state={    
            button: '登录'
        }
    }
    FormSubmit(){

        const AccessToke = this.refs.AccessToke.value;

        if(AccessToke != ''){
            this.setState({
                button: '登录中...'
            });
            fetch('/accesstoken',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accesstoken: AccessToke,
                })
                }).then(function(data){
                return data.json()
                }).then((res)=>{
                if(res.success){
                    this.props.store.accessToken = AccessToke;
                    this.props.store.user = res;
                    localStorage.setItem('accessToken',JSON.stringify(AccessToke));
                    setTimeout(()=>{this.props.history.push(`/user/${res.loginname}`)},2000)
                }else{
                    alert(res.error_msg);
                }
                }).catch(()=>{
                    alert('网络错误')
                })
        }else{
            alert('请保证AccessToke不为空')
        }
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                >登录</NavBar>
                <div className="SiginInput">
                   <div className="SiginCom">
                        <input type="text" placeholder="Access Token" ref="AccessToke"/>
                        <Button type="primary" onClick={this.FormSubmit.bind(this)}>{this.state.button}</Button><WhiteSpace />
                   </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signin)