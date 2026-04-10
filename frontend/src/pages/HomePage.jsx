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
  const {error, isLoading, searchCountries, defaultFirst} = useLocation();
  const [isSearching, setIsSearching] = useState(``)
  const [val, setVal] = useState(``);

  console.log(Boolean(error), isLoading, defaultFirst)
  console.log(error)


  return (
    <>
    <AppNavigation />
    <div className="page">
     {/*<h3>Home</h3>*/}
     <br />
      <SearchCountry val={val} setVal={setVal} setIsSearching={setIsSearching} />
      {isSearching.length > 0 && <SearchedBox setVal={setVal} setIsSearching={setIsSearching} countries={searchCountries} isLoading={isLoading} isSearching={isSearching} />}

      <div className={`map-wrapper ${isLoading} ${error !== ""} `} >
            <Map />
        </div>



      {isLoading && !error  ?
        <LoadingPageSpinner msg={`Loading data...`} type={`full`} />
    :
    
      <>
        
        
        {Boolean(error) && defaultFirst || Boolean(error) ?
          <Error type={`full`} msg={error} />
        :
        <>
          
          {
            !error && !isLoading && !defaultFirst && 
            <>
              <CountryInfo />
              <CountryWeather />
              <CountryImages />
              <CountryVideo />
             </>
          }
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
