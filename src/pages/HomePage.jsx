import "./styles.css";
import SearchCountry from "../components/HomePageComponents/SearchCountry";
import Map from "../components/HomePageComponents/Map";
import CountryInfo from "../components/HomePageComponents/CountryInfo";
import CountryWeather from "../components/HomePageComponents/CountryWeather";
import Form from "../components/HomePageComponents/Form";
import { useLocation } from "../hooks/LocationContext";
import CountryImages from "../components/HomePageComponents/CountryImages";
import AppNavigation from "../components/UIComponents/AppNavigation";


function HomePage() {
  const {error} = useLocation();

  return (
    <>
    <AppNavigation />
    <div className="page">
      <h3>Home</h3>

      <>
        <SearchCountry />
        <div className="map-wrapper">
        <Map />
        </div>
        <CountryInfo />
        <CountryWeather />
        <CountryImages />
        {!error && <Form />}
      </>
    </div>
    </>
  );
}

export default HomePage;
