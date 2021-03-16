import axios from  'axios'
export const baseUrl  =  'http://192.168.124.8:3000';
// axios d的实例配置以及拦截器的配置
const axiosInstance  = axios.create({
  baseURL: baseUrl
})
axiosInstance.interceptors.response.use(res=>res.data,
  err => {
    console.log(err,  '网络错误')
  })
  export {
    axiosInstance
  }