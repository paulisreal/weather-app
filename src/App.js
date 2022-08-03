import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import {useEffect, useState} from 'react'

function App() {

  const [degree, setDegrees] = useState("")
  const [location, setLocation] = useState("")
  const [userLocation, setuserLocation] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState("")
  const [wind, setWind] = useState("")
  const [country, setCountry] = useState("")
  const [datafetched, setDataFetched] = useState(false)


  
    const fetchData = async (e) => {
      e.preventDefault()

      try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        const data = await res.data
  
  
        setDegrees(data.main.temp)
        setLocation(data.name)
        setDescription(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
        setCountry(data.sys.country)
       
        setDataFetched(true)
      }catch(err){
        console.log(err)
        alert("Please enter a valid location")
      }
   
    }

    const defaultDataFetched = async () => {
      if(!datafetched){
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        const data = await res.data
  
  
        setDegrees(data.main.temp)
        setLocation(data.name)
        setDescription(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
        setCountry(data.sys.country)
         

      }
   

    }
  useEffect(()=>{
      defaultDataFetched()
  },[])

  return (
    <div className="App">
      <div className="weather">
        <Input 
          text={(e) => setuserLocation(e.target.value)}
          submit={fetchData}
          func ={fetchData}
        />
        <div className="weather_location">
          <h3>Weather in {location}</h3>
        </div>
        
        <div className="weather_cloud">
       <span> <img className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" /></span>
        <span className="weather_condition"><h3>{description}</h3></span>
        
        <div className="weather_description">
        <div >
          <h3 className="humidity">Humidity : {humidity}%</h3>
          <h3>Wind Speed : {wind} m/s</h3>
        </div>
        <div className="weather_range">
          <h3>{country}</h3>
          <p className="weather_date">4/30/2022, 2:05:24 PM</p>
        
        </div>
        </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
