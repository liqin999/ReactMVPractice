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
    render(){
        let data = this.props.data;
      
        return (
            <div>
                <h2 style={{'textAlign':'center'}}>播放列表</h2>
                <h3 style={{'textAlign':'right','cursor': 'pointer'}}>
                    <Link to="/add">添加歌曲</Link>
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
                                checked={this.props.isCheckAll}
                                onChange={(e)=>{
                                    this.props.checkAll(e.target.checked);
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

export default connect((state)=>state)(Main);