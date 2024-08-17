
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Update() {
  const {id} = useParams();
const navigate = useNavigate();
  const intialValues = {
    name:"",
    email:"",
    dob:"",
    address:"",
    password:"",
    cPassword:""
}

  const [getForm, setGetForm] = useState(intialValues);

useEffect(()=>{
    try {
      const fetchData = async() =>{
        const userData = await axios.get("http://localhost:8000/api/v1/user/getUsers/"+id);
        setGetForm(userData.data.userData);
      }
      fetchData();
    } catch (error) {
      console.log(error, "in fetch update");
    }
},[id]);

const handleChange = (e) =>{
  const {name, value} = e.target;
  setGetForm((prevData) => ({
    ...prevData,
    [name]: value
  }));
}

const handleSubmit = async(e)=>{
  e.preventDefault();

 try {
   await axios.put("http://localhost:8000/api/v1/user/getUsers/"+id, getForm)
                      .then(res => console.log(res.data))
 
   console.log("data updated")

  navigate("/read");
 } catch (error) {
  console.log(error, "in handle submit of update code")
 }
}
  return (
   <>
   <h1>Update here</h1>
            <br></br>

            <div className='formArea' >


                <form onSubmit={handleSubmit} >

                    <label>
                        Name:
                        <input type='text' name='name'
                        value={getForm.name} 
                        onChange={handleChange}/>

                     
                    </label>

                    <label>
                        Email:
                        <input type='text' name='email'
                         value={getForm.email} 
                         onChange={handleChange} />
                         
                    </label>

                    <label>
                        DOB:
                        <input type='date' name='dob'
                         value={getForm.date} 
                         onChange={handleChange} />
                         
                    </label>

                    <label>
                        Address:
                        <input type='textArea' name='address' 
                         value={getForm.address} 
                         onChange={handleChange}/>
                         
                    </label>

                    <label>
                        Password:
                        <input type='text' name='password' 
                         value={getForm.password} 
                         onChange={handleChange}/>
                         
                    </label>

                    <label>
                        Confirm Password:
                        <input type='text' name='cPassword' 
                         value={getForm.cPassword} 
                         onChange={handleChange}/>
                         
                    </label>

        <button>Submit</button>

                </form>
            </div>
   </>
  )
}

export default Update