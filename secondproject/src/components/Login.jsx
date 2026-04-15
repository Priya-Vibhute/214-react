import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { LoginContext } from '../context/LoginContext';

function Login() {

  const {login}=useContext(LoginContext);

  const {register,handleSubmit,formState:{errors}}=useForm();

  const submitHandler=(data)=>{
    console.log(data);
    login(data)
    
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
           <label htmlFor="">email</label>
           <input type="email" {...register('email',{required:'email is required'})}/>
           {errors.email && <small className='text-danger'>{errors.email.message}</small>}
           <br />

           <label htmlFor="">password</label>
           <input type="password" {...register('password',{required:'password is required'})} />
           {errors.password && <small  className='text-danger'>{errors.password.message}</small>}
           <br />

           <input type="submit" />
      </form>
    </div>
  )
}

export default Login