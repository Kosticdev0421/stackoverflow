const initialState=null;

export const authReducer=(state=initialState,action)=>{
switch (action.type) {
  case 'FETCH_USER':
    return action.payload

  default:
    return state;
}
}