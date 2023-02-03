import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

function App() {
  const [showTrips,setShowTrips]=useState(true); 
  const handleClick=(e)=>{
    if(showTrips)
      setShowTrips(false)
    else
      setShowTrips(true)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Show/Hide trips</button>
      {showTrips&&<TripList/>}
    </div>
  );
}

export default App;
