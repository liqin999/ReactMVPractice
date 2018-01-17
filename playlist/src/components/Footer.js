import React, { Component } from 'react';
export default class Footer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let {dataList,deleteSel,selectLick,lookLikeList,lookAllList,cancelSelectLick,likeDataList} = this.props;
		console.log(dataList)
		let selLen = 0;
		dataList.forEach(function(el,i){
			if(el.selected){// 使用数据控制视图的变化
				selLen++
			}
		});
		return (
			<footer>
				{
					(likeDataList.length && dataList.length)  ? ( //当列表有数据，并且是收藏的列表有值显示  
						<div className="info">
			            <span className="align-right">当前选中{selLen}首歌曲</span>
			            <span>共{this.props.dataLen}首歌曲</span>
		       		   </div>
		       		   ) : <div></div>
				}
		     
		        <input 
		           type="button" 
		           value="删除选中歌曲"
		           onClick={()=>{
		           	deleteSel()
		           }}

		         />
		        <input 
		            type="button" 
		            value="收藏选中歌曲"
		            onClick={()=>{
		            	selectLick()
		            }}
		         />
		        <input 
			         type="button" 
			         value="取消收藏选中歌曲"
			          onClick={()=>{
		            	cancelSelectLick()
		            }}
		         />
		        <input 
		             type="button"
		             value="查看收藏清单" 
		             onClick={
		             	()=>{
		             		lookLikeList()
		             	}
		             }
		           / >
		        <input 
			        type="button" 
			        value="查看所有清单"
			          onClick={
		             	()=>{
		             		lookAllList()
		             	}
		             }
		         />
		    </footer>

			)
	}
}