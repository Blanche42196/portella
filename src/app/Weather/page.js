"use client";

import { getWeatherData } from '../components/MyComponent.js';
import { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Title from '../title'

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const cityName = 'Paris'; // Set the city name to 'Paris' as the default

  useEffect(() => {
    // Fetch weather data for the specified city when the component mounts
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(cityName);
        setWeatherData(data); // error on this line
        console.log('data', data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div>

      <Navbar/>
      <Title children={"Météo"}/>

      {weatherData ? (
        <div>
          <h2>{weatherData.city.name}</h2>
          <p>Temperature: {weatherData.forecast[0].tmax}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}

  </div>
  );
}
     