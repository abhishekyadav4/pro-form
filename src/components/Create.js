import React, { useState } from 'react'
import { validation } from './Validation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Create() {

    const navigate = useNavigate()
   const intialValues = {
        name:"",
        email:"",
        dob:"",
        address:"",
        password:"",
        cPassword:""
    }
    const [getForm, setGetForm] = useState(intialValues);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);

const handleChange = (e)=>{
    const {name, value} = e.target;
    setGetForm({...getForm, [name]: value})
}

const handleSubmit = (e)=>{

    e.preventDefault();

    
    const {errors, isValid}  = validation(getForm);

  

    if(isValid){
        axios.post("http://localhost:8000/api/v1/user/reg", getForm)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

       

        console.log("form submited", getForm);
        alert("form submitted");

        navigate('/read')
        setErrors({});
    }else{
        setErrors(errors);
        setIsFormValid(false)
    }
}   
    return (
        <>

            <h1>Sign UP here</h1>
            <br></br>

            <div className='formArea' >


                <form onSubmit={handleSubmit} >

                    <label>
                        Name:
                        <input type='text' name='name'
                        value={getForm.name} 
                        onChange={handleChange}/>

                      <p style={{color:"red"}}>
                      {
                            errors.name && <span>{errors.name}</span>
                        }
                      </p>
                    </label>

                    <label>
                        Email:
                        <input type='text' name='email'
                         value={getForm.email} 
                         onChange={handleChange} />
                         <p style={{color:"red"}}>
                            {errors.email && <span>{errors.email}</span>}
                         </p>
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
                          <p style={{color:"red"}}>
                            {errors.address && <span>{errors.address}</span>}
                         </p>
                    </label>

                    <label>
                        Password:
                        <input type='text' name='password' 
                         value={getForm.password} 
                         onChange={handleChange}/>
                          <p style={{color:"red"}}>
                            {errors.password && <span>{errors.password}</span>}
                         </p>
                    </label>

                    <label>
                        Confirm Password:
                        <input type='text' name='cPassword' 
                         value={getForm.cPassword} 
                         onChange={handleChange}/>
                          <p style={{color:"red"}}>
                            {errors.cPassword && <span>{errors.cPassword}</span>}
                         </p>
                    </label>

        <button>Submit</button>

                </form>
            </div>
        </>
    )
}

export default Create