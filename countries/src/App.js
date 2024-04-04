import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        // console.log(response);
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Country Flags App</h1>
      {error && <p>Error: {error}</p>}
      <div className="country-list">
        {countries.map((country) => (
          <div key={country.cca2} className="country-item">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="flag-image"
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;