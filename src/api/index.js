/*  
包含应用中所有接口请求函数的模块
*/

// export default {
//   xxx(){

//   },
//   yyy(){

//   }
// }

import ajax from './ajax'
// 登录 
// export function reqLogin(username,password){
//   return ajax('/login',{username,password},'POST')
// } 
export const reqLogin = (username,password) =>{
  const req =  ajax('/api/v1/login',{username,password},'POST')
  return req
}