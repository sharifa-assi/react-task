import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/register/Register';


function App() {


  return (
    <div>   <Router>
      <Navbar/>
    <div className='app'>
  <Register/>
      </div>
    </Router>
    </div>
  );
}

export default App;
