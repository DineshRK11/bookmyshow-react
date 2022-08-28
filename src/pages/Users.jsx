import React, { useEffect, useState } from "react";
import "./user.css"
import axios from "axios"
export default function Users() 
{ 
    let [list,setList]=useState({})
    let[id,setId]=useState(1)
    let[button,setButton]=useState(1)
    useEffect(()=>{
        axios.get(`https://api.github.com/users/${button}`)
        .then((resp)=>{
            setList(resp.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[id])
    return(
        <div id="user">
            <input id="inpuser" onChange={(e)=>{setId(e.target.value)}} placeholder="search for id" type="text" />
            <button id="userbtn" onClick={()=>{setId(setButton(id))}}>submit</button><br />
            <div id="user1">
            
            <img id="userimg" src={list.avatar_url} alt="" />
            
            <div id="id">
            <h1><u>Employee Details</u></h1><h2 id="hh4">ID : {list.id}</h2>
            <h2>TYPE : {list.type}</h2>
            <h2>USER : {list.name}</h2></div></div>
        </div>
    )
}

