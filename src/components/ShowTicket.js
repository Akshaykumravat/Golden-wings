import axios from "axios";
import React, { useEffect, useState } from "react";


 
const Record = (props) => (
 <tr>
   <td>{props.record.trip}</td>
   <td>{props.record.flying_from}</td>
   <td>{props.record.flying_to}</td>
   <td>{props.record.departure}</td>
   <td>{props.record.returning}</td>
   <td>{props.record.adult}</td>
   <td>{props.record.child}</td>
<td>
     
     <button className="button"
       onClick={() => {
         props.deleteRecord(props.record.id);
       }}
     >Cancel Ticket
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     await axios.get(`http://localhost:5006/tickets`).then((res)=>{
        setRecords(res.data);
        console.log(records)
     }) 
   }
 getRecords();
 return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await axios.delete(`http://localhost:5006/tickets/${id}`).then((res)=>{
       console.log(res)
   })
 
   const newRecords = records.filter((el) => el.id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record.id)}
        
       />
     );
   });
 }
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <table className="tableheader" >
       <thead>
         <tr>
           <th>Trip</th>
           <th>Flying From</th>
           <th>Flying To</th>
           <th>Departure</th>
           <th>Return</th>
           <th>Adult</th>
           <th>Child</th>
           <th>Action</th>

         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}