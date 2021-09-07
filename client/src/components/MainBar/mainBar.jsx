import './mainBar.scss';
import axios from 'axios';
import { useState,useEffect } from 'react';
import QuestionMap from './questionMap';
const Mainbar = () => {

  const [questions,setQuestions]=useState([]);
  const url='https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=nodejs&site=stackoverflow';
  useEffect(() => {
    const getQuestions=async()=>{
      const {data:{items}}=await axios.get(url);
      setQuestions(items);
      console.log(items);
    }
    getQuestions();
    return () => {
      
    }
  }, [])

//   function timeDifference(timestamp) {
//     var difference = Math.floor(Date.now() / 1000) - timestamp;
//     const duration = moment.duration(difference * 1000);
//     console.log(duration.minutes());
// }


  return (
    <>
      <div className="mainbar">
        <div className="mainbar__heading">
          <div className="mainbar__heading-head">Top Questions</div>
          <div className="mainbar__heading-ask">Ask Question</div>
        </div>
        <div className="mainbar__category">
          <div className="mainbar__category-container">
            <div className="mainbar__category-interesting mainbar__category-item">Interesting</div>
            <div className="mainbar__category-bountied mainbar__category-item"><span className='mainbar__category-bountied--number'>287</span><span>Bountied</span></div>
            <div className="mainbar__category-hot mainbar__category-item">Hot</div>
            <div className="mainbar__category-week mainbar__category-item">Week</div>
            <div className="mainbar__category-month mainbar__category-item">Month</div>
          </div>
        </div>
        <div className="mainbar__questionlist">
        {questions?.map((question,index)=>{
          return <QuestionMap key={index} question={question} />
        })}
        </div>
      </div> 
    </>
  )
}

export default Mainbar
