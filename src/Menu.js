import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Menu=()=>{
    return(
        <>
        <div style={{backgroundColor:"red"}}>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" > <NavLink to="/"  style={{textDecoration:"none",color:"CaptionText"}}>Home</NavLink></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink style={{textDecoration:"none", color:"CaptionText" }}  to="/login">Login</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/aboutus">aboutus</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/logout">Logout</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><NavLink style={{textDecoration:"none",color:"CaptionText"}} to="/Register"> Register</NavLink></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        </>
    )
    
}
export default Menu;