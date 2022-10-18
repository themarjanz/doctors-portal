
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AttendAppointment from './Pages/AttendAppointment/AttendAppointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Uusers from './Pages/Dashboard/Uusers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';




function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="appointment" element={<RequireAuth>
          <AttendAppointment></AttendAppointment>
        </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><Uusers></Uusers></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>

        </Route>

        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>

      <ToastContainer />
    </div>


  );
}

export default App;
