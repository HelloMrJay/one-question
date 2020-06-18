import axios from 'axios';
import { message } from 'antd'

const _axios = axios.create({
  timeout: 60 * 1000
});

_axios.interceptors.request.use(  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  })

_axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data
  },
  (error) => {
    // Do something with response error
    message.error(error.response.data)
    return Promise.reject(error)
  }
)

export default _axios;
