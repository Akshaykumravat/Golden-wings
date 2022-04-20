import {React,useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [allUser,setAllUser]=useState([])
  const navigate=useHistory()
  
  const [record,setRecord]=useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    async function getUser(){
      
      const result= await axios.get(`http://localhost:5006/data`)
      setAllUser(result.data)
      console.log(result.data)
    }
    getUser()
  },[])
  

  const onChange=(e)=>{
    setRecord({ ...record, [e.target.name]: e.target.value });
  }
  const onSubmit=(event)=>{
    event.preventDefault();
   const userData = allUser.find((users) => users.email === record.email);
    console.log(userData)
    if (userData) {
         
      if (userData.password !== record.password) {
        // Invalid password
        window.alert("Invalid password")
      } else {
        window.alert("Login succesfull !!")
        
        navigate.push("/")
      }
    } else {
      // Username not found
      window.alert("Invalid username")
    }
    console.log(userData)
  }
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={e => onSubmit(e)}>
            <input
              type='email' name='email' id='email' placeholder='Your email address' onChange={e=>onChange(e)} required autocomplete="off"/>
            <input type='password' name='password' id='password'  placeholder='password' onChange={e=>onChange(e)} />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
