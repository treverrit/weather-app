import React from 'react'
import images from '../../assets/assets'

import './currentWeather.css'

function CurrentWeather({data}) {
  return (
    <div className='weather'>

      <div className="top">
        <div className="description">
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img src={images[`${data.weather[0].icon}`]} alt="weather" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temperature">{`${Math.round(data.main.temp)}°C`}</p>
        <div className="details">
          <p className="stathead">Details</p>
          <div className="detail-row">
            <span className="detail-label">Feels Like</span>
            <span className="stat-value">{`${Math.round(data.main.feels_like)}°C`}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Wind</span>
            <span className="stat-value">{`${Math.round(data.wind.speed)} m/s`}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Humidity</span>
            <span className="stat-value">{`${data.main.humidity}%`}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Pressure</span>
            <span className="stat-value">{`${data.main.pressure}hP`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
