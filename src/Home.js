
import React from "react";
import { useHistory } from "react-router-dom";
const Home=(props)=>{
    let h = useHistory();
    const logout=()=>{
        h.push("/logout");
    }
    return(
        <>
        <div ><h1>welcome {props.name} to our App</h1></div>
        <div class="butn">
        <button type="button" class="btn btn-primary" onClick={logout}>LogOut</button>
        </div>
        </>
    )
}
export default Home;