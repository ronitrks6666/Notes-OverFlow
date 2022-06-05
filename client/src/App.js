
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './screens/Home';
import Notes from './screens/Notes';
import Overview from './screens/Overview';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} /> 
          <Route path="/selectsem" exact element={<Overview/>}/>
          <Route path="/note" exact element={<Notes/> }/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
