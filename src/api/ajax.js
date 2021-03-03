/* 
  能发送异步ajax请求的函数模块
  封装axios库
  函数的返回值是promise对象
*/
import { message } from 'antd'
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve,reject) =>{
    let promise
    if (type === 'GET') { // 发送GET请求
      promise = axios.get(url,{
        params:data
      })
    } else { // 发POST请求
      promise = axios.post(url,data)
    }
    promise.then(response =>{
      resolve(response)
    }).catch(error =>{
      message.error("请求出错了"+ error.message)
    })
  })
}

// 请求登录接口
// ajax('/login',{username:'',password:''})