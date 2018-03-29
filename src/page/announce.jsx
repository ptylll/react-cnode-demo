import React,{Component} from 'react';
import Footer from './component/Footer'
import './../icon/iconfont.css'
import LoginIntercept from './component/LoginIntercept';
import { NavBar,Picker, List,Modal} from 'antd-mobile';

const alert = Modal.alert;

const seasons = [
    
      {
        label: '分享',
        value: 'share',
      },
      {
        label: '问答',
        value: 'ask',
      },
      {
        label: '招聘',
        value: 'job',
      },
      {
        label: '测试',
        value: 'dev',
      },
  ];

class Announce extends Component{

    constructor(){
        super()
        this.state={
            data: [],
            SelectValue:[],
            visible: false,
            LoginInt:false
        }
    }

    componentDidMount(){

        let user = JSON.parse(localStorage.getItem('userData'));
        let accesstoken = localStorage.getItem('accessToke');

        if(accesstoken != null){
            this.setState({
                LoginInt:true
            })
        }else{
            this.setState({
                LoginInt:false
            })
        }
    }

    selectTheme(v){
        this.setState({
            SelectValue:v
        })
    }  
    sendForm(accesstoken){

        const _this = this;
        const tab = this.state.SelectValue;
        const title = this.refs.title.value;
        const content = this.refs.textareas.value;
        const token = '51c0bb92-6b91-40ce-a6ef-bc491980d3e5';

        console.log(tab.length)
        if(tab.length > 0 ){
            if(title.length > 10){
                if(content.length > 10){
                    fetch('/accesstoken', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            accesstoken: '51c0bb92-6b91-40ce-a6ef-bc491980d3e5',
                            title:title,
                            tab:'dev',
                            content:content
                        })
                    }).then(function(data){
                        return data.json()
                    }).then(function(data){

                        _this.setState({
                            UseMessage:data
                        })
                    }).catch(function(ex){
                        console.log(ex);
                    })

                }else{
                    alert('内容至少30个字以上')
                }
            }else{
                alert('标题至少10个字以上')
            }
        }else{
            alert('请选择主题')
            return false
        }
    }
    render(){

        return(
            <div>
                <NavBar
                    mode="dark"
                    rightContent={[
                        <i  key="0" onClick={this.sendForm.bind(this)} className="icon iconfont icon-fabu"></i>
                    ]}
                >发表主题</NavBar>
                {
                    !this.state.LoginInt ? <LoginIntercept/> : 
                    <div className="announce-content">
                    <List  style={{ backgroundColor: 'white' }}>
                        <Picker 
                            className="forss"
                            value = {this.state.SelectValue}
                            data={seasons} 
                            cols={1} 
                            onChange={this.selectTheme.bind(this)} 
                            onOk={this.selectTheme.bind(this)}
                            >
                            <List.Item arrow="horizontal">选择主题</List.Item>
                        </Picker>
                    </List>
                    <List   style={{ backgroundColor: 'white' }}>
                        <input className="announce-title" ref="title" placeholder="标题10个字以上" type="text"/>
                    </List>
                    <List   style={{ backgroundColor: 'white' }}>
                        <textarea className="announce-text" placeholder="内容30个字以上" ref="textareas" cols="30" rows="10"></textarea>
                    </List>
                </div>
                }
                <Footer />
            </div>
        )
    }
}

export default Announce