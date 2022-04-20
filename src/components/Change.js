import {React,useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Change = () => {
    const history=useHistory()
    const [allUser,setAllUser]=useState([])
    const [record,setRecord]=useState({
     id:"",
     username:"",
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
    //  console.log(userData.firstname)
     console.log(record)
     if (userData) {
          userData.password=record.password
          axios.put(`http://localhost:5006/data/${userData.id}`,userData)
          .then((res)=>{
              console.log(res.data)
          })
        window.alert("Password changed succesfull !!")
        history.push('/')

       } 
      else {
     
       window.alert("Invalid username")
     }

     
   }


    return (
        <>
          <section className='showcase login'>
            <div className='showcase-overlay'>
              <form className='form-control' onSubmit={e => onSubmit(e)}>
                <input
                  type='email' name='email' id='email' placeholder='Your email address' onChange={e=>onChange(e)} required autocomplete="off"/>
                <input type='password' name='password' id='password'  placeholder=' New password'onChange={e=>onChange(e)}  />
                <button type='submit'>Change password</button>
              </form>
            </div>
          </section>
        </>
      )
    }
    
    export default Change;