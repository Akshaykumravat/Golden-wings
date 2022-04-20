import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import './Book.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Book = () => {
  const history=useHistory()
  const[record,setRecord]=useState({
    trip:"",
    flying_from:"",
    flying_to:"",
    departure:"",
    returning:"",
    adult:"",
    child:""
  });

  // const { username,email,password } = record;
  const onChange=(e)=>{
    setRecord({...record,[e.target.name]:e.target.value})
  }

  const onSubmit =  (event) =>{
    event.preventDefault();
    // let body = {
    //   username:record.username,email:record.email,password:record.password
    // }
    // console.log(body,"Akshay")
    axios.post('http://localhost:5006/tickets',record).then(resp => {
    console.log(resp.data);
    window.alert("Ticket booked !!")
    history.push('/')
}).catch(error => {
    console.log(error);
});
  };
  // const getInitialState = () => {
  //   const value = "Orange";
  //   return value;
  // };

  // const [value, setValue] = useState(getInitialState);

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={onSubmit}>
            <div className='booking-form-box'>
              <div className='radio-btn'>
               <input  type='radio'className='btn' name='trip' value="round trip" onChange={e => onChange(e)}/>ROUND TRIP
               <input  type='radio'className='btn' name='trip' value="one way" onChange={e => onChange(e)}/>ONE WAY
               <input  type='radio'className='btn' name='trip' value="multi city" onChange={e => onChange(e)}/>MULTI CITY
              </div>
              
              <div className='booking-form'>
                <label>Flying from</label>
                <input type='text' name="flying_from" className='control'placeholder='cityor airport' onChange={e => onChange(e)}/>
                <label>Flying to</label>
                <input type='text' name="flying_to" className='control'placeholder='cityor airport' onChange={e => onChange(e)}/>

                <div className='input-grp'>
                <label>Departure</label>
                <input type='date' name="departure" className='control select-date' onChange={e => onChange(e)}/>
                </div>

                <div className='input-grp'>
                <label>returning</label>
                <input type='date' name="returning" className='control select-date' onChange={e => onChange(e)}/>
                </div>

                <div className='input-grp'>
                <label>Adult</label>
                <input type='number' name="adult" className='control'  onChange={e => onChange(e)}/>
                </div>

                <div className='input-grp'>
                <label>Child</label>
                <input type='number' name="child" className='control'  onChange={e => onChange(e)}/>
                </div>

                {/* <div className='input-grp'>
                <label>Travel class</label>
                
                 {/* <select className='input-grp' value="Economy Class" name="travel_class" onChange={e => onChange(e)}>
            
                    <option className='control'  value='Economy Class' selected>Economy class</option>
                    <option className='control'  value='Business class' >Business class</option> 
                    
                
                
                </select> */}
                
                {/* </div>  */}

                <div className='grp'>
                  <button type='submit'className='btn btn primary flight'>
                    Book ticket
                  </button>
                </div>

              </div>
              
              
              </div>  
           </form>
        </div>
      </section>
    </>
  )
}

export default Book
