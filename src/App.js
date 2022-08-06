import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from './components/Search';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Search countries={countries} />
    </div>
  );
}

export default App;
