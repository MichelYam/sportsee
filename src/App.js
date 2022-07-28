
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className='container'>
        <DashBoard />
      </div>
    </>
  );
}

export default App;
