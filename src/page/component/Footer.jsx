import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import '../../icon/iconfont.css';
import './footer.css'

const routers=[
    {path:'/',icon:'footer-icon icon iconfont icon-gerenzhongxin',text:'首页'},
    {path:'/announce',icon:'footer-icon icon iconfont icon-fabu',text:'发表'},
    {path:'/Message',icon:'footer-icon icon iconfont icon-shouye',text:'消息'},
    // {path:'/User/ptylll',icon:'footer-icon icon iconfont icon-icon--',text:'我的'}
    {path:'/SignIn',icon:'footer-icon icon iconfont icon-icon--',text:'我的'}
]

class Footer extends Component{
    constructor(){
        super()
        this.state={
            curreIndex:0
        }
    }
    handleClick(index){
        console.log(index)
        this.setState({
            curreIndex:index
        })
    }
    render(){
        return(
            <div>
                <ul className="footer">
                   {
                       routers.map((item,index)=>{
                           let activeClass = index === this.state.curreIndex ? 'Footer-activeClassName' : '';
                           return(
                                <Link to={item.path}  key={index} data-id={index} onClick={this.handleClick.bind(this,index)} className={activeClass}>
                                    <i className={item.icon}></i>
                                    <p className="icon-Text">{item.text}</p>
                                </Link>
                           )
                       })
                   }                    
                </ul>
            </div>
        )
    }
}
// activeClassName="Footer-activeClassName"
export default Footer