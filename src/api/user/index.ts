import { LoginForm } from '../../model/user';
import $http from '../../api'

export const login = async (params: LoginForm) => {
  return await $http.post('/api/user/login', params)
}
