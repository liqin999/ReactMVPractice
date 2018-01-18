import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
			tempIndex : 3,//用于存放临时的id，真是的数据则不用设置id,直接从后台获取数据
			
			dataList:[//需要显示的歌曲的列表
				{	
					  id: 0,
	                  title: "11空白格11",
	                  singer: "蔡健雅",
	                  selected: true,
	                  like: false
				},{
					  id: 1,
	                  title: "22空白格22",
	                  singer: "蔡健雅22",
	                  selected: false,
	                  like: false
				},{
					  id: 2,
	                  title: "33空白格33",
	                  singer: "蔡健雅33",
	                  selected: false,
	                  like: true
				}
			],
			likeDataList:[],//收藏列表
			listState:true,//列表的状态,分为所有列表和收藏列表 
		};
		this.addList = this.addList.bind(this);
		this.selectAll = this.selectAll.bind(this);
		this.setCheck = this.setCheck.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.ischeckAll = this.ischeckAll.bind(this);//实现全选的状态是根据数据的来控制的
		this.setLick = this.setLick.bind(this);
		this.deleteSel = this.deleteSel.bind(this);
		this.selectLick = this.selectLick.bind(this);
		this.lookLikeList = this.lookLikeList.bind(this);
		this.lookAllList = this.lookAllList.bind(this);
		this.cancelSelectLick = this.cancelSelectLick.bind(this);

  }

  componentDidMount(){
  		let {dataList} = this.state;
	 	let likeDataList = dataList.filter((item)=>{
	  		return item.like
	  	});
		this.setState({
	       likeDataList
		});
  }
  addList(title,singer){
	  	let dataList= this.state.dataList;
	  	let id = this.state.tempIndex;
	  	dataList.push({
	  		  id: id,
	          title: title,
	          singer: singer,
	          selected: false,
	          like: false
	  	});
	  	id= id+1;
	  	this.setState({//数据驱, 数据改变的时候，视图也会发生改变
	  		tempIndex:id,
	  		dataList
	  	})

  }

  selectAll(ischecked){
  	//判断当前的状态是否是点击
  		let dataList = this.state.dataList.map((item,index)=>{
  			item.selected = ischecked;
  			return item
  		});
  		this.setState({	  	
	  		dataList
	  	})
  }

  deleteItem(index){
  		let dataList = this.state.dataList;
  		dataList = dataList.filter(function(item){
  		    return item.id !== index
  		});
  		this.setState({	  	
	  		dataList
	  	})
  		
  }
  setCheck(index,checked){//设置单选的操作 判断id是否是点击的那一个  先传递过去id,然后在传到另外一个函数中
  	let dataList = this.state.dataList;
  	dataList[index].selected = checked;//将组件中的状态统一管理
  	this.setState({	// 更新状态便于数据的同步  	
	  		dataList
	 })
  }

  setLick(index,checked){//设置单选的操作 判断id是否是点击的那一个  先传递过去id,然后在传到另外一个函数中
  	let dataList = this.state.dataList;
  	dataList[index].like = checked;//将组件中的状态统一管理
  	this.setState({	  	
	  		dataList
	 });
  	let likeDataList = dataList.filter((item)=>{
  		return item.like;
  	});
  	 this.setState({	  	
	  		likeDataList
	 });
  	//将收藏的数据放到收藏列表中

  }

   ischeckAll(){//是否是全选的状态是根据数据的改变  数组的map 受控组件
		let dataList = this.state.dataList;
		for(let i=0;i<dataList.length;i++){
			if(!dataList[i].selected){
				return false;
			}
		}
		if(dataList.length === 0){
			return false;
		}
		return true;
	}
	deleteSel(){//删除选中的歌曲  循环数据 将选中的状态的歌曲进行过滤掉
		let dataList = this.state.dataList;
		dataList = dataList.filter(function(item){
  		    return !item.selected;
  		});
  		this.setState({	  	
	  		dataList
	    })

	}

   selectLick(){//选中收藏的音乐  将选中的歌曲变成收藏
   			//设置收藏清单
	  	let {dataList} = this.state;

	  	dataList = dataList.map((item)=>{
	  		if(item.selected){//判断数据时候是选中，选中的时候，将收藏设置成勾选的状态
	  			item.like = true;
	  		}
	  		return item;
	  	})
	 	let likeDataList = dataList.filter((item)=>{
	  		return item.like
	  	});
		this.setState({
	       likeDataList,
	       dataList
		},function(){
		    
		});
		
   }
   cancelSelectLick(){//取消收藏选中的歌曲 将收藏列表置为空 
   		let {dataList} = this.state;
   		dataList= dataList.map((item)=>{
   			item.like = false;
   			return item;
   		});//将收藏前面的勾选去掉
   		this.setState({
   			dataList,
   			likeDataList:[]
   		})
   }

   lookLikeList(){//查看收藏的清单 
   		this.setState({
           listState:false
   		})
   }

   lookAllList(){
      this.setState({
           listState:true
   		})

	}
  render() {
  	
  	let {addList,selectAll,setCheck,deleteItem,ischeckAll,setLick,deleteSel,selectLick,lookLikeList,lookAllList,cancelSelectLick} = this;
  	let {dataList,likeDataList,listState} = this.state;
  	let dataLen = dataList.length;
    return (
      <div id="musicApp">
             <Header {...{addList}}/>
		  	 <Main {...{dataList,selectAll,setCheck,ischeckAll,deleteItem,setLick,likeDataList,listState}}/>
		   	 <Footer {...{dataList,dataLen,deleteSel,likeDataList,selectLick,lookLikeList,lookAllList,cancelSelectLick}}/>
      </div>
    );
  }
}

export default App;
