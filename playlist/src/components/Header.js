import React, { Component } from 'react';
export default class Header extends Component{
	constructor(props){//脚手架的方式  让程序员更多的是关注与业务逻辑和代码的实现
		super(props);
		this.state= {//将input变成受控组件的形式
			title:'',
			singer:''
		}
	}
	render(){
		let {addList} = this.props;
		return (
			 <header>
		        <h2 className="title">播放列表</h2>
		        <input
		        value={this.state.title}
		        onChange={(e)=>{
					this.setState({
						title:e.target.value
					})
		        }}
		         type="text"
		         placeholder="输入歌曲名字"
		          />
		        <input 
		          type="text" 
		          value={this.state.singer}
		          onChange={(e)=>{
				   this.setState({
					   singer:e.target.value
					})
		        }}
		          placeholder="输入歌手名字"
		         />
		        <input type="button" value="添加音乐" onClick={()=>{
		        	addList(this.state.title,this.state.singer);
		        	this.setState({//添加之后表单清空
		        		title:'',
			            singer:''
		        	})
		        }} />
		    </header>

			)
	}
}