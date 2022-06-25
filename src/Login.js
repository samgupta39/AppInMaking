import React, { useEffect, useState } from "react";
import { useNavigate } from "react";
import { Switch,Route, useHistory } from "react-router-dom";
import "./App.css";
import Logout from "./Logout";
import Home from "./Home";
import Register from "./Register";
const Login=()=>{
  let homepage = useHistory();
  const[input,setInput]=useState({
    email:"",password:""
  });
  let name,value;
  const handle=(e)=>{
    name=e.target.name;
    value= e.target.value;

    setInput({...input,[name]:value});
  }
  const loginbtn=()=>{
    if(input.email && input.password){
      homepage.push("/");
      //alert("successfull");
    }
    else{
      alert("please fill");
    }
  }
  const Toregister =()=>{
    
    homepage.push("/Register")
  }  
    return(
        <>
              
        <div class="center" >
            <h1 class="head"> Fill the Form To Login</h1>
   <div class="container" >
  <div class="row" >
    <div class="col" >
      
    </div>
    <div class="col" >
    <div class="card" style={{
    
    }}>
  <div class="card-body" style={{backgroundColor:'skyblue'}}>
    <h5 class="card-title"><div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{textDecorationColor:'HighlightText'}}>Email address</label>
    {/* <h4>{email}</h4> */}
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" value={input.email} aria-describedby="emailHelp" onChange={handle} />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div></h5>
  <h5 class="card-title"><div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{textDecorationColor:'HighlightText'}}>Password</label>
    {/* <h4>{email}</h4> */}
    <input type="password" onChange={handle} class="form-control" name="password" value={input.password} id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div></h5>
    <p class="card-text"><div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
   <button type="submit" class="btn btn-primary"  onClick={loginbtn}>Login</button> 
  
    </p>
  </div>
  
</div>
<div class="newuser">
  <h6 class="newuserinner">New User?</h6>
  {/* <button style={{backgroundColor:"transparent", borderRadius:""}} onClick={Toregister}>Click Here To Register</button> */}
  <button type="button" class="btn btn-outline-success" style={{ marginBottom:"3px" ,marginTop:"-5px",marginLeft:"-2px"}} onClick={Toregister}>Register Here</button>
  </div>
    </div>
    
    <div class="col">
      
    </div>
    
  </div>
  
</div>  

</div>
        </>
    )
}
export default Login;