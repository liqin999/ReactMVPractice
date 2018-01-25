import React from "react";
import { connect } from 'react-redux';
import Itme from "./item";
import Footer from './footer'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let data = this.props.data;
        let isCheckAll = false;
        for(var i=0;i<data.length;i++){//根据数据判断时候是完全的选中的情况
            if(!data[i].selected){//如果有一项是false则为false
                isCheckAll = false;
                break;
            }else{
                isCheckAll = true;
            }
        }
        return (
            <div>
                <h2 style={{'textAlign':'center'}}>播放列表</h2>
                <h3 style={{'textAlign':'right','cursor': 'pointer'}}>
                    <Link to="/add">添加歌曲</Link>
                </h3>
                 <h3 style={{'textAlign':'left','cursor': 'pointer'}}>
                    <Link to="/like">收藏列表</Link>
                </h3>
            <table
                className="main"
                style={{
                    display: data.length?"table":"none"
                }}
            >
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                id="checkAll"
                                checked={isCheckAll}
                                onChange={(e)=>{
                                    this.props.dispatch({//使用dispatch 触发action 
                                        type:'CHECKALL',
                                        checked:e.target.checked
                                    })
                                    
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
               
              {<Itme />}
               
            </table>

            <Footer />
              </div>
        );
    }
}

export default connect((state,props)=>{
    console.log(state);
    console.log(props);
    let pathname = props.location.pathname;
    if(pathname === '/'){
        return Object.assign({},state);
    }
    if(pathname === '/like'){//不能直接改变 state
        let data = {};
        data.data = state.data.filter((el)=> el.like);
        let obj = Object.assign({},state,data);
          console.log(data)
          console.log(obj)
        return obj
    }    
    
})(Main);