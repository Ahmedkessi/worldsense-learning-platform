import "./styles.css";
import LoadingPageSpinner from "../components/UIComponents/LoadingPageSpinner";
import { useFavourites } from "../hooks/FavoritesContext";
import { useMemo, useState } from "react";
import Header from "../components/FavoritesPageComponents/Header";
import CountryList from "../components/FavoritesPageComponents/CountryList";
import CountryInfo from "../components/FavoritesPageComponents/CountryInfo";
import AppNavigation from "../components/UIComponents/AppNavigation";
import { useDispatch } from "react-redux";
import { deleteFavCountry } from "../features/QuizSlice";

function FavouritesPage() {
  const { favouriteCountries, setFavouriteCountries } = useFavourites();
  const [info, setInfo] = useState();
  const [filter, setFilter] = useState(`All`);
  const [sort, setSort] = useState(`default`);
  const [search, setSearch] = useState(``);

  const [filterBox, setFilterBox] = useState(false);
  const [sortBox, setSortBox] = useState(false);
  const dispatch = useDispatch()
  

  function handleDelete(id) {
    setFavouriteCountries(
      favouriteCountries.filter((country) => country.id !== id)
    );
    dispatch(deleteFavCountry(id))
  }

  const show = useMemo(() => {
    let result = [...favouriteCountries];

    // FILTER
    if (filter === "Visited") {
      result = result.filter((c) => c.visited === "yes");
    }

    if (filter === "Want to visit") {
      result = result.filter((c) => c.hopeToVisit === "yes");
    }

    // SORT
    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "rate") {
      result.sort((a, b) => b.rating - a.rating);
    }

    // SEARCH
    if (search.trim().length > 0) {
      const searchTerm = search.trim().toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(searchTerm));
    }

    return result;
  }, [favouriteCountries, filter, sort, search]);

  return (
    <>
    <AppNavigation />
    <div className="page">
      <h3>Favourites</h3>
      {show.length === 0 && search.length === 0 ? (
        <LoadingPageSpinner
          type="full"
          msg="No countries saved yet. Start exploring 🌍"
        />
      ) : (
        <>
          <Header
            search={search}
            setSearch={setSearch}
            setFilter={setFilter}
            setSort={setSort}
            filter={filter}
            sort={sort}
            setInfo={setInfo}
            filterBox={filterBox}
            setFilterBox={setFilterBox}
            sortBox={sortBox}
            setSortBox={setSortBox}
          />

          {show?.map((country) => (
            <CountryList
              key={country.id}
              country={country}
              setInfo={setInfo}
              handleDelete={handleDelete}
            />
          ))}
          {info && <CountryInfo country={info} setInfo={setInfo} />}
        </>
      )}
    </div>
    </>
  );
}

export default FavouritesPage;
