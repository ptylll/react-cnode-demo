import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import '../index.css';

 class Home extends Component{
    render(){
       const topics = this.props.store;
        return(
            <div>
                <Header store = {topics}/>
                
            </div>  
        )
    }
}
// <Footer/>
export default Home