import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import Add_Address_details from '../CMS_Patient_Registration/Add_Address_details';


function Add_Service_provider() {

    const{register, handleSubmit ,formState: {errors}, watch} = useForm();

  const Navigate = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users',data);
    Navigate('/address_details/show');

  }

  return (
    <div>
    
      <div className='container'>
        <form  onSubmit={handleSubmit(saveData)} className="row g-3" >
          
          <div className="col-md-8">
            <label htmlFor="service_provider_id" className="form-label">service_provider_id</label>
            <input type="number" className="form-control" id="service_provider_id" 
            {...register('service_provider_id', {
              required:{
                  value:true,
                  message:"This field is required"
              }, min:{
                  value:1,
                  message:"Id should greater than or equal to 1"
              }
          }) } />
          {errors.service_provider_id && <p className='text-danger'> {errors.service_provider_id.message} </p> } 
          </div>
          
          <div className="col-md-8">
            <label htmlFor="service_provider_name" className="form-label">service_provider_name</label>
            <input type="text" className="form-control" id="service_provider_name" {...register('service_provider_name')}/>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="service_provider_code" className="form-label">service_provider_code</label>
            <input type="text" className="form-control" id="service_provider_code" {...register('service_provider_code')}/>
          </div>
          <div className="col-8">
            <label htmlFor="hospital_identifier" className="form-label">hospital_identifier</label>
            <input type="text" className="form-control" id="hospital_identifier" {...register('hospital_identifier')}/>
          </div>
          <div className="col-8">
            <label htmlFor="hospital_type" className="form-label">hospital_type</label>
            <input type="text" className="form-control" id="hospital_type" {...register('hospital_type')}/>
          </div>
          <div className="col-8">
            <label htmlFor="hospital_registration_number" className="form-label">hospital_registration_number</label>
            <input type="number" className="form-control" id="hospital_registration_number" {...register('hospital_registration_number')}/>
          </div>
          <div className="col-8">
            <label htmlFor="address_details" className="form-label">address_details</label>
            <input type="text" className="form-control" id="address_details" {...register('address_details')}/>
          </div>
          <div className="col-8">
          
            <label htmlFor="bank_details" className="form-label">bank_details</label>
            <input type="text" className="form-control" id="bank_details" {...register('bank_details')}/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success me-3">Add Service Provider Details</button>
            <button type="reset" className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
  </div>

  )
}

export default Add_Service_provider