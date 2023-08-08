// utils/meteoConceptAPI.js
const API_KEY = 'b60652c20b4bd70143f7201316ebb59b904f0e2754d5d6d273f242e08014e89e';
const BASE_URL = 'https://api.meteo-concept.com/api/';

export async function getWeatherData(cityName) {

  // const url = "`${BASE_URL}weather?token=${API_KEY}&insee=35238`);"
  const url = "https://api.meteo-concept.com/api/forecast/daily?token=b60652c20b4bd70143f7201316ebb59b904f0e2754d5d6d273f242e08014e89e&insee=66016"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}





