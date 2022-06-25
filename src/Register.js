import React, { useState } from "react";
import Home from "./Home";
import { Switch,Route, useHistory } from "react-router-dom";
import "./App.css";
const Register=()=>{
    //const[username,setUserName] =useState();
    //const[pas,setP] =useState();
    // const[cnf,setcnf] =useState();
    // const[email,setEmail] =useState();
    const[user,setUser] = useState({
        username:"",email:"",fname :"",lname:"",city:"",password:"",confirmpassword:""
    });
  
    let name,value;
    const handlechange=(e)=>{
        name=e.target.name;
        value=e.target.value;

         setUser({...user,[name]:value});
    }
    const pass=()=>{
        if(!user.username){
            alert("fill username")
        }
        if(!user.email){
            alert("fill email")
        }
        if(!user.fname){
            alert("fill first Name")
        }
        if(!user.lname){
            alert("fill Last Name")
        }
        if(user.password!=user.confirmpassword){
            alert("passowrd mismatch");
        }
        else{
            hist.push("/");
            setUser("");
        }
    }

    // const emailchange=(e)=>{
    //   setEmail(e.target.value);
    // }

    // const namechange=(e)=>{
    //     setUserName(e.target.value);
    // }

    // const pass =(e)=>{
    //     setP(e.target.value);
    // }
    // const passc =(e)=>{
    //     setcnf(e.target.value);
    // }
    
    let hist = useHistory();
    // const gohome=()=>{
        
    //     if((username && email) && (pas==cnf )){
    //         // alert("Registration Succesfull");
    //         hist.push("/");
    //     }
    //     else{
    //         alert("registration unsuccesfull :- Please fill all Fields or Fill Same Password ");
    //     }

    //         }
    return(
    <>  
<h1 class="Rheader">Registration Form</h1>
<div class="registrationtop">

<div class="registration">

<div class="input-group mb-3">
     
<span class="input-group-text" id="basic-addon1">@</span>
<input type="text" 
       class="form-control" 
       placeholder="Username" 
       aria-label="Username" 
       aria-describedby="basic-addon1"
       onChange={handlechange}
      value={user.username}
       name="username"
       />
</div>

<div class="input-group mb-3">
<input type="email" 
       class="form-control" 
       placeholder="Recipient's Email" 
       onChange={handlechange}
       value={user.email}
       name="email"  
       aria-label="Recipient's username" 
       aria-describedby="basic-addon2"

       />
<span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

 <label for="basic-url" class="form-label">Your Full Name</label> 
 <div class="input-group mb-3">
<span class="input-group-text" id="basic-addon3">First Name</span>
<input type="text" 
       onChange={handlechange}
       value={user.fname}
       name="fname" 
       class="form-control" 
       id="basic-url" 
       aria-describedby="basic-addon3"
        />
<span class="input-group-text" id="basic-addon3">Last Name</span>
<input type="text" 
       onChange={handlechange}
       value={user.lname}
       name="lname" 
       class="form-control" 
       id="basic-url" 
       aria-describedby="basic-addon3"
       />
</div>

<div class="input-group mb-3">
<span class="input-group-text">City</span>
<input type="text" 
       class="form-control" 
       aria-label="Amount (to the nearest dollar)"
       onChange={handlechange}
       value={user.city}
       name="city" 
       />
<span class="input-group-text">Must be India's </span>
<h6></h6>
</div>

<div class="input-group mb-3">
<span class="input-group-text">Password</span>
<input type="password" 
       class="form-control" 
       onChange={handlechange}
       value={user.password}
       name="password" 
       older="Password" 
       aria-label="Username"
       />
<span class="input-group-text">ConfirmPassowrd</span>
<input type="password" 
       class="form-control" 
       onChange={handlechange}
       value={user.confirmpassword}
       name="confirmpassword" 
       holder="confirm Password" 
       aria-label="Server"
       />
</div>

<div class="input-group">
 
<button type="submit" 
        class="btn btn-primary" 
        style={{marginBottom:"1px" ,marginLeft:"1px"}}
        onClick={pass}
        >Login</button> 
 
</div>
</div>
</div> 
    </>
    )
}
export default Register;

