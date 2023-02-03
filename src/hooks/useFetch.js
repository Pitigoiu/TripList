import { useRef } from "react";
import { useEffect, useState } from "react";

const useFetch=(url,_option)=>{
const [data,setData]=useState(null);
const [isPending,setIsPending]=useState(false);
const [error,setError]=useState(null);

//use useRef to wrap an object/array argument which is a useEffect dependency
const option=useRef(_option).current;

useEffect(()=>{
    
    const controller=new AbortController(); 
const fetchData=async()=>{
    setIsPending(true);

    try{
    const res=await fetch(url,{signal:controller.signal });
    if(!res.ok){
        throw new Error(res.status);
    }
    const json=await res.json();
    
    setIsPending(false);
    setData(json);
    setError(null);
    }catch(err){
        if(err.name==="AbortError"){
            console.log('The fetch was aborted');
        }else{
         setIsPending(false);
         setError('Could not fetch the data');
        }
    }
}
fetchData();
return ()=>{
    controller.abort();
}//clean up function
},[url,option])
    return {data,isPending,error};  
}
export default useFetch;