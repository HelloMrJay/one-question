import $http from '../../api'

export const login = async (params: User.LF) => {
  return await $http.post('/api/user/login', params)
}
