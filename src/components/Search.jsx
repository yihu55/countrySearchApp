import React,{useState} from 'react'
import { useEffect } from 'react';
import { CountryDetail } from './CountryDetail';
import Weather from './Weather';




export function Search({countries}) {

  const [search,setSearch]=useState('')
  const [country,setCountry]=useState(null)
 
  let filteredCountries;
  
  filteredCountries=countries.filter(country=>country.name.common.toLowerCase().includes(search.toLowerCase()))

  if(search===''){
    filteredCountries=[]
  }
 // let country;
useEffect(()=>{
  if(filteredCountries.length===1){
    //country=filteredCountries
    console.log('typeof filteredCountries', typeof filteredCountries)
    setCountry(filteredCountries)
    
 }
},[search])
  

  // function renderDetail(countryName){
  
  //   console.log(countryName)
  //    //country=countryName
  // }
  return (
    <>

    <form>
        <label>find countries</label>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <span>{filteredCountries.length>10 ? 'Too many matches, please narrow down searching': ''}</span>
    </form>
        {
          filteredCountries.map((country,index)=>{
            return <div key={index}>
            <p style={{display:'inline-block'}}>{country.name.common}</p>
           <button onClick={()=>{
            console.log('country',typeof country) 
            setCountry([country])}} type='submit'>show</button>
            </div>
          })
        
        }
          <CountryDetail country={country}/>
     
    </>
  )
}