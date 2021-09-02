import './App.scss'
import {useEffect} from 'react';
import Header from './components/Header/Header';
import LeftSidebar from './components/left-sidebar/left-sidebar';
import Mainbar from './components/MainBar/mainBar';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';
function App() {

  useEffect(() => {
    const getUser=async()=>{
      const {data}=await axios.get('/api/current_user');
      console.log(data);
    }
    getUser();
    return () => {
      
    }
  }, [])

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
