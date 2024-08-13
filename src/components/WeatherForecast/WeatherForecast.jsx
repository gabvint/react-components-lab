import './WeatherForecast.css';
import WeatherData from './WeatherData.jsx'
import WeatherIcon from './WeatherIcon.jsx'

const WeatherForecasts = ({ forecasts }) => {
  
    return (
        <section>
            {forecasts.map((weather, index) => (
                <div className="weather" key={index}>

                
                    < WeatherIcon  img={weather.img} imgAlt={weather.imgAlt} />
                    < WeatherData day={weather.day} conditions={weather.conditions} time={weather.time} />
                </div>
            ))}

        </section>

    )
}


export default WeatherForecasts;
