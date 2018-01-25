import React from "react";
import { connect } from 'react-redux';
 class Header extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        };
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){
        return (
            <header style={{'position':'relative'}}>
                <h2 
                   onClick={this.goBack} 
                   style={{'position':'absolute','top':'5px','left':'0px','cursor': 'pointer','color':'green'}}>
                返回

                </h2>
                <h2 className="title">添加喜欢的音乐</h2>
                <input
                    type="text"
                    placeholder="输入歌曲名字"
                    value={this.state.title}
                    onChange={
                        (e)=>{
                            this.setState({
                                title: e.target.value
                            });
                        }
                    }
                />
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e)=>{
                        this.setState({
                            singer: e.target.value
                        });
                    }}
                />
                <input
                    type="button"
                    value="添加音乐"
                    onClick={(e)=>{//调用dispatch的方法
                        this.props.dispatch({
                            type:'ADD',
                            title: this.state.title,
                            singer: this.state.singer,
                        })
                       
                        this.setState({
                            title: "",
                            singer: ""
                        });
                       this.props.history.push('/');//添加音乐成功后，跳转到列表页面

                    }}
                />
            </header>
        );
    }
}

export default connect((state)=>state)(Header);