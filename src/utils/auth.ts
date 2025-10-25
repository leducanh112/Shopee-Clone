export const saveAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}
