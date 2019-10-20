/* 
登陆的一级路由组件
*/
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import logo from './images/logo.png'
import './login.less'

const { Item } = Form // 必须在所有import的下面

class Login extends Component {

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.form.validateFields(async(err,values)=>{
        if(!err){
          const {username, password} = values
          console.log('提交成功',username,password);
        }else{
          console.log(err)
        }
      })
    
    }
    validator = (rule, value, callback) => {
      // console.log(rule, value)
      const length = value && value.length
      const pwdReg = /^[a-zA-Z0-9_]+$/
      if (!value) {
        // callback如果不传参代表校验成功，如果传参代表校验失败，并且会提示错误
        callback('必须输入密码')
      } else if (length < 4) {
        callback('密码必须大于4位')
      } else if (length > 12) {
        callback('密码必须小于12位')
      } else if (!pwdReg.test(value)) {
        callback('密码必须是英文、数组或下划线组成')
      } else {
        callback() // 必须调用callback
      }
    }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </header>
        <div className="login-content">
          <h1>用户登陆</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
            {
                /*
                getFieldDecorator 是一个高阶函数(返回值是一个函数)
                getFieldDecorator(标识名称，配置对象)(组件标签) 返回新的标签
                经过 getFieldDecorator 包装的表单控件会自动添加 value和onChange，数据同步将被 form 接管
                 */
                getFieldDecorator('username', {
                  // 根据内置验证规则进行声明式验证
                  rules: [
                    {required: true, whitespace: true, message: '必须输入用户名'},
                    {min: 4, message: '用户名必须大于4位'},
                    {max: 12, message: '用户名必须小于12位'},
                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线组成'}
                  ]
                })(
              <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"/>
                )
            }
            </Item>
            <Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    // 自定义表单校验规则
                    {validator: this.validator}
                  ]
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="密码"/>
                )
              }
            </Item>
            
            <Item>
            <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);