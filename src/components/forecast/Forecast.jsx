import React from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'
import images from '../../assets/assets'

import './forecast.css'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function Forecast({data}) {
  const day = new Date().getDay()
  const dayArray = days.slice(day, days.length).concat(days.slice(0, day))

  return (
    <div>
      <label htmlFor="" className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={images[`${item.weather[0].icon}`]} alt="weather" className="icon-small" />
                  <label className="day">{dayArray[index]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{`${Math.round(item.main.temp_min)}°C / ${Math.round(item.main.temp_max)}°C`}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{`${item.main.pressure}hP`}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{`${item.main.humidity}%`}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{`${item.clouds.all}%`}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind speed</label>
                  <label htmlFor="">{`${item.wind.speed} m/s`}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like</label>
                  <label htmlFor="">{`${Math.round(item.main.feels_like)} °C`}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Forecast
