import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../../App.css'
import logo from '../../assets/aima1.png'
import './login.scss'
import {reqLogin} from '../../api/index'
//import memoryUtils from '../../utils/memoryUtils'
const Item = Form.Item // 不能写在 import 之前
// const layout = {
//   labelCol: { span: 32 },
//   wrapperCol: { span: 16 },
// }
/* 
  登录的路由组件
*/
// const onFinish = (values) => {
//   console.log(values)
//   this.props.history.replace('/home')
// }

export default class Login extends Component {
  formRef = React.createRef()
  handleSubmit = () => {}
  onFinish = async(values) =>{
    console.log(values)
    const {username,password} = values
    const req = await reqLogin(username,password)
    if(req.data.status === 200){
      this.props.history.replace('/home')
      message.success("登录成功!")
      localStorage.setItem('user',req.data.token)
    }else{
      message.error("登录错误"+ req.data.message)
    }
    // this.props.history.repla.ce('/home')
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form ref={this.formRef} onFinish={this.onFinish}>
            <Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Item>
            <Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}

/* 
  1、前台表单验证
  2、收集表单输入数据
*/
