
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import Login from './Pages/Login';



function App() {
  const [isLogOut, setIsLogOut] = useState(false);
  return (
    <div className="App">
      {
        !isLogOut ? <Login /> :
          <div>
            <Navbar />
            <Allroutes />
          </div>

      }

    </div>
  );
}

export default App;
