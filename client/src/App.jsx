import './App.scss'
import Header from './components/Header/Header';
import LeftSidebar from './components/left-sidebar/left-sidebar';
import Mainbar from './components/MainBar/mainBar';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
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
