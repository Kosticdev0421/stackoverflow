import './App.scss'
import {useEffect} from 'react';
import Header from './components/Header/Header';
import LeftSidebar from './components/left-sidebar/left-sidebar';
import Mainbar from './components/MainBar/mainBar';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/auth/auth.action';
import { getTags } from './redux/api/api.action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    Promise.resolve(dispatch(getUser())).then(
      () => dispatch(getTags()));
    // dispatch(getUser());
    // dispatch(getTags());
    return () => {
      
    }
  }, [dispatch])

  return (
    <>
    <Header/>
    <div className="app">
      <div className="app__container">
        <LeftSidebar/>
        <div className="app__content">
          <Mainbar/>
          <Sidebar/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
