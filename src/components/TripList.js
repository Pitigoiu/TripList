import { useState } from "react"
// import useFetch from "../hooks/useFetch";
import json from '../data/db.json'

export default function TripList(){
    const url=json.trips
    const [x,setX]=useState('')

    // const [url,setUrl]=useState("http://localhost:3001/trips")
    // const {data:trips,isPending,error}=useFetch(url,{type:"GET"});

   // const {data:trips,isPending,error}=useFetch(url,{type:"GET"});
    
    // useEffect(()=>{ 
    //     fetch(url).then(res=>res.json()).then(json=>setTrips(json))
    // },[url])
    // const fetchTrips=useCallback(async()=>{//stop the infinite loop of useEffect
    //     const res=await fetch(url);
    //     const json=await res.json();
    //     setTrips(json);
    // },[url])
    // useEffect(()=>{fetchTrips()},[fetchTrips]);
   // console.log(trips);
   const handleClick=(e)=>{
        if(e.currentTarget.id==="1")
            setX('1')
            else setX('2');
   }
    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {/* {isPending&&<div>Loading trips...</div>} */}
            {/* {error && <div>{error}</div>} */}
            <ul>
                {url.map(trip=>{
                    if(x==="1"&&trip.loc==='europe')
                     return(
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                    )
                    else 
                     if(x==='2')
                      return(
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                     )
                     })}
            </ul>
            <div className="filters">
                <button id="1" onClick={handleClick}>European Trips</button>
                <button id="2" onClick={handleClick}>All Trips</button>

                {/* <button onClick={()=>setUrl("http://localhost:3001/trips?loc=europe")}>European Trips</button> */}
                {/* <button onClick={()=>setUrl("http://localhost:3001/trips")}>All Trips</button> */}

            </div>
        </div>
    )
}