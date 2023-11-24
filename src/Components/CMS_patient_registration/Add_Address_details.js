import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';

function Add_Address_details() {

  const{register, handleSubmit, formState: {errors}, watch} = useForm();

  const Navigate = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users',data);
    Navigate('/contact_details/add');

  }
  return (
    <div>
    {/* <CMS_Billing/> */}
      <div className='container'>
        <form  onSubmit={handleSubmit(saveData)} className="row g-3" >
          
          <div className="col-md-8">
            <label htmlFor="address_details_id" className="form-label">address_details_id</label>
            <input type="number" className="form-control" id="address_details_id" 
              {...register('address_details_id', {
                required:{
                    value:true,
                    message:"This field is required"
                }, min:{
                    value:1,
                    message:"Id should greater than or equal to 1"
                }
            }) } />
            {errors.address_details_id && <p className='text-danger'> {errors.address_details_id.message} </p> } 
          </div>
          
          <div className="col-md-8">
            <label htmlFor="line1" className="form-label">line1</label>
            <input type="text" className="form-control" id="line1" {...register('line1')}/>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="line2" className="form-label">line2</label>
            <input type="text" className="form-control" id="line2" {...register('line2')}/>
          </div>
          <div className="col-8">
            <label htmlFor="landmark" className="form-label">landmark</label>
            <input type="text" className="form-control" id="landmark" {...register('landmark')}/>
          </div>
          <div className="col-8">
            <label htmlFor="area" className="form-label">area</label>
            <input type="text" className="form-control" id="area" {...register('area')}/>
          </div>
          <div className="col-8">
            <label htmlFor="town" className="form-label">town</label>
            <input type="text" className="form-control" id="town" 
             {...register('town', 
             { required:{
                 value:true,
                 message:"This field is required"
             },
                 pattern: {
                     value: /^[A-Z][a-z]*$/, 
                     message:"First letter of town must be of capital letter and name should not contain any digits"
                 }
             }) } />
         {errors.town && <p className='text-danger'> {errors.town.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="city" className="form-label">city</label>
            <input type="text" className="form-control" id="city" 
            {...register('city', 
            { required:{
                value:true,
                message:"This field is required"
            },
                pattern: {
                    value: /^[A-Z][a-z]*$/, 
                    message:"First letter of city must be of capital letter and name should not contain any digits"
                }
            }) } />
        {errors.city && <p className='text-danger'> {errors.city.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="state" className="form-label">state</label>
            <input type="text" className="form-control" id="state" 
             {...register('state', 
             { required:{
                 value:true,
                 message:"This field is required"
             },
                 pattern: {
                     value: /^[A-Z][a-z]*$/, 
                     message:"First letter of state must be of capital letter and name should not contain any digits"
                 }
             }) } />
         {errors.state && <p className='text-danger'> {errors.state.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="pincode" className="form-label">pincode</label>
            <input type="number" className="form-control" id="pincode" 
            {...register('pincode', {
              required:true,
              pattern:{
                  value:/^[0-9]{6}$/, 
                  message:"pincode must of 6 digits"
              }
          }) } /> 
          { errors.pincode && <p className='text-danger'> { errors.pincode.message } </p>}
          </div>
          <div className="col-12">
            {/* <NavLink to={"/contact_details/add"}><input type="submit" value="Submit Address Details and next" className="btn btn-success me-3"></input></NavLink> */}
            
            <input type="submit" className="btn btn-primary" value="Submit & Next"/>
            <button type="reset" className="btn btn-primary">Reset</button>
            {/* <NavLink to={"/contact_details/add"}><button type="button" className="btn btn-success me-3">Next Page</button></NavLink> */}
            
          </div>
        </form>
      </div>
  </div>







  )
}

export default Add_Address_details