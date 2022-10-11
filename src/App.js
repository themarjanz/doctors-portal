
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AttendAppointment from './Pages/AttendAppointment/AttendAppointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="appointment" element={<AttendAppointment></AttendAppointment>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div>


  );
}

export default App;
