import React from 'react'
import { useEffect,useState } from 'react'

export default function Weather({latlng,city}) {
  
  const [data,setData]=useState(null)
  
  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
  const REACT_APP_ICON_URL = 'https://openweathermap.org/img/wn'

  
    useEffect(()=>{
      if(latlng){
        fetch(`${REACT_APP_API_URL}lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
      })
      }
    },[latlng])
    
    
   
  return (
    
    <div>
      {data&&
      <>
       <h2>Weather in {city}</h2>
         <p>temp: {data.main.temp} celcius</p>
         <p>{data.weather[0].main}</p>
         <img src={`${REACT_APP_ICON_URL}/${data.weather[0].icon}@2x.png`} alt='weather icon'></img>
      </>
}
      
    </div>
   )
}
    