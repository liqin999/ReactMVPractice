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
        let pathname = this.props.location.pathname;
        return (//插值表达式的形式
            <div>
                <h2 style={{'textAlign':'center'}}>
                {pathname === '/like' ? '收藏' : '播放'}
                列表
                </h2>

                <h3 style={{'textAlign':'right','cursor': 'pointer'}}>
                    <Link to="/add">添加歌曲</Link>
                </h3>
                 <h3 style={{'textAlign':'left','cursor': 'pointer'}}>
                    <Link to="/like">收藏列表</Link>
                    <span style={{"marginLeft":"15px"}}>
                       <Link to="/">所有列表</Link>
                    </span>
                     <span 
                        style={{"marginLeft":"15px"}}
                        onClick={(e)=>{
                               this.props.dispatch({
                                    type:'SELECTCHECK'
                               }) 
                        }}
                      >
                        选中收藏的歌曲
                    </span>
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
               
              {<Itme pathname={pathname} />}
               
            </table>

            <Footer />
              </div>
        );
    }
}

export default connect((state,props)=>{
   return state;
})(Main);