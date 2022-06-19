
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './screens/Home';
import Notes from './screens/Notes';
import Overview from './screens/Overview';
import DriveLink from './screens/DriveLink';
import AHome from './admin/screen/aHome'
import ASelectCollege from './admin/components/ASelectCollege';
import ASelectYear from './admin/components/ASelectYear';
import AdminLogin from './screens/AdminLogin';
import AEarn from './admin/screen/aEarn';
import Earn from './screens/Earn';
import CampDetail from './screens/CampDetail';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/selectyear" exact element={<Overview />} />
          <Route path="/note" exact element={<Notes />} />
          <Route path="/earn" exact element={<Earn /> } />
          <Route path='campaigndetail' exact element={<CampDetail/> } />
          <Route path='/drivelink' exact element={<DriveLink />} />
          <Route path='/adminlogin' exact element={<AdminLogin/> } />
          <Route path='/admin' exact element={<ASelectCollege /> } />
          <Route path='admin/earn' exact element={<AEarn/> } />
          <Route path='/admin/selectyear' exact element={<ASelectYear /> } />
          <Route path='/admin/note' exact element={<AHome /> } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
