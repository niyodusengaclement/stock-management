export const loginFail = (error) => {
  return {
    type: 'login_failed',
    error
  }
}