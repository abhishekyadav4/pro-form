
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Read() {

  const [users, setUsers] = useState();
  const [msg, setMsg] = useState()

  useEffect(()=>{
    async  function fetchData(){
      let result = await axios.get("http://localhost:8000/api/v1/user/getUsers");

      // console.log(result.data.message)
      // console.log(result.data.result)
      setMsg(result.data.message);

      setUsers(result.data.result)
      }

      fetchData();
  },[]);

const handleDelete = async(id)=>{
console.log(id)
let result =  await axios.delete("http://localhost:8000/api/v1/user/userDelete/"+ id)
 
 
  console.log("deleted users", result)
  window.location.reload();

}
  return (
  <>
    <h2>{msg}</h2>

<table>
    <thead>
      <tr>
      <th>name</th>
      <th>email</th>
      <th>dob</th>
      <th>address</th>
      </tr>
    </thead>

    {
      users? <tbody>

        {
          users.map((item, i)=>{
            return<tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td>{item.address}</td>
               <Link to={"/update/"+ item._id} >Update</Link>
                <button onClick={()=>handleDelete(item._id)}>Delete</button>
            </tr>
          })
        }
    
    </tbody>
       :<p>loading</p>
      
    }
   
</table>

  </>
  )
}
