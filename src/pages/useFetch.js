import {useState,useEffect} from "react";
const useFetch = (res) => {

    var[data,setdata]=useState(null)
    var[pending,setpending]=useState(true);
    let[err,seterror]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(res) 
            .then((resp)=>{if(resp.ok===false) {
                throw Error("data that you are trying is not here");}
                return resp.json();
            })
       .then((resp)=>{setdata(resp); setpending(false);})
       .catch((resp)=>{seterror(resp.message);setpending(false);})
        },2000)
       },[])
    return ({data,pending,err});
}

export default useFetch;