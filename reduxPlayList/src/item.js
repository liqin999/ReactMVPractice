import React from "react";
import { connect } from 'react-redux';
class Item extends React.Component {
    render(){
        let data = this.props.data;
        let list = null;
        list = data.map((el,index)=>{
            return ( <tr key={index} className={(data.selected?"selected":"")
            + (data.like?" like":"")}>
                <td>
                    <input
                        type="checkbox"
                        checked = {el.selected}
                        onChange = {
                            (e)=>{
                              this.props.dispatch({
                                    type:'SETCHECK',
                                    id: el.id,
                                    checked:e.target.checked
                             })
                        }}
                    />
                </td>
                <td>{el.title}</td>
                <td>{el.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        checked = {el.like}
                        onChange = {
                            (e)=>{
                                this.props.dispatch({
                                    type:'LIKE',
                                    id: el.id,
                                    checkd:e.target.checked
                                  })
                            }
                        }
                    />
                </td>
                <td>
                    <a onClick ={
                        (e)=>{
                            this.props.dispatch({
                            type:'REMOVE',
                            id: el.id,
                          })
                       
                        }
                    }>X</a>
                </td>
            </tr>)

        });

        return (
             <tbody>{list}</tbody>
        )
    }
}

/*在connect中第一个回调参数中，
state代表是redux的store,props是自己的prop,
state是一个对象的形式
当 state 变化，或者 props 变化的时候，
计算出一个新的 stateProps，更新给组件。
在connect中修改state进而显示不同的视图
*/

export default connect((state,props)=>
{
    
    let pathname = props.pathname;
    if(pathname === '/'){
        return Object.assign({},state);//将state返回
    }
    if(pathname === '/like'){
        let data = {};
        data.data = state.data.filter((el)=>el.like);
        let obj = Object.assign({},data);
        return obj
    }
}
)
(Item);
