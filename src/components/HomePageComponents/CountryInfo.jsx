import "./styles.css";
import { useLocation } from "../../hooks/LocationContext";
import LoadingPageSpinner from "../UIComponents/LoadingPageSpinner";
import Error from "../UIComponents/Error";
import formatPopulation from "../../utils/formatPopulation";


function CountryInfo() {
  const { country, countryDescription, isLoading, error } = useLocation();

  return (
    <div className="country-info">
      <h4>Country Information📜</h4>
      {error ? <Error msg={error} type="full" /> :

        (isLoading ? (
          <LoadingPageSpinner type="small" />
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

  const currencies = Object.values(data?.currencies)[0]?.name;
  const languagesString = Object.values(data?.languages).join(", ");
  if (!currencies || !languagesString) return;
  return (
    <>
      <div className="info">
        <div>
          <img className="img" src={data.flags.png} alt={data.flags.alt} />
          <div>
            <p>{data.name.common}</p>
            <p>Continent: {data.continents[0]}</p>
            <p>
              Capital: <span>{data.capital}</span>
            </p>
            <p>
              Population: <span>{formatPopulation(data.population)}</span>
            </p>
            <p>
              Languages: <span>{languagesString}</span>
            </p>
            <p>
              Currency: <span>{currencies}</span>
            </p>
          </div>
        </div>

        <p className="desc">
          {description}
        </p>
      </div>
    </>
  );
}