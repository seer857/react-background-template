import React, { Component } from 'react'
import './index.scss'
import Icon from '../../assets/weather.png'
import { withRouter } from 'react-router-dom'
import menuList from '../../config/menuConfig'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import LinkButton from '../link-button/index'
class Header extends Component {
  getTitle = () => {
    // 得到当前请求路径
    const path = this.props.location.pathname
    let title
    menuList.forEach((item) => {
      if (item.key === path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find((cItem) => cItem.key === path)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }
  logout = () => {
    // 显示确认框
    Modal.confirm({
      title: '确定退出吗？',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      onOk:() => {
        this.props.history.replace('/login')
      },
    })
  }
  render() {
    const title = this.getTitle()

    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，admin</span>
          <LinkButton href="#!" onClick={this.logout}>
            退出
          </LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>2021-03-04 8:41:05</span>
            <img src={Icon} alt="" />
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)
