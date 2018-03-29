
import {action, extendObservable} from 'mobx';
import {Modal} from 'antd-mobile';
import 'whatwg-fetch';

const alert = Modal.alert;
class AppState{

    constructor(){

        extendObservable(this,{
            topics:[],
            topicsPage:1,
            accessToken:null,
            messages:null,
            details:null,
            user:null,
            loading:true,

            emptyData: action(function(){ //清空数组
                this.topics.replace('');
            }),

            loadData: action(function(data={}){//初次加载
                this.loading = true;
                fetch(`/topics?page=${data.page || 1}&tab=${data.tab || 'all'}&limit=${data.limit || 11}`)
                .then(res => res.json() )
                .then((res) =>{
                    if(!res.success){
                        throw new Error(res.error_msg);
                    }else{
                        this.loading = false;
                        this.topics.replace(res.data);
                    }
                })  
                this.loading = true;
            }),

            fetchDetails: action(function(id){ //文章详情

                fetch(`/topic/${id}`)
                    .then(function(response) {
                        return response.json()
                    }).then((res)=>{
                        this.details=res.data; 
                    }).catch(function(ex) {
                        alert('网络错误')
                    })
            }),

            fetchMessage: action(function(accesstoken){//获取已读和未读消息
                fetch(`/messages?accesstoken=${accesstoken || this.accessToken}`)
                .then(function(response) {
                    return response.json()
                }).then((res)=>{
                    this.messages = res.data
                }).catch(function(ex) {
                    alert('网络错误')
                })
            }),
            fetchUser: action(function(loginname){//获取用户用户详情
                fetch('/user/'+loginname+'').then(function(data){
                    return data.json()
                  }).then((res)=>{
                    if(res.success){
                        this.user = res
                    }
                  }).catch(function(ex){
                    alert('网络错误')
                })
            }),
        })
    }
}

export default AppState; 

