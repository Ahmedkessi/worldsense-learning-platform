import { createContext, useContext, useEffect, useState } from "react";

const locationContext = createContext();

function LocationProvider({ children }) {
  const [country, setCountry] = useState([]);
  const [countryDescription, setCountryDescription] = useState();
  const [weatherData, setWeatherData] = useState();
  const [images, setImages] = useState([])
  
  const [searchCountries, setSearchCountries] = useState([])
  const [isByTap, setIsByTap] = useState(false)

  const [location, setLocation] = useState([]);
  const [located, setlocated] = useState([]);
  const [mapLocation, setMapLocation] = useState([])
  
  const [countryName, setCountryName] = useState(``);
  const [locationMode, setLocationMode] = useState(`geo`)
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(``);
  const [weatherError, setWeatherError] = useState(``);

  const [logged, setLogged] = useState(false)


  const [queCategory, setQueCategory] = useState(`q`)
  const [queDificulity, setQueDificulity] = useState()
  const [questions, setQuestions] = useState(() => {
  const stored = localStorage.getItem("questions");
  if(stored === `undefined`) return [];
   return stored ? JSON.parse(stored) : [];
  });



  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions])
  
  
  

  /*useEffect(function(){
    setTimeout(() => {
      if(isLoading) {
        setError(`🛜 Plese check your connection network!`)
        throw new Error(`Plese check your connection network!`)
      }
    }, 1000 * 70);
  }, [isLoading])*/
  


  // Getting User Loaction and lat, lng
  useEffect(
    function () {
      console.log(`called`)
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition((pos) => {
        if (locationMode !== `geo`) return;
        setLocation(()=> [pos.coords.latitude, pos.coords.longitude]);
      });
    },
    [locationMode]
  );




  useEffect(
    function() {
        setLocation(()=> mapLocation)
    },
    [mapLocation]
  )




  // Fetching country by the name instead lat, lng
  useEffect(
    function () {
      async function fetchCountry() {
        try {
          setError(``);
          //if(location.length !== 2) throw new Error("Reverse geocoding failed");;
          const res = await fetch(
            `https://secure.geonames.org/countrySubdivisionJSON?lat=${location?.at(0)}&lng=${location?.at(1)}&username=ahmedkessi`
          );
          if (!res.ok) {
            throw new Error("Reverse geocoding failed");
          }
          
          
          const data = await res.json();
          console.log(Boolean(data?.status));
          console.log(`loaded name`, data, data?.status?.message);
          if(Boolean(data?.status) && data?.status?.message !== `error parsing parameter`) {
            setCountry(()=> []);
            throw new Error(`${data?.status?.message}. Search country mannually`)
          }
          setCountryName(() => data.countryName);
          
          
        } catch (err) {
          console.log(err);
          setError(err.message);
          setWeatherError(err.message);
        }
      }

      fetchCountry();
    },
    [location]
  );




  
// Fetching full data country with countryName
useEffect(
  function () {
    async function fetchCountry() {
      try {
        setIsLoading(true);
        console.log(`full loading`);
        if (!countryName || countryName.length === 0 || isByTap) return;

        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`
        );
        if (!res.ok) {
          throw new Error(`We couldn’t find ${countryName}. Please try again.`);
        }

        const data = await res.json();
        console.log(data);
        setSearchCountries(data)

        // Find the country object whose name.common matches exactly (case-insensitive)
        const matchedCountry = data.find(
          (c) =>
            c.name.common.trim().toLowerCase() ===
            countryName.trim().toLowerCase()
        );


        if (matchedCountry) {
          setError(``);
          setWeatherError(``);
          setCountry(matchedCountry);
          setlocated(matchedCountry.latlng);
          setIsLoading(false);
        } else {
          // No exact match found, fallback: pick the first one
          setError(`No exact match found for "${countryName}".`);
          setWeatherError(``);
          setCountry(data[0]);
          setlocated(data[0].latlng);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setWeatherError(err.message);
        setIsLoading(false);
        console.log(`loading done`);
      }
    }

    fetchCountry();
  },
  [countryName]
);





  //Getting the description of the Country.
  useEffect(
    function () {
      setIsLoading(true);
      async function fetchCountry() {
        try {
          if (countryName.length === 0) return;
          
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${country?.name?.common}`
          );
          const data = await res.json();
          setCountryDescription(data.extract);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
        }
      }

      fetchCountry();
    },
    [country?.name?.common]
  );





  //Getting the Weather of the Country.
  useEffect(
    function () {
      setIsLoading(true);
      async function fetchCountry() {
        try {
          console.log(country);
          if(country.length && isByTap) setError(``)
          setWeatherError(``)
          if (country.length === 0) return;
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${country?.latlng[0]}&longitude=${country?.latlng[1]}&timezone=auto&hourly=temperature_2m,relative_humidity_2m,windspeed_10m,windgusts_10m,weathercode,apparent_temperature`;
          const res = await fetch(url);
          if(res.ok === false) throw new Error(`Something went wrong...`)
          const data = await res.json();
          setWeatherData(data);
          setIsLoading(false);
        } catch (err) {
          setWeatherError(err.message);
        
        }
      }

      fetchCountry();
    },
    [country]
  );




  

  // Fetching Questions
  useEffect(function() {
    if (!queCategory || !queDificulity) return;
    
    async function fetchQuestions() {
      try{

        const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${queCategory}&difficulty=${queDificulity}&type=multiple`)
        const data = await res.json();
        setQuestions(()=> data.results)
      }

      catch(err) {
        console.log(err)
      }
    }

    fetchQuestions()
  }, [queDificulity, queCategory] )





  return (
    <locationContext.Provider
      value={{
        located,
        setlocated,
        setMapLocation,
        country,
        setCountry,
        isLoading,
        error,
        countryDescription,
        weatherError,
        setCountryName,
        weatherData,
        setLocationMode,
        images,
        setImages,
        logged, 
        setLogged,
        setQueCategory, 
        setQueDificulity,
        questions, 
        setQuestions,
        searchCountries,
        setIsByTap,
      }}
    >
      {children}
    </locationContext.Provider>
  );
}

export default LocationProvider;

export function useLocation() {
  const context = useContext(locationContext);
  if (context === undefined)
    throw new Error(`This conext was used outside Provider`);
  return context;
}