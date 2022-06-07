
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './screens/Home';
import Notes from './screens/Notes';
import Overview from './screens/Overview';
import DriveLink from './screens/DriveLink';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/selectyear" exact element={<Overview />} />
          <Route path="/note" exact element={<Notes />} />
          <Route path='/drivelink' exact element={<DriveLink/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
