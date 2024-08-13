import './WeatherForecast.css';

const WeatherForecasts = (props) => {
    const { weather } = props
    return (
        <div className="weather">
            <h2>Day of the Week</h2>
            <img src="" alt="" />
            <p><span>conditions: </span>{weather.conditions}</p>
            <p><span>time: </span>{weather.time}</p>
        </div>

    )
}


export default WeatherForecasts;
