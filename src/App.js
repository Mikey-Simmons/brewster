import './App.css';
import * as React from 'react';



import { useEffect, useState } from 'react';
import axios from 'axios'
import {BrewCard} from "./components/BrewCard";
const  App=()=> {
  const [brews, setBrews] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchData=()=>{
      axios.get("https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3").then(
        (response)=>{setBrews(response.data)}
      
      )
    }
    fetchData();
    
    setLoading(false)
  },[])
  if(loading===true){
    return(
      <h1>Loading...</h1>
    )
  }else{


  return(

    <div className='App'>
      {brews.map((brew)=>(
        <BrewCard name={brew.name} city ={brew.city} address_1 = {brew.address_1} postal_code={brew.postal_code} state={brew.state} />
        
  
        

    ))}
    </div>
      
  );
}

}
export default App;
