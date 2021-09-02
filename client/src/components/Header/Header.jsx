import './Header.scss'
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as Inbox} from '../../assets/inbox.svg';
import {ReactComponent as Achievements} from '../../assets/achievements.svg';
import {ReactComponent as Help} from '../../assets/help.svg';
import {ReactComponent as List} from '../../assets/list.svg';
import { useSelector} from 'react-redux';
const Header = () => {
  const user=useSelector((state)=>state.auth.user);
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
        <div className={`header__features ${user && 'align-stretch'}`}>
          {user ? <>
          <div className="header__features-1">
            {/* <img src='' alt="user" /> */}
            <img src={user && user.photos[0]} alt="user" />
            <div className="header__features-1--info">
              {/* <div className="header__features-1--points">321</div> */}
              <div className="header__features-1--points">{user && user._json && user._json.items && user._json.items[0].reputation}</div>
              <div className="header__features-1--circle">●</div>
              {/* <div className="header__features-1--badge">6</div> */}
              <div className="header__features-1--badge">{user && user._json && user._json.items && user._json.items[0].badge_counts.bronze}</div>
            </div>
          </div>
          <div className="header__features-2"><Inbox/></div>
          <div className="header__features-3"><Achievements/></div>
          <div className="header__features-4"><Help/></div>
          <div className="header__features-5"><List/></div>
          </>
          : <> 
          <a href='/auth/stack-exchange' className="header__features-login center">Log in</a>
          <a href='/auth/stack-exchange' className="header__features-signup center">Sign up</a>
          </>
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default Header
