import "./styles.css";
import SearchCountry from "../components/HomePageComponents/SearchCountry";
import Map from "../components/HomePageComponents/Map";
import CountryInfo from "../components/HomePageComponents/CountryInfo";
import CountryWeather from "../components/HomePageComponents/CountryWeather";
import CountryVideo from "../components/HomePageComponents/CountryVideo";
import Form from "../components/HomePageComponents/Form";
import { useLocation } from "../hooks/LocationContext";
import CountryImages from "../components/HomePageComponents/CountryImages";
import AppNavigation from "../components/UIComponents/AppNavigation";
import LoadingPageSpinner from "../components/UIComponents/LoadingPageSpinner";



function HomePage() {
  const {error} = useLocation();

  return (
    <>
    <AppNavigation />
    <div className="page">
      <h3>Home</h3>
      <SearchCountry />
      {error ?
        <LoadingPageSpinner msg={`loading...`} type={`full`} />
    :
    
      <>
        
        <div className="map-wrapper">
        <Map />
        </div>
        <CountryInfo />
        <CountryWeather />
        <CountryImages />
        <CountryVideo />
        {!error && <Form />}
      </>
    }
    </div>
    </>
  );
}

export default HomePage;
