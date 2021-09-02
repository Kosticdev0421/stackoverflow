const initialState={
  tags:null,
  info:null
};

export const infoReducer=(state=initialState,action)=>{
  switch (action.type) {
    case 'GET_INFO':
      return {info:action.payload}
      case 'GET_USER_TAGS':
        return {tags:action.payload}
  
    default:
      return state;
  }
}