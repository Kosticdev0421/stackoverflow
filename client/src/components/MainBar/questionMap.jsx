import React,{useEffect, useState} from 'react'
import moment from 'moment';
//timeDifference(question.creation_date);
            
// console.log(`question timestamp: ${question.creation_date} and current timestamp ${Math.floor(Date.now() / 1000)}`);
const QuestionMap = ({question}) => {
  const [timeData,settimeData]=useState({
    minutes:null,
    hours:null,
    seconds:null
  });
  useEffect(() => {
    timeDifference(question.creation_date);
    if(question.last_edit_date){
      timeDifference({last_edit_date:question.last_edit_date})
    }
    else if(question.creation_date){
      timeDifference({creation_date:question.creation_date})
    }
    return () => {
      
    }
  }, [question])
  
  function timeDifference(timestamp) {
    if(timestamp.creation_date){
      var activity_difference = Math.floor(Date.now() / 1000) - timestamp.creation_date;
      const duration_creation_date = moment.duration(activity_difference * 1000);
      settimeData({
        creation_date:{
          minutes:duration_creation_date.minutes(),
        seconds:duration_creation_date.seconds(),
        hours:duration_creation_date.hours()
        }
      })
    }
    else{
      var difference = Math.floor(Date.now() / 1000) - timestamp.last_edit_date;
      const duration_last_edit_date = moment.duration(difference * 1000);
      settimeData({
        last_edit_date:{
          minutes:duration_last_edit_date.minutes(),
        seconds:duration_last_edit_date.seconds(),
        hours:duration_last_edit_date.hours()
        }
      })
    }
    
}

    return (
    <>
        <div className="mainbar__questionlist-wrapper">
            <div className="questionlist__left">
              <div className="questionlist__left-votes left__category"><span  className='questionlist__left-counts'>0</span ><span className='questionlist__left-name'>votes</span></div>
              {/* <div className="questionlist__left-answers left__category"><span className='questionlist__left-counts'>2</span><span className='questionlist__left-name'>answers</span></div> */}
              <div className="questionlist__left-answers left__category"><span className='questionlist__left-counts'>{question.answer_count}</span><span className='questionlist__left-name'>answers</span></div>
              {/* <div className="questionlist__left-views left__category"><span className='questionlist__left-counts'>6</span><span className='questionlist__left-name'>views</span></div> */}
              <div className="questionlist__left-views left__category"><span className='questionlist__left-counts'>{question.view_count>1000 ? `${(question.view_count / 1000).toFixed(1)}k`:question.view_count}</span><span className='questionlist__left-name'>views</span></div>
            </div>
            <div className="questionlist__right">
              <div className="questionlist__right-heading">
                {question.title}
              </div>
              <div className="questionlist__right-content">
                {question?.tags?.map((tag)=>{
                  return <span className="questionlist__right-content--item">{tag}</span>
                })}
                {/* <span className="questionlist__right-content--item">javascript</span>
                <span className="questionlist__right-content--item">reactjs</span>
                <span className="questionlist__right-content--item">nodejs</span> */}
                <div className="questionlist__right-time"> 
                  {timeData && timeData.creation_date ? 
                  <><span>asked </span>
                  {/* <span>{`${timeData?.creation_date?.minutes} mins ago `}</span></> */}
                  <span>{`${ timeData?.creation_date?.hours>0 ? (timeData?.creation_date?.hours + ' hours ago'): (timeData?.creation_date?.minutes + ' mins ago') } `}</span></>
                  :<>
                  <><span>modified </span>
                  <span>{`${ timeData?.last_edit_date?.hours>0 ? (timeData?.last_edit_date?.hours + ' hours ago'): (timeData?.last_edit_date?.minutes + ' mins ago') } `}</span></>
                  </>
                }
                  {/* <span>16 mins ago </span> */}
                  <span className='questionlist__right-time--name'>{question.owner.display_name} </span>
                  {/* <span className='questionlist__right-time--score'>55.8k</span> */}
                  <span className='questionlist__right-time--score'>{question.owner.reputation>1000 ? `${(question.owner.reputation / 1000).toFixed(1)}k`:question.owner.reputation}</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default QuestionMap
