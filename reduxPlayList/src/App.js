
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
       this.getWeatherData = this.getWeatherData.bind(this);
       this.state={
          weather:{
              city:null,//地址
              weather:null,//天气
              temp1:null,//最低温
              temp2:null//最高温
          }
       }
    }

    componentDidMount(){
    //组件加载的时候，使用ajax从后台获取数据，
    //然后分发一个disptch,
    //在reducer中根据传递的数据进行修改默认的数据
     this.getDefaultData();

     //获得天气的数据
     this.getWeatherData();
    }

    getWeatherData(){
      let citycode = '101010100';//这里的fetch:url在package.json做了代理
      //百度‘中国天气网城市代码’获得城市的代码，调用别处的接口请求数据
         fetch(`/data/cityinfo/${citycode}.html`)//请求地址  
            .then((response) => response.json())//取数据  
            .then((responseText) => {//处理数据  
                //通过setState()方法重新渲染界面  
                this.setState({  
                    weather: responseText.weatherinfo,  
                })  
  
            })  
            .catch((error) => {  
                console.warn(error);  
            })  
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
      const {city,weather,temp1,temp2} = this.state.weather;
        return (
            <BrowserRouter>
            	<div id="musicApp">
                <div style={{"border":"1px solid green"}}>
                  <h2>天气情况</h2>
                   {city}{weather} 最低气温{temp1} 最高气温 {temp2}
                </div>
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

