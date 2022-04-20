import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const SignUp = () => {
  const history=useHistory()
  const[record,setRecord]=useState({
    id:"+1",
    username:"",
    email:"",
    password:""
  });

   const onChange=(e)=>{
    setRecord({...record,[e.target.name]:e.target.value})
  }

  const onSubmit =  (event) =>{
    event.preventDefault();
    let body = {
      username:record.username,email:record.email,password:record.password
    }
    console.log(body,"Akshay")
    axios.post('http://localhost:5006/data',body)
    .then(resp => {
    console.log(resp.data);
    window.alert("Registration succesfull !!")
    history.push('/login')
}).catch(error => {
    console.log(error);
});
  };
   


  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'onSubmit={e => onSubmit(e)}>
            <input
              type='text'
              name='username'
              // id='username'
              placeholder='Username'
              required
              onChange={e => onChange(e)}
              autocomplete="off"
            />
            <input
              type='email'
              name='email'
              // id='email'
              placeholder='Your email address'
              required
              onChange={e => onChange(e)}
              autocomplete="off"

            />
            <input
              type='password'
              name='password'
              // id='password'
              placeholder='Choose your password'
              onChange={e => onChange(e)}
              required

            />
            <input
              type='password'
              name='password2'
              // id='password2'
              placeholder='Confirm your password'
              // onChange={event => onChange(event)}
              required
            />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
