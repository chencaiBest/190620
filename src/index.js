/*
 *js的入口文件 
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
// 提供组件的store
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'

// 向所有容器组件提供store对象
ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
))