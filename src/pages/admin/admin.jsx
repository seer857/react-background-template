import React, { Component } from 'react'
import { Layout } from 'antd'

import LeftNav from '../../components/left-nav'
// import Header from '../../components/header'
import Home from '../home'
import Category from '../category'
import Product from '../product'
import Role from '../role'
import User from '../user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import { Redirect, Route, Switch } from 'react-router'
import './admin.scss'
const { Header, Content, Footer, Sider } = Layout
/* 
  管理的路由组件
*/
export default class Admin extends Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className="logo" />
          <LeftNav />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/role" component={Role}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/charts/bar" component={Bar}></Route>
                <Route path="/charts/line" component={Line}></Route>
                <Route path="/charts/pie" component={Pie}></Route>
                <Redirect to="/home"></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center',overflow:"hidden"}}>
            AIMA ©2021 Created by Owner
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
