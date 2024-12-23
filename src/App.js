import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Schedule from './Components/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
    // <div className="App">
    <Router>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/schedule' element={<Schedule></Schedule>}></Route>
      </Routes>
      
    </Router>

    // </div>
  );
}

export default App;
