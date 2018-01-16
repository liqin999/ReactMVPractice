import React, { Component } from 'react';
export default class Footer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let {dataList,deleteSel} = this.props;
		console.log(dataList)
		let selLen = 0;
		dataList.forEach(function(el,i){
			if(el.selected){
				selLen++
			}
		});
		return (
			<footer>
		        <div className="info">
		            <span className="align-right">当前选中{selLen}首歌曲</span>
		            <span>共{this.props.dataLen}首歌曲</span>
		        </div>
		        <input 
		           type="button" 
		           value="删除选中歌曲"
		           onClick={()=>{
		           	deleteSel()
		           }}

		         />
		        <input type="button" 
		            value="收藏选中歌曲"
		         />
		        <input type="button" value="取消收藏选中歌曲"/>
		        <input type="button" value="查看收藏清单" / >
		        <input type="button" value="查看所有清单" />
		    </footer>

			)
	}
}