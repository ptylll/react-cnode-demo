import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './comm.css'
class LoginIntercept extends Component{
    render(){
        return(
            <div className="LoginInt">
                你还未登录，请先
                <Link to="/SignIn">
                    登录
                </Link>
            </div>
        )
    }
}

export default LoginIntercept