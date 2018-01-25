
import React from 'react';

import Header from "./header";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';//将组件进行包装成容器组件
//可以拿到state

import Main from "./main";
import Footer from "./footer";

var $ = require("jquery");

 class App extends React.Component {
    constructor(props){
       super(props);
       this.getDefaultData = this.getDefaultData.bind(this);
    }

    componentDidMount(){
    //组件加载的时候，使用ajax从后台获取数据，
    //然后分发一个disptch,
    //在reducer中根据传递的数据进行修改默认的数据
     this.getDefaultData();
    }

   getDefaultData(){
      let props = this.props;
        $.ajax({
            url:'https://www.easy-mock.com/mock/5a693b79a8f61a09bd187a0b/example/music/initList',
            type:'get',
            data:{}
          }).then(function(response){
            const data = response.data;
              props.dispatch({//触发action 
                type:'GETDATA',
                data:data
             })
                
          })
    }

    render(){
        return (
            <BrowserRouter>
            	<div id="musicApp">
            		<Switch>
	            		<Route path='/add' component={Header} />
	            		<Route path='/'  render={(e)=>{
	            			   return <Main location={e.location}/>
	            		}} />
                  <Route path='/like'  render={(e)=>{
                    if(this.props.data.filter((el)=>el.like).length<1){
                        return  <Redirect to='/' />
                    }
                    return <Main location={e.location}/>
                  }} />

            		</Switch>
            	 </div>
            </BrowserRouter>
        );
    }
}

export default connect((state)=>state)(App);//想要在哪个组件使用redux中的数据将ui组件进行包装成容器组件connect提供的方法 可以在任意的组件中拿到reducer中的数据

