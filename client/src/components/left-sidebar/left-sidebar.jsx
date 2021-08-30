import React from 'react'
import './left-sidebar.scss';
import {ReactComponent as Questions} from '../../assets/questions.svg'; 
import {ReactComponent as Incentive} from '../../assets/i.svg'; 
import {ReactComponent as Briefcase} from '../../assets/briefcase.svg'; 
const Sidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="left-sidebar__container">
        <div className="left-sidebar__home">Home</div>
        <div className="left-sidebar__public">PUBLIC</div>
        <div className="left-sidebar__questions"><Questions/>&nbsp;Questions</div>
        <div className="left-sidebar__tags shift__right">Tags</div>
        <div className="left-sidebar__users shift__right">Users</div>
        <div className="left-sidebar__collectives incentive"><span>COLLECTIVES</span><Incentive/></div>
        <div className="left-sidebar__cloud">Google Cloud</div>
        <div className="left-sidebar__findajob">FIND A JOB</div>
        <div className="left-sidebar__jobs shift__right">Jobs</div>
        <div className="left-sidebar__companies shift__right">Companies</div> 
        <div className="left-sidebar__teams incentive"><span>TEAMS</span><Incentive/></div> 
        <div className="left-sidebar__createteam">
          <div className="left-sidebar__createteam-container">
            <Briefcase/>
          </div>
          &nbsp;
          <span>Create free Team</span>
          </div> 
          </div>
      </div>
    </>
  )
}

export default Sidebar
