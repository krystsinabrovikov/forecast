import React from 'react';
import './App.css';
import Heading from './components/heading';
import Form from "./components/form"
import Forecast from "./components/forecast"
import Footer from "./components/footer"

const key = process.env.REACT_APP_API_KEY

class App extends React.Component {
  state = {
    date:"",
    temperature: "",
    feels:"",
    city: "",
    country: "",
    wind:"",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }
  getWeather = async (e)=> {
    const form = e.target;
    const city = e.target.elements.city.value;
    const country =e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${key}`)

    const response =await api_call.json();
    console.log(response)
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        feels: response.main.feels_like,
        city: response.name,
        country:response.sys.country,
        humidity: response.main.humidity,
        pressure:response.main.pressure,
        wind:response.wind.speed,
        icon: response.weather[0].icon,
        description:response.weather[0].description,
        error:'',
        })
      
    }else{
      this.setState({
        error:'Please fill out input fields...'
      })
    }
  form.reset()
  }
render(){
    return(
      <div>
      <Heading />
      <Form loadWeather={this.getWeather}/>
      <Forecast 
      date = {this.date}
      temperature ={this.state.temperature}
      feels = {this.state.feels}
      city ={this.state.city}
      country ={this.state.country}
      humidity ={this.state.humidity}
      pressure={this.state.pressure}
      wind = {this.state.wind}
      icon ={this.state.icon}
      description ={this.state.description}
      error ={this.state.error}
    />
    <Footer />
        </div>
    )
  }
}

export default App;


