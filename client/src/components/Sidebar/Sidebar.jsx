import './Sidebar.scss';
import {ReactComponent as Pencil} from '../../assets/pencil.svg';
import {ReactComponent as Logo} from '../../assets/LogoGlyphXxs.svg';
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">

        {/* Top Info Block */}
        <div className="sidebar__infoblock">
          <div className="sidebar__heading">The Overflow Blog</div>
          <div className="sidebar__points">
            <div className="sidebar__points-1 sidebar__point">
              <Pencil/>
              <span>Podcast 369: Passwords are dead! Long live the new authentication flows.</span>
            </div>
            <div className="sidebar__points-2 sidebar__point">
              <Pencil/>
              <span>You’re living in the Metaverse, you just don’t know it yet.</span>
            </div>
          </div>
          {/* Featured on Meta */}
          <div className="sidebar__heading">Featured on Meta</div>
          <div className="sidebar__points">
            <div className="sidebar__points-1 sidebar__point">
              <Logo/>
              <span>Should the [remove] tag be removed?</span>
            </div>
            <div className="sidebar__points-2 sidebar__point">
              <Logo/>
              <span>Outdated Answers: results from flagging exercise and next steps.</span>
            </div>

          </div>
          {/* Hot Meta Posts */}
          <div className="sidebar__heading">Hot Meta Posts</div>
          <div className="sidebar__points">
            <div className="sidebar__points-1 sidebar__point">
              31
              <span>Minimum working example in Django</span>
            </div>
            <div className="sidebar__points-2 sidebar__point">
              15
              <span>Are there any meaningful differences between the [overlap] and [overlapping]…</span>
            </div>
          </div>
        </div>

        {/* Filter Block */}
        <div className="sidebar__filterblock">
          <div className="sidebar__filterblock-heading">
            Custom Filters
          </div>
          <div className="sidebar__filterblock-content cursor">
            Create a custom filter
          </div>
        </div>

        {/* Watched Tags */}
        <div className="sidebar__tags">
          <div className="sidebar__tags-heading">
            <span>Watched Tags</span>
            <span className='cursor'>edit</span>
          </div>
          <div className="sidebar__tags-content">
            <div className="item">css</div>
            <div className="item">firebase</div>
            <div className="item">flutter</div>
            <div className="item">google-cloud-firestore</div>
            <div className="item">javascript</div>
            <div className="item">nodejs</div>
            <div className="item">react-hooks</div>
            <div className="item">reactjs</div>
            <div className="item">react-redux</div>
            <div className="item">react-router</div>
            <div className="item">sass</div>
          </div>
        </div>

        {/* Ignored Tags */}
        <div className="sidebar__tags">
          <div className="sidebar__tags-heading">
            <span>Ignored Tags</span>
            <span className='cursor'>edit</span>
          </div>
          <div className="sidebar__tags-content">
            <div className="item">.net</div>
            <div className="item">.net-core</div>
            <div className="item">adaptive-cards</div>
            <div className="item">amazon-redshift</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar
