import React from 'react';

const Forecast = (props)=>{
 
return (
  <div className = 'forecast'>
 <div className = 'content'>
  {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt ="weather icon" />}
    {props.country && props.city && <p className = 'forecastPara'><span>{props.city},{props.country}</span></p>}
    {props.temperature && <p className = 'forecastPara'>Temperature: <span>{Math.round(props.temperature)}°F</span></p>}
    {props.feels && <p className = 'forecastPara'>Feels Like: <span>{Math.round(props.feels)}°F</span></p>}
    {props.pressure && <p className = 'forecastPara'>Pressure: <span>{props.pressure}</span></p>}
    {props.humidity && <p className = 'forecastPara'>Humidity: <span>{props.humidity}%</span></p>}
    {props.wind && <p className = 'forecastPara'>Wind: <span>{Math.round(props.wind)}mph</span></p>}
    {props.description && <p className='lastPara forecastPara'>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
    </div>
    </div>
)
}
export default Forecast