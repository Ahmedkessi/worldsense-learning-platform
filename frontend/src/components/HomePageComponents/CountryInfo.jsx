import "./styles.css";
import { useLocation } from "../../hooks/LocationContext";
import LoadingPageSpinner from "../UI/LoadingPageSpinner";
import Error from "../UI/Error";
import formatPopulation from "../../utils/formatPopulation";
import { MapPin } from "lucide-react";


function CountryInfo() {
  const { country, countryDescription, isLoading, error } = useLocation();
  console.log(country, error, isLoading);
  return (
    <div className="country-info">
      <h4>Country Information 📜</h4>
      {error ? <Error msg={error} type="full" /> :

        (isLoading ? (
          <LoadingPageSpinner type="small" msg={`Loading country information...`} />
        ) : (
          <Country
            data={country}
            description={countryDescription}
          />
        ))}
    </div>
  );
}

export default CountryInfo;

function Country({ data, description }) {
  const currencies = data?.currencies && Object.values(data?.currencies)[0]?.name || null;
  const languagesString = data?.languages && Object.values(data?.languages).join(", ") || null;

  return (
    <>
      <div className="info">
        <div className="info-top">
            <img className="img" src={data?.flags?.png || `#`} alt={data?.flags?.alt || data?.name?.common || `#`} />
            <div>
              <p className="t-name">{data?.name?.common}</p>
              <p className="t-map"><MapPin /> {data?.continents[0] || ``}</p>
            </div>
        </div>

        <div className="info-middle">
          <p className="desc">
            {description}
          </p>
        </div>

        <div className="info-bottom">
            {data?.capital && 
              <p>
                 <span className="b-title">Capital</span> <span>{data?.capital}</span>
              </p>
            }

            <p>
               <span className="b-title">Population</span> <span>{formatPopulation(data?.population)}</span>
            </p>

            {
              languagesString && 
                <p>
                  <span className="b-title">Languages</span> <span>{languagesString}</span>
                </p>
            }
            {currencies &&
                <p>
                  <span className="b-title">Currency</span> <span>{currencies}</span>
                </p>
            }

        </div>        
      </div>
    </>
  );
}