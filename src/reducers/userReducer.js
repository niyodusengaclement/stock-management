const initState = {
  users: [
    {id: 1, username: 'Mistico', email: 'clementmistico@gmail.com', password: 'password'},
    {id: 2, username: 'Admin', email: 'admin@gmail.com', password: 'password'}
  ],
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'login_failed': 
      return {
        ...state,
        error: action.error
      }
  
    default:
      return state;
  }
}
export default userReducer;
