


export const validation = (values)=>{

    const errors = {};
    let isValid = true;
    const name_validation = /^[a-zA-Z\s]{3,}$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // const digit_pattern = /^\d+$/;
 
if(values.name ===""){
    errors.name = "name is required";
    isValid = false;
}else if(!name_validation.test(values.name)){
    errors.name = "more than 3 characters";
    isValid = false
};

if(values.email === ""){
    errors.email = "email is required";
    isValid= false
}else if(!email_pattern.test(values.email)){
    errors.email = "please write appropiate email";
    isValid = false;
}
if(values.address === ""){
    errors.address = "address is required";
    isValid= false
}
if(values.password === ""){
    errors.password = "password is required";
    isValid= false
}
if(values.cPassword === ""){
    errors.cPassword = "confirm password is required";
    isValid= false
} else if(values.password !== values.cPassword){
    errors.cPassword = "password do not match";
    isValid = false
}


return {errors, isValid};
}