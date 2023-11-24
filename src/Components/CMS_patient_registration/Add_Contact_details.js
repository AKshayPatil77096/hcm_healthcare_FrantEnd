import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';


function Add_Contact_details() {

    const{register, handleSubmit ,formState: {errors}, watch} = useForm();

    const Navigate = useNavigate();
  
    function saveData(data){
      axios.post('http://localhost:5000/users',data);
      Navigate('/personal/add');
  
    }
  return (
    <div>
    {/* <CMS_Billing/> */}
      <div className='container'>
        <form  onSubmit={handleSubmit(saveData)} className="row g-3" >
          
          <div className="col-md-8">
            <label htmlFor="contact_details_id" className="form-label">contact_details_id</label>
            <input type="number" className="form-control" id="contact_details_id" 
            {...register('contact_details_id', {
              required:{
                  value:true,
                  message:"This field is required"
              }, min:{
                  value:1,
                  message:"Id should greater than or equal to 1"
              }
          }) } />
          {errors.contact_details_id && <p className='text-danger'> {errors.contact_details_id.message} </p> } 
          </div>
          
          <div className="col-md-8">
            <label htmlFor="mobile_number" className="form-label">mobile_number</label>
            <input type="number" className="form-control" id="mobile_number" 
             {...register('mobile_number', {
              required:true,
              pattern:{
                  value:/^[0-9]{10}$/, 
                  message:"mobile_number code must of 10 digits"
              }
          }) } /> 
          { errors.mobile_number && <p className='text-danger'> { errors.mobile_number.message } </p>}
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="alternate_mobile_number" className="form-label">alternate_mobile_number</label>
            <input type="number" className="form-control" id="alternate_mobile_number" 
            {...register('alternate_mobile_number', {
              required:true,
              pattern:{
                  value:/^[0-9]{10}$/, 
                  message:"alternate_mobile_number code must of 10 digits"
              }
          }) } /> 
          { errors.alternate_mobile_number && <p className='text-danger'> { errors.alternate_mobile_number.message } </p>}
          </div>
          <div className="col-8">
            <label htmlFor="email_identifier" className="form-label">email_identifier</label>
            <input type="email" className="form-control" id="email_identifier" 
             {...register('email_identifier', {
              required:true, 
              pattern:{
                  value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.co\.in)$/,
                  message: "email does not accept domains other than '.com' and '.co.in' "
              }
          }) } />
          { errors.email_identifier && <p className='text-danger'> { errors.email_identifier.message } </p> }
          </div>
          <div className="col-8">
            <label htmlFor="alternate_email_identifier" className="form-label">alternate_email_identifier</label>
            <input type="email" className="form-control" id="alternate_email_identifier" 
            {...register('alternate_email_identifier', {
              required:true, 
              pattern:{
                  value:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.co\.in)$/,
                  message: "email does not accept domains other than '.com' and '.co.in' "
              }
          }) } />
          { errors.alternate_email_identifier && <p className='text-danger'> { errors.alternate_email_identifier.message } </p> }
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-success me-3">Save & Next</button>
            <button type="reset" className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default Add_Contact_details