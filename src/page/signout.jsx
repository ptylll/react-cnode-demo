import React,{Component} from 'react';
import {NavBar,Icon, Button,WhiteSpace } from 'antd-mobile';
import './../index.css'

class User extends Component{
 
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >退出登录</NavBar>
                <div className="SiginInput">
                   <div className="SiginCom">
                        <Button type="warning">确认退出登录</Button><WhiteSpace />
                   </div>
                </div>
            </div>
        )
    }
}

export default User