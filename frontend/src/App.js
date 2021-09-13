// import logo from './logo.svg';
import './App.css'

import Button from './components/Button/Button.component'

function App() {
  return (
    <div className="App" >
      <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
        <Button className = {"primary-btn"} text={"Open Modal"}/>
      </div>
    </div>
  );
}

export default App;
