const initialState={
  user:null,
  access_token:null
}

export const authReducer=(state=initialState,action)=>{
switch (action.type) {
  case 'FETCH_USER':
    return {user:action.payload.data}
  case 'GET_ACCESS_TOKEN':
    return {access_token:action.payload}

  default:
    return state;
}
}