import React from "react";

export default class Item extends React.Component {
	constructor(props){//脚手架的方式  让程序员更多的是关注与业务逻辑和代码的实现
		super(props);
		this.state= {
			selected:false,
			like:false
		};
		
	}

    render(){
        let {item,setCheck,index,ischeckAll,deleteItem,setLick} = this.props;
        return (
        		  <tr className={(item.selected?"selected":"")
            + (item.like?" like":"")}>
		                <td>
		                    <input 
		                     type="checkbox" 
		                     checked = {item.selected}
		                     onChange={(e)=>{
		                     	setCheck(index,e.target.checked)
		                     }}
		                     />
		                </td>
		                <td>{item.title}</td>	
		                <td>{item.singer}</td>
		                <td>
		                    <input 
		                     type="checkbox"
		                      checked={item.like} 
		                      onChange={(e)=>{
		                     	setLick(index,e.target.checked)
		                     }}
		                      />
		                </td>
		                <td>
		                    <a 
		                      onClick={
								(e)=>{
									 e.preventDefault(); 
									 e.stopPropagation();
									 deleteItem(item.id)
								}
		                    }>X</a>
		                </td>
		           </tr>
        	)
    }
}