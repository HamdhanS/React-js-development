
import CustomerList  from'../components/CustomerList';
import AddCustomer  from '../components/AddCustomer'; 
import { Routes, Route } from 'react-router-dom';
import Popup from '../components/Popup';
import Login from '../components/Login';
//import Header from '../components/Header';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="" element={<Login/>} /> 
      <Route path="/AddCustomer" element={<AddCustomer/>} />
      <Route path="/popup" element={<Popup/>}/>
      <Route path="/CustomerList" element={<CustomerList/>}/>
      {/* <Route path="/Header" element={<Header/>}/> */}
    </Routes>
  );
}

export default AppRoutes;
