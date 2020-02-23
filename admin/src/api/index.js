import request from '../utils/request'

export function login({userName,password}){
   return request.post('/login',{userName,password}).then(res=>res.data)
}