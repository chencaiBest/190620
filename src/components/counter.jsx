import React ,{Component} from 'react'
import PropTypes from 'prop-types'

/*
  UI组件：不使用任何redux相关语法
*/

export default class Counter extends Component{
  static proptypes = {
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  // 创建一个ref容器，保存到组件对象上
  numberRef = react.createRef()
  increment = () =>{
    const number = this.numberRef.current.value*1
    this.props.increment(number)
  }
  decrement = () => {
    const number = this.numberRef.current.value * 1
    // 通知store做增加更新
    this.props.decrement(number)
  }
  incrementIfOdd = () => {
    const number = this.numberRef.current.value * 1
    const count = this.props.count
    if (count %2=== 1) {
      this.props.increment(number)
    }
  }
  incrementAsync = () => {
    const number = this.numberRef.current.value * 1
    this.props.incrementAsync(number, 3000)
  }
  render(){
    const count = this.props.count
    return(
      <div>
        <p>click {count} times</p>
      <div>
      <select ref = {this.numberRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
         <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          <button onClick={this.incrementAsync}>increment async</button>
     </div>
    </div>
    )
  }
}