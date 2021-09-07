import axios from 'axios';
//achievements
// const base=`https://api.stackexchange.com/2.3/me/achievements`;
// const base=`https://api.stackexchange.com/2.3/me/tags?order=desc&sort=popular&site=stackoverflow`;
const base=`https://api.stackexchange.com/2.3/me/tag-preferences?id=19821051&site=stackoverflow`;
// const base=`https://api.stackexchange.com/2.3/me/tag-preferences?id=19821051&site=stackoverflow&access_token=${access_token}&key=${key}`;
// const base=`https://api.stackexchange.com/2.3/me?order=desc&sort=reputation&site=stackoverflow&access_token=${access_token}&key=${key}`;
// const base='https://api.stackexchange.com/2.3/info?site=stackoverflow';
export const getTags=()=>{
  return async (dispatch,getState)=>{
    const stateBefore=await getState();
    return await axios.get(base,{
      params:{
        access_token:stateBefore.auth.user.accessToken,
        key:stateBefore.auth.user.key
      }
    }).then(({data})=>{
      dispatch({type:'GET_USER_TAGS',payload:data})
    })
    
  }
}