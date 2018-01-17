
import React, { Component } from 'react';
import Item from './Item.js'
/*使用插值表达式循环生成许多的列表的数据*/
export default class Main extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let {dataList,selectAll,setCheck,ischeckAll,deleteItem,setLick,listState,likeDataList} = this.props;
		return (
			 <table className="main">
		        <thead>
		        	<tr>
			            <th>
			                <input 
			                 type="checkbox"
			                 id="checkAll" 
			                 checked={ischeckAll()}
			                 onChange={(e)=>{
			                 	selectAll(e.target.checked)
								
			                 }}
			                 />
			                <label htmlFor="checkAll">全选</label>
			            </th>
			            <th>歌曲</th>
			            <th>歌手</th>
			            <th>收藏</th>
			            <th>删除</th>
		            </tr>
		        </thead>
		        <tbody>
		        		{
		        			listState ? (//jsx中的插值表达式 可以是字符串 文本 数据  表达式 三元运算符
		        				
				 						dataList.map((item,index)=>{//在列表中将索引也传递到具体的每一项中 应该传递id
						            	  	return <Item 
						            	  	key={index}
						            	  	{...{item,setCheck,index,ischeckAll,deleteItem,setLick}}
						            	  	/>
						                })
						           
		        		    	)  : (

		        					
		        					   likeDataList.map((item,index)=>{//在列表中将索引也传递到具体的每一项中 应该传递id
						            	  	return <Item 
						            	  	key={index}
						            	  	{...{item,setCheck,index,ischeckAll,deleteItem,setLick}}
						            	  	/>
						                })
		        					

		        			
		                           )

		        			}

		          



		        </tbody>
		    </table>

			)
	}
}