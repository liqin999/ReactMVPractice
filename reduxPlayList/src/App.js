
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';//将组件进行包装成容器组件
//可以拿到state


import Main from "./main";

import Footer from "./footer";

 class App extends React.Component {
    render(){
      console.log(this.props);//拿到store 拿到store的状态
        return (
            <BrowserRouter>
            	<div id="musicApp">
            		<Switch>
	            		<Route path='/add' component={Header} />
	            		<Route path='/'  render={()=>{
	            			if(this.props.data.length == 0){
	            			 return	<Redirect to='/add' />
	            			}
	            			return <Main />
	            		}} />
            		</Switch>
            	 </div>
            </BrowserRouter>
        );
    }
}

export default connect((state)=>state)(App);//想要在哪个组件使用redux中的数据将ui组件进行包装成容器组件connect提供的方法 可以在任意的组件中拿到reducer中的数据

