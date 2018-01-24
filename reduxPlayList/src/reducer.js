import {combineReducers} from 'redux';
//在reducer中根据dispatch中 type的不同返回不同的state数据
let data = (data=[],action)=>{//reducer中规划data的数据形式
	switch(action.type){
		case 'ADD'://添加
			return [...data,{
				    id: Date.now(),
		            title: action.title,
		            singer: action.singer,
		            selected: false,
		            like: false
			}];
	    case 'REMOVE'://删除
	       return data.filter((item)=>(item.id !== action.id))

	   	case 'LIKE' ://收藏
	   		return data.map((item,index)=>{
	   			if(item.id == action.id){
		   				item.like = action.checkd
		   			}
		   			return item
		   		})
	   	case 'SETCHECK'://选择
	   		return data.map((item,index)=>{
	   			if(item.id == action.id){
	   				item.selected = action.checked
	   			}
	   			return item
	   		})
	   	 case 'CHECKALL'://全选
	   	 	return data.map((item,index)=>{
	   	 		item.selected = action.checked;
	   	 		return item
	   	 	})	


	}
	return data;
}

let reducer = combineReducers({
	data
})

export default reducer