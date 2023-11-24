import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import Add_Service_provider from './Add_Service_provider';

function Add_Room_category() {

    const{register, handleSubmit  ,formState: {errors}, watch} = useForm();

    const Navigate = useNavigate();
  
    function saveData(data){
      axios.post('http://localhost:5000/users',data);
      Navigate('/service/add');
  
    }

  return (
    <div>
    {/* <Add_Service_provider/> */}
      <div className='container'>
        <form  onSubmit={handleSubmit(saveData)} className="row g-3" >
          
          <div className="col-md-8">
            <label htmlFor="room_category_id" className="form-label">room_category_id</label>
            <input type="number" className="form-control" id="room_category_id" 
            {...register('room_category_id', {
              required:{
                  value:true,
                  message:"This field is required"
              }, min:{
                  value:1,
                  message:"Id should greater than or equal to 1"
              }
          }) } />
          {errors.room_category_id && <p className='text-danger'> {errors.room_category_id.message} </p> } 
          </div>
          
          <div className="col-md-8">
            <label htmlFor="room_category_name" className="form-label">room_category_name</label>
            {/* <input type="text" className="form-control" id="room_category_name" {...register('room_category_name')}/> */}
            <div className='form-check'>
                        <label className='form-check-label' htmlFor='ac'> AC </label>
                        <input className='form-check-input' type='checkbox' name='room_category_name[]' value={'ac'} id='ac' {...register('room_category_name') } />
                    </div>

                    <div className='form-check'>
                        <label className='form-check-label' htmlFor='non_ac'> Non_AC</label>
                        <input className='form-check-input' type='checkbox' name='room_category_name[]' value={'non_ac'} id='non_ac' {...register('room_category_name') } />
                    </div>
          </div>
          <div className="col-md-8">
            <label htmlhtmlFor="service_provider" className="form-label">service_provider</label>
            <input type="text" className="form-control" id="service_provider" {...register('service_provider')}/>
          </div>
          
          <div className="col-12">
            <input type="submit" className="btn btn-primary" value="Submit & Next"/>
            <button type="reset" className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
  </div>

  )
}

export default Add_Room_category