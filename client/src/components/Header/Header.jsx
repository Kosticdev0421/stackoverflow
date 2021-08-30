import React from 'react'
import './Header.scss'
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as Inbox} from '../../assets/inbox.svg';
import {ReactComponent as Achievements} from '../../assets/achievements.svg';
import {ReactComponent as Help} from '../../assets/help.svg';
import {ReactComponent as List} from '../../assets/list.svg';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
        <div className="header__logo">
          <img src="./logo-stackoverflow.svg" alt="logo" />
        </div>
        <div className="header__products">
          Products
        </div>
        <div className="header__search">
          <Search/>
          <input type="text" className='header__search-input' placeholder='Search...'/>
        </div>
        <div className="header__features">
          
          <div className="header__features-1">
            <img src="https://lh3.googleusercontent.com/a-/AOh14Ghv2tsA9GcUMhrpIOD1fhTPtFpCL4nYFr2Lsaxxvg=s96-c" alt="user" />
            <div className="header__features-1--info">
              <div className="header__features-1--points">191</div>
              <div className="header__features-1--circle">●</div>
              <div className="header__features-1--badge">6</div>
            </div>
          </div>
          <div className="header__features-2"><Inbox/></div>
          <div className="header__features-3"><Achievements/></div>
          <div className="header__features-4"><Help/></div>
          <div className="header__features-5"><List/></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Header
