// import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Button from './components/Common/Button/Button.component'
import Navbar from './components/Layout/Navbar/Navbar.component';

import Logs from './components/Logs/Logs.component';

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar/>
        <div className="w-screen h-screen flex justify-center bg-gray-100 pt-10">
          <Logs/>
          {
            // <Button className = {"primary-btn"} text={"Open Modal"}/>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
