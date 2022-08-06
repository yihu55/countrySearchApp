import React,{useState} from 'react'
import Weather from './Weather';



export function Search({countries}) {

  const [search,setSearch]=useState('')
 
  let filteredCountries;
  
  filteredCountries=countries.filter(country=>country.name.common.toLowerCase().includes(search.toLowerCase()))

  if(search===''){
    filteredCountries=[]
  }
  let country;

  if(filteredCountries.length===1){
     country=filteredCountries
  }

  return (
    <>

    <form>
        <label>find countries</label>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <span>{filteredCountries.length>10 ? 'Too many matches, please narrow down searching': ''}</span>
    </form>
        {
          filteredCountries.map((country,index)=>{
            return <p key={index}>{country.name.common}</p>
          })
        }
        {country&&
             <div>
            
          <p>capital: {country[0].capital}</p>
          <p>area: {country[0].area}</p>
          <ul>
            languages: {Object.values(country[0].languages).map((language,index)=>{
              return <li key={index}>{language}</li>
            })}
          </ul>
          <img src={country[0].flags.png} alt='flag'></img>
           <Weather latlng={country&&country[0].latlng} city={country&&country[0].capital}/>
           </div>
        }
        
     
    </>
  )
}