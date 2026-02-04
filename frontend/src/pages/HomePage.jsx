import "./styles.css";
import SearchCountry from "../components/HomePageComponents/SearchCountry";
import Map from "../components/HomePageComponents/Map";
import CountryInfo from "../components/HomePageComponents/CountryInfo";
import CountryWeather from "../components/HomePageComponents/CountryWeather";
import CountryVideo from "../components/HomePageComponents/CountryVideo";
import Form from "../components/HomePageComponents/Form";
import { useLocation } from "../hooks/LocationContext";
import CountryImages from "../components/HomePageComponents/CountryImages";
import AppNavigation from "../components/UI/AppNavigation";
import LoadingPageSpinner from "../components/UI/LoadingPageSpinner";
import Error from "../components/UI/Error";
import SearchedBox from "../components/HomePageComponents/SearchedBox";
import { useState } from "react";



function HomePage() {
  const {error, isLoading, searchCountries} = useLocation();
  const [isSearching, setIsSearching] = useState(``)
  const [val, setVal] = useState(``)
  console.log(searchCountries);
  console.log(error);

  return (
    <>
    <AppNavigation />
    <div className="page">
     {/*<h3>Home</h3>*/}
     
      <SearchCountry val={val} setVal={setVal} setIsSearching={setIsSearching} />
      {isSearching.length > 0 && <SearchedBox setVal={setVal} setIsSearching={setIsSearching} countries={searchCountries} isLoading={isLoading} isSearching={isSearching} />}

      {isLoading && !error  ?
        <LoadingPageSpinner msg={`Loading data...`} type={`full`} />
    :
    
      <>
        
        
        {error ?
          <Error type={`full`} msg={error} />
        :
        <>
          <div className="map-wrapper">
           <Map />
          </div>
          <CountryInfo />
          <CountryWeather />
          <CountryImages />
          <CountryVideo />
        </>
        }
        {!error && <Form />}
      </>
    }
    </div>
    </>
  );
}

export default HomePage;
