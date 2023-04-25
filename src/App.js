import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
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
        
        
  
        
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image=""
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brew.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </div>
      
  );
}

}
export default App;
