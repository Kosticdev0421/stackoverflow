import './mainBar.scss';

const Mainbar = () => {
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
          <div className="mainbar__questionlist-wrapper">
            <div className="questionlist__left">
              <div className="questionlist__left-votes left__category"><span  className='questionlist__left-counts'>0</span ><span className='questionlist__left-name'>votes</span></div>
              <div className="questionlist__left-answers left__category"><span className='questionlist__left-counts'>0</span><span className='questionlist__left-name'>answers</span></div>
              <div className="questionlist__left-views left__category"><span className='questionlist__left-counts'>6</span><span className='questionlist__left-name'>views</span></div>
            </div>
            <div className="questionlist__right">
              <div className="questionlist__right-heading">
                how can i get cursor position on contenteditable div?
              </div>
              <div className="questionlist__right-content">
                <div className="questionlist__right-content--item">javascript</div>
                <div className="questionlist__right-content--item">reactjs</div>
                <div className="questionlist__right-content--item">nodejs</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Mainbar
