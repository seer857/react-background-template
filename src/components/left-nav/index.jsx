import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
// import {
//   AppstoreOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons'
import './index.scss'
import Logo from '../../assets/aima1.png'
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu

class LeftNav extends Component {
  /* 
    根据menu的数据数组 生成对应的标签数组
  */
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        const path = this.props.location.pathname
        const cItem = item.children.find((cItem) => cItem.key === path)
        if (cItem) {
          this.openKey = item.key
        }

        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              this.getMenuNodes(item.children) //递归调用生成子菜单
            }
          </SubMenu>
        )
      }
    })
  }
  /* 
   在第一次render()之前执行一次 
   为第一个render()准备数据(必须同步的)
   */
  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
  }
  render() {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname
    const openKey = this.openKey
    //const path = ''
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={Logo} alt="" />
          <h1>数据后台</h1>
        </Link>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </div>
    )
  }
}
/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/home">控制台</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/category">分类管理</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to="/product">商品管理</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="用户管理">
            <Menu.Item key="5">人员管理</Menu.Item>
            <Menu.Item key="6">角色管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图表管理">
            <Menu.Item key="7">柱状图</Menu.Item>
            <Menu.Item key="8">折现图</Menu.Item>
            <Menu.Item key="9">饼状图</Menu.Item>
          </SubMenu> */
/* 
  withRouter 高阶组件
  包装非路由组件 ，返回一个新的组件
  新的组件向非路由组件传递3个属性：history/location/match
*/
export default withRouter(LeftNav)
