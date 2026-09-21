import axios from "axios";

const API_KEY = "0c232ec3eb7a4488a3990702262109";

async function getWeather(city) {
  const url = "https://api.weatherapi.com/v1/current.json";
  try {
    const response = await axios.get(url, {
      params: { key: API_KEY, q: city },
    });

    const data = response.data;

    console.log(`Current temperature in ${data.location.name} is ${data.current.temp_c}°C`);
    console.log(`Weather condition: ${data.current.condition.text}`);

  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.data.error.message}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    process.exit(1);
  }
}

const city = process.argv.slice(2).join(" ");

if (!city) {
  console.error("Error: Please provide city name");
  console.error("Usage: node weather.js <city_name>");
  console.error("Example: node weather.js 'Khon Kaen'");
  console.error("Note: Use quotes for city names with spaces");
  process.exit(1);
}

getWeather(city);
