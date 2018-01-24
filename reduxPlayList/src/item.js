import React from "react";
import { connect } from 'react-redux';
class Item extends React.Component {
    render(){
        let data = this.props.data;
        console.log(this.props)
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

export default connect((state)=>state)(Item);
