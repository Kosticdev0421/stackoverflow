import axios from 'axios';
export const getUser=(user)=>{
  return (dispatch)=>{
    return axios.get('/api/current_user').then((data)=>{
      dispatch({type:'FETCH_USER',payload:data});
    })
  }
}

export const getAccessToken=(token)=>{
  return (dispatch)=>{
    return axios.get('/api/current_user').then((data)=>{
      dispatch({type:'GET_ACCESS_TOKEN',payload:data});
    })
  }
}
