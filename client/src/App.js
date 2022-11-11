import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckOut from './CheckOut';
import DailySupply from './Daily Supply';
import Dashboard from './Dashboard';
import Home from './Home';
import House from './House';
import Job from './Job';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/job" element={<Job />}/>
          <Route path="/house" element={<House />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/checkout" element={<CheckOut />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dailysupply" element={<DailySupply />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
