import "./styles.css";


function FlagsCard({country}) { 
  return (
        <div className="flag-box">
            <img src={country.flag} alt={country.name} />
        </div>
  );
};

export default FlagsCard;