

import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/action-creators'


/*
  容器组件：
    通过connect高阶函数产生的
    容器组件负责与UI组件和redux通信
*/
/*

用来指定向UI组件传递哪些一般属性的回调函数
*/

export default connect(
  state =>({count:state}),
  {increment,decrement,incrementAsync}
)(Counter)