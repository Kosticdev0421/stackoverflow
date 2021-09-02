import axios from 'axios';
const base='https://api.stackexchange.com/2.3/info?site=stackoverflow';
// const base='https://api.stackexchange.com/2.3/info?site=stackoverflow';
export const getTags=()=>{
  return (dispatch)=>{
    return axios.get(base).then(({data})=>{
      dispatch({type:'GET_INFO',payload:data})
    })
  }
}