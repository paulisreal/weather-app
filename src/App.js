import "./App.css";
import Input from "./components/Input";
import { BsCloudSunFill} from 'react-icons/bs';


function App() {
  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div className="weather_location">
          <h3>Weather in Tokyo</h3>
        </div>
        <div>
          <h1 className="weather_temp">12.84 °C</h1>
        </div>
        <div className="weather_cloud">
        <BsCloudSunFill /> 
        <span className="weather_condition"><h3>few clouds</h3></span>
        
        <div className="weather_description">
        <div>
          <h3>Humidity : 84%</h3>
          <h3>Wind speed: 5.66m/s</h3>
        </div>
        <div className="weather_range">
          <h3>JP</h3>
          <p className="weather_date">4/30/2022, 2:05:24 PM</p>
        
        </div>
        </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
