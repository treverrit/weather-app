import { useState } from 'react'
import './App.css'
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import { weatherApiKey, weatherApiUrl } from './api'
import Forecast from './components/forecast/Forecast'

function App() {
  const [weather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    const weatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)
    const forecastFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastresponse = await response[1].json()

        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastresponse})
      })
      .catch((err) => console.log(err))
  }

  console.log(weather)
  console.log(forecast)

  return (
    <div className='container'>
      <Search onSearchChange={onSearchChange}/>
      {weather && <CurrentWeather data={weather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default App
