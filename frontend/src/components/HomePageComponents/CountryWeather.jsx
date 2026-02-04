import "./styles.css";
import { useLocation } from "../../hooks/LocationContext";
import Error from "../UI/Error";
import LoadingPageSpinner from "../UI/LoadingPageSpinner";
import { useEffect, useState } from "react";

function CountryWeather() {
  const { weatherError, weatherData, isLoading } = useLocation();

  return (
    <div className="country-weather">
      <h4>Country Weather 🌡</h4>
      {weatherError &&  <Error msg={weatherError} type="small" />}

      {isLoading ? (
          <LoadingPageSpinner type="small" msg={`Loading country weather...`} />
        ) : 
         weatherData ? <Weather weatherData={weatherData} /> : <LoadingPageSpinner type="small" msg={`Loading country weather...`} /> 
        }
    </div>
  );
}

export default CountryWeather;







function Weather({ weatherData }) {
  const [todayIndexes, setTodayIndexes] = useState([]);
  const [todayHourseWeather, setTodayHourseWeather] = useState([]);
  const [todayWeather, setTodayWeather] = useState([]);
  const [tab, setTap] = useState(`temperature`);
  const [todayISO, setTodayISO] = useState(new Date().toISOString().split(`T`)[0]);
  console.log(weatherData);




  //if (!weatherData) return;
  const weatherHourly = weatherData?.hourly;
  const percentage = weatherData?.hourly_units?.relative_humidity_2 || `%`;
  const celcius = weatherData?.hourly_units?.apparent_temperature || `°C`;
  const speed = weatherData?.hourly_units?.windspeed_10m || "km/h";


  


  useWeatherEffects(
    setTodayIndexes, 
    weatherHourly, 
    todayISO, 
    todayIndexes, 
    setTodayHourseWeather, 
    todayHourseWeather, 
    setTodayWeather
  )
  const [TEMP_DESC, HUMIDITY_DESC, WIND_DESC] = useDescription()
  

  
  const todayStr = new Date().toISOString().split(`T`)[0];
  const today = new Date(todayStr);
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const nextDay = new Date(today.getTime() + i * ONE_DAY);
    return nextDay.toISOString().split(`T`)[0];
  });



  return (
    <>
      <div className="weather">
        <div className="weather--header">

          <div className="side-1">
            <p className="now">NOW</p>

            <div className="temp">
              {TEMP_DESC[todayWeather.weathercode]?.icon}
              <p>
                {todayWeather.maxTemp}{celcius}
              </p>
            </div>

            <p className="feels-mode">Feels like {todayWeather.feelsLike}{celcius}</p>
          </div>


          <div className="side-2">
            <p className="info">{TEMP_DESC[todayWeather.weathercode]?.label}</p>
            <p> Humidity: <span>{todayWeather.maxHum}{percentage}</span></p>
            <p>Wind Speed: <span>{todayWeather.maxSpeed}{speed}</span></p>
          </div>
        </div>



        <div className="weather--tabs">
          <p className={tab === `temperature` ? `temperature` : ``} onClick={()=> setTap(()=> `temperature`)}>Temperature</p>
          <p className={tab === `windSpeed` ? `windSpeed` : ``} onClick={()=> setTap(()=> `windSpeed`)}>Wind</p>
          <p className={tab === `humidity` ? `humidity` : ``} onClick={()=> setTap(()=> `humidity`)}>Humidity</p>
        </div>



        <div className="weather--main">
          {todayHourseWeather.map((today, i) => 

            <TodayHours 
              data={today} 
              key={i} 
              percentage={percentage}
              celcius={celcius}
              speed={speed}
              icon={TEMP_DESC}
              tab={tab}
              HUMIDITY_DESC={HUMIDITY_DESC}
              WIND_DESC={WIND_DESC}
             />
             
             )}
        </div>
      </div>


      <div className="boxes">
        {next7Days.map((day, i) => (

          <WeekDays
            key={i}
            day={day}
            setTodayISO={setTodayISO}
            todayISO={todayISO}
          />

        ))}
      </div>
    </>
  );
}





function WeekDays({day, setTodayISO, todayISO}) {
  const isToday = new Date().toISOString().split(`T`)[0] === day;
  function callFunc() {
    setTodayISO(prev => (prev === day ? `${day}` : day));
  }


  return (
    <div className={`${todayISO === day ? `today` : ``} box`} onClick={callFunc}>
      <p>{isToday ? `Today` : new Date(day).toDateString().split(` `)[0]}</p>
      {/*{icon[todayWeather.weathercode]?.icon}*/}
      {/*<p>{Math.max(...temperature)}/{Math.min(...temperature)}</p>*/}
    </div>
  );
}





function TodayHours({data, percentage, celcius, speed, icon, tab, HUMIDITY_DESC, WIND_DESC }) {
  const tabIs = tab === `temperature` ? celcius : (tab === `humidity` ? percentage : speed)
  const DESCRIPTION = tab === `humidity` ? HUMIDITY_DESC(data.humidity) : WIND_DESC(data.windSpeed)
  const currHour = data.hours.slice(0,2);


  return (
    <div className="day-weather">
      <p>{data[tab]}{tabIs}</p>
      {tab === `temperature` ? `${icon[data.weathercode]?.icon}` : DESCRIPTION.icon}
      <p>{currHour}{currHour >= 12 ? `PM` : `AM`}</p>
    </div>
  );
}





function useWeatherEffects(setTodayIndexes, weatherHourly, todayISO, todayIndexes, setTodayHourseWeather, todayHourseWeather, setTodayWeather) {

  useEffect(
    function () {
      setTodayIndexes(() =>
        weatherHourly?.time
          .map((t, i) => (t.startsWith(todayISO) ? i : null))
          .filter((i) => i != null)
      );
    },
    [todayISO, weatherHourly?.time, setTodayIndexes]
  );


  useEffect(
    function () {
      const data = todayIndexes?.map((i) => ({
        hours: weatherHourly.time[i]?.split(`T`)[1],
        temperature: weatherHourly.temperature_2m[i],
        humidity: weatherHourly.relative_humidity_2m[i],
        windSpeed: weatherHourly.windspeed_10m[i],
        weathercode: weatherHourly.weathercode[i],
        feelsLike: weatherHourly.apparent_temperature[i],
      }));
    
      setTodayHourseWeather(data);
    },
    [todayIndexes, weatherHourly, setTodayHourseWeather]
  );


  useEffect(
    function () {
      const temperature = todayHourseWeather.map((temp) => temp.temperature);
      const humidity = todayHourseWeather.map((hum) => hum.humidity);
      const windSpeed = todayHourseWeather.map((wind) => wind.windSpeed);
      const feelsLike = todayHourseWeather.map((feels) => feels.feelsLike);
      const weathercode = todayHourseWeather.map((code) => code.weathercode);
      
      const weatherDay = {
        maxTemp: Math.max(...temperature),
        maxHum: Math.max(...humidity),
        maxSpeed: Math.max(...windSpeed),
        feelsLike: Math.max(...feelsLike),
        weathercode: Math.max(...weathercode),
      };

      setTodayWeather(weatherDay)
    },
    [todayHourseWeather, setTodayWeather]
  );
}





function useDescription() {
    const TEMP_DESC = {
      0: { label: "Clear sky", icon: "☀️" },
      1: { label: "Mainly clear", icon: "🌤️" },
      2: { label: "Partly cloudy", icon: "⛅" },
      3: { label: "Overcast", icon: "☁️" },
      45: { label: "Fog", icon: "🌫️" },
      48: { label: "Depositing rime fog", icon: "🌫️" },
      51: { label: "Light drizzle", icon: "🌦️" },
      61: { label: "Rain", icon: "🌧️" },
      71: { label: "Snow", icon: "❄️" },
      95: { label: "Thunderstorm", icon: "⛈️" }
  };


  const HUMIDITY_DESC = (humidity) => {
    if (humidity < 30) return { label: "Dry", icon: "🏜️" };
    if (humidity < 50) return { label: "Comfortable", icon: "🙂" };
    if (humidity < 70) return { label: "Humid", icon: "💧" };
    return { label: "Very humid", icon: "💦" };
  };


  const WIND_DESC = (speed) => {
    if (speed < 5) return { label: "Calm", icon: "🍃" };
    if (speed < 15) return { label: "Breezy", icon: "🌬️" };
    if (speed < 30) return { label: "Windy", icon: "💨" };
    return { label: "Strong wind", icon: "🌪️" };
  };

  return[TEMP_DESC, HUMIDITY_DESC, WIND_DESC]
}