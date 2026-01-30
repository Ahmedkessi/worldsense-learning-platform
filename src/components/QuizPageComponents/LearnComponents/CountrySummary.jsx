import "./styles.css";
import formatPopulation from "../../../utils/formatPopulation";

function CountrySummary({currCountry, setCurrCountry}) {
  return (
    <main class="country-page">


    <section class="hero">
      <img class="hero-flag" src={currCountry.flag} alt="Country Flag" />
      <div class="hero-info">
        <h1>{currCountry.name}</h1>
        <p class="subtitle">{currCountry.continent} · Capital: {currCountry.capital}</p>
      </div>
    </section>


    <section class="stats">
      <div class="stat">
        <span>Population</span>
        <strong>{formatPopulation(currCountry.population)}</strong>
      </div>
      <div class="stat">
        <span>Continent</span>
        <strong>{currCountry.continent}</strong>
      </div>
      <div class="stat">
        <span>Languages</span>
        <strong>{currCountry.languages.join(`, `)}</strong>
      </div>
      <div class="stat">
        <span>Currency</span>
        <strong>{currCountry.currency}</strong>
      </div>
    </section>


    <section class="gallery">
      {currCountry.images.slice(0,3).map(src => <img src={src} />)}
    </section>


    <section class="details">
      <div class="card">
        <h4>About</h4>
        <p>
          {currCountry.countryDescription}
        </p>
      </div>

      <div class="card">
        <h4>Borders</h4>
        <p>{currCountry?.borders?.join(`, `)}</p>
      </div>

      <div class="card">
        <h4>Personal Notes</h4>
        <p>{currCountry.note}</p>
      </div>

      <div class="card">
        <h4>Visited</h4>
        <p>{currCountry.visited}</p>
      </div>

      <div class="card">
        <h4>Hope To Visit</h4>
        <p>{currCountry.hopeToVisit}</p>
      </div>

      <div class="card">
        <h4>Rated</h4>
        <p>🌟{currCountry.rating}</p>
      </div>
    </section>


    <section class="action">
      <button class="quiz-btn" onClick={(()=> setCurrCountry(null))}>Close</button>
    </section>

  </main>
  );
};

export default CountrySummary;
