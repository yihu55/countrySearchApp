import React from 'react'
import Weather from './Weather'

export function CountryDetail({country}) {
    console.log(typeof country, country)
  return (
    <div>
            {country&&
             <div>
          <h1>{country[0].name.common}</h1>
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
    </div>
  )
}
