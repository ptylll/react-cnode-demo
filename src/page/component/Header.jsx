import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import {Tabs,List} from 'antd-mobile';
import './header.css';
import Example from '../loading/loading';

const Item = List.Item;
const Brief = Item.Brief;

const tabs = [
    { title: '全部', sub: 'all' },
    { title: '精华', sub: 'good' },
    { title: '分享', sub: 'share' },
    { title: '问答', sub: 'ask' },
    { title: '招聘', sub: 'job' },
];

@observer
class Header extends Component{

    componentDidMount() {
        this.props.store.loadData();
    }
    topicsCut(Models,index){
        const nav = Models.sub;
        this.props.store.emptyData();
        this.props.store.loadData({
            page:1,
            tab:nav,
            limit:11
        });
    }
    render(){        
        const { topics,loading } = this.props.store;
        let main;
        if(loading){
            main = (
                <div className="loadingBoxs">
                    <Example type="spin" color="rgb(53,126,221)" />
                </div>
            )
        }else{
            main = (
                <ul>        
                    {
                        topics.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <Link to={`/list/${item.id}`}>
                                        <Item
                                            arrow="horizontal"
                                            multipleLine
                                            onClick={() => {}}
                                            platform="android">
                                        <Brief> {item.title} <br /></Brief>
                                        </Item>
                                    </Link>
                                </li>
                            )
                        })
                    }  
                </ul>
            )
        }

        return(
            <div className="HeaderContent">
                <div >
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        onChange={this.topicsCut.bind(this)}
                    >
                    <div className="Content">
                        {main}
                    </div>    
                    </Tabs>
                </div>
            </div>
        )
      
    }
}
export default observer(Header)