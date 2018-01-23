import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);
console.log(store.getState());

store.dispatch({//添加数据
    type:'ADD',
    title:'111',
    singer:'222'
})

console.log(store.getState());

let id = store.getState().data[0].id
store.dispatch({//删除数据
    type:'REMOVE',
    id:id
})

console.log(store.getState());

ReactDOM.render(
    <h1>欢迎你的光临</h1>,
    document.getElementById('root')
);
