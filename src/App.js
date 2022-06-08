import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';




function App(props) {

  return (
    
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-content">
        <Routes>
        <Route path='/profile/*'  element={<ProfileContainer/>}/>
        <Route path='/dialogs/*'  element={<Dialogs />}/>
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
