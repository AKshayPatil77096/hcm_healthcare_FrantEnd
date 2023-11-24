import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import Add_Address_details from './Add_Address_details';
// import Add_Contact_details from './Add_Contact_details';



function Add_Personal() {

    const{register, handleSubmit, formState: {errors}, watch} = useForm();

    const Navigate = useNavigate();
  
    function saveData(data){
      axios.post('http://localhost:5000/users',data);
      Navigate('/address_details/show');
  
    }
  return (
    <div>
    {/* <Add_Contact_details/>
    <Add_Address_details/> */}
      <div className='container'>
        <form  onSubmit={handleSubmit(saveData)} className="row g-3" >
          
          <div className="col-md-8">
            <label htmlFor="personal_id" className="form-label">personal_id</label>
            <input type="number" className="form-control" id="personal_id" 
            {...register('personal_id', {
              required:{
                  value:true,
                  message:"This field is required"
              }, min:{
                  value:1,
                  message:"Id should greater than or equal to 1"
              }
          }) } />
          {errors.personal_id && <p className='text-danger'> {errors.personal_id.message} </p> } 
          </div>
          
          <div className="col-md-8">
            <label htmlFor=" res_code" className="form-label"> res_code</label>
            <input type="text" className="form-control" id=" res_code" {...register(' res_code')}/>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="claim_status" className="form-label">claim_status</label>
            <input type="text" className="form-control" id="claim_status" {...register('claim_statusr')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_first_name" className="form-label">res_first_name</label>
            <input type="text" className="form-control" id="res_first_name" 
            {...register('res_first_name', 
            { required:{
                value:true,
                message:"This field is required"
            },
                pattern: {
                    value: /^[A-Z][a-z]*$/, 
                    message:"First letter of town must be of capital letter and name should not contain any digits"
                }
            }) } />
        {errors.res_first_name && <p className='text-danger'> {errors.res_first_name.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="res_last_name" className="form-label">res_last_name</label>
            <input type="text" className="form-control" id="res_last_name" 
            {...register('res_last_name', 
            { required:{
                value:true,
                message:"This field is required"
            },
                pattern: {
                    value: /^[A-Z][a-z]*$/, 
                    message:"First letter of town must be of capital letter and name should not contain any digits"
                }
            }) } />
        {errors.res_last_name && <p className='text-danger'> {errors.res_last_name.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="res_middle_name" className="form-label">res_middle_name</label>
            <input type="text" className="form-control" id="res_middle_name" 
            {...register('res_middle_name', 
            { required:{
                value:true,
                message:"This field is required"
            },
                pattern: {
                    value: /^[A-Z][a-z]*$/, 
                    message:"First letter of town must be of capital letter and name should not contain any digits"
                }
            }) } />
        {errors.res_middle_name && <p className='text-danger'> {errors.res_middle_name.message} </p> }
          </div>
          <div className="col-8">
            <label htmlFor="res_name_prefix" className="form-label">res_name_prefix</label>
            <input type="text" className="form-control" id="res_name_prefix" placeholder="eg. Mr. Sagar" {...register('res_name_prefix')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_name_suffix" className="form-label">res_name_suffix</label>
            <input type="text" className="form-control" id="res_name_suffix" {...register('res_name_suffix')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_weight" className="form-label">res_weight</label>
            <input type="number" className="form-control" id="res_weight" placeholder="eg. 120 kg" {...register('res_weight')}/>
          </div>
          <div className="col-md-8">
            <label htmlFor="res_height" className="form-label">res_height</label>
            <input type="text" className="form-control" id="res_height" placeholder="eg. 150 cm" {...register('res_height')}/>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="res_image" className="form-label">res_image</label>
            <input type="text" className="form-control" id="res_image" {...register('res_imager')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_marital_status" className="form-label">res_marital_status</label>
            {/* <input type="text" className="form-control" id="res_marital_status" {...register('res_marital_status')}/> */}
                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='married'> Married </label>
                        <input className='form-check-input' type='checkbox' name='res_marital_status[]' value={'married'} id='married' {...register('res_marital_status') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='Unmarried'> Unmarried </label>
                        <input className='form-check-input' type='checkbox' name='res_marital_status[]' value={'Unmarried'} id='Unmarried' {...register('res_marital_status') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='divorced'> Divorced</label>
                        <input className='form-check-input' type='checkbox' name='res_marital_status[]' value={'divorced'} id='divorced' {...register('res_marital_status') } />
                    </div>
          </div>
          <div className="col-8">
            <label htmlFor="res_gender" className="form-label">res_gender</label>
            {/* <input type="text" className="form-control" id="res_gender" placeholder="eg. Female" {...register('res_gender')}/> */}
                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='male'> Male </label>
                        <input className='form-check-input' type='checkbox' name='res_gender[]' value={'male'} id='male' {...register('lres_gender') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='female'> Female </label>
                        <input className='form-check-input' type='checkbox' name='res_gender[]' value={'female'} id='female' {...register('res_gender') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='other'> Other</label>
                        <input className='form-check-input' type='checkbox' name='res_gender[]' value={'other'} id='other' {...register('res_gender') } />
                    </div>
          </div>
          <div className="col-8">
            <label htmlFor="res_is_handicap" className="form-label">res_is_handicap</label>
            {/* <input type="text" className="form-control" id="res_is_handicap" {...register('res_is_handicap')}/> */}
                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='yes'> Yes </label>
                        <input className='form-check-input' type='checkbox' name='res_is_handicap[]' value={'yes'} id='yes' {...register('res_is_handicap') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='no'> No</label>
                        <input className='form-check-input' type='checkbox' name='res_is_handicap[]' value={'no'} id='no' {...register('res_is_handicap') } />
                    </div>
          </div>
          <div className="col-8">
            <label htmlFor="res_date_of_birth" className="form-label">res_date_of_birth</label>
            <input type="number" className="form-control" id="res_date_of_birth" {...register('res_date_of_birth')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_occupation" className="form-label">res_occupation</label>
            <input type="text" className="form-control" id="res_occupation" {...register('res_occupation')}/>
          </div>
          <div className="col-8">
            <label htmlFor="res_aadhar_card_number" className="form-label">res_aadhar_card_number</label>
            <input type="number" className="form-control" id="res_aadhar_card_number" 
            {...register('res_aadhar_card_number', {
              required:{
                  value:true,
                  message:"This field is required"
              }, min:{
                  value:12,
                  message:"aadhar_card_number should contain 12 digits"
              }
          }) } />
          { errors.res_aadhar_card_number && <p className='text-danger'> {errors.res_aadhar_card_number.message}</p>}
          </div>
          <div className="col-8">
            <label htmlFor="res_aadhar_card_image" className="form-label">res_aadhar_card_image</label>
            <input type="image" className="form-control" id="res_aadhar_card_image" {...register('res_aadhar_card_image')}/>
          </div>
          <div className="col-md-8">
            <label htmlFor="created_on " className="form-label">created_on </label>
            <input type="text" className="form-control" id="created_on " {...register('created_on ')}/>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="updated_on" className="form-label">updated_on</label>
            <input type="text" className="form-control" id="updated_on" {...register('updated_onr')}/>
          </div>
          <div className="col-8">
            <label htmlFor="address_details" className="form-label">address_details</label>
            <input type="text" className="form-control" id="address_details" {...register('address_details')}/>
          </div>
          <div className="col-8">
            <label htmlFor="contact_details" className="form-label">contact_details</label>
            <input type="text" className="form-control" id="contact_details" {...register('contact_details')}/>
          </div>
          
          
          <div className="col-12">
            <button type="submit" className="btn btn-success me-3">Add Personal Details</button>
            <button type="reset" className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
  </div>

  )
}

export default Add_Personal