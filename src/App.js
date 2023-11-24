
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Address from './Components/CMS_patient_registration';
import Schedule from './Components/CMS_scheduling';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/address_details/add' element={<Address.Add_Address_details/>}/>
      <Route path='/contact_details/add' element={<Address.Add_Contact_details/>}/>
      <Route path='/personal/add' element={<Address.Add_Personal/>}/>
      <Route path='/room/add' element={<Schedule.Add_Room_category/>}/>
      <Route path='/service/add' element={<Schedule.Add_Service_provider/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
