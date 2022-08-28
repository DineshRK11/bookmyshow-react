import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userlogin.css"

const Userlogin = () => {
    let navigate=useNavigate()
    let [userval,setuser]=useState("")
    let [userpass,setuserpass]=useState("")

    const submitlogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:4001/Users")
        .then((resp)=>{return resp.json()})
        .then((data)=>{
            let [user]=data.filter((user)=>(user.username===userval || user.email===userval));
            if(user!=undefined && user.pass===userpass){
                alert("login successfull")
                navigate("/")
                
            }else if(user!=undefined && user.pass!==userpass){
                alert("wrong password")
            }else{
                alert("user not found")
            }
        })

    }
    return (
        <div id="uselog">
            <h1 id="useh1"> USER LOGIN</h1>
            <form onSubmit={submitlogin}>
                <input className="loginp" type="text" placeholder="username or email" value={userval} onChange={(e)=>{setuser(e.target.value)}}/><br/>
                <input className="loginp" type="password" placeholder="password" value={userpass} onChange={(e)=>{setuserpass(e.target.value)}} /><br/>
                <input className="loginp"type="Submit" value="Login" />
            </form>
        </div>
      );

}
 
export default Userlogin;
