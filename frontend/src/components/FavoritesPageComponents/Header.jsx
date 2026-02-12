import { useNavigate } from "react-router-dom";
import "./styles.css";


function Header({setFilter, setSort, filter, 
              sort, search, setSearch,
              filterBox, setFilterBox, sortBox, setSortBox
}) {
  const navigate = useNavigate();

  function handleFilter(value) {
    navigate()
    setFilter(()=> value); 
    setFilterBox(false)
  }

  function hanldeSort(value) {
    navigate()
    setSort(()=> value);
    setSortBox(false)
  }


  function handleFilterBox() {
    setFilterBox((filter)=> !filter)
    setSortBox(false)
  }

  function handlerSortBox() {
    setSortBox(sort => !sort)
    setFilterBox(false)
  }


  return(
    <div className="headFav">
        <input className="text-sm" type="text" placeholder="Search country name..." value={search} onChange={(e)=> setSearch(e.target.value)}/>

        <div className="selectBox">
          <div>
            <p className="output" onClick={handleFilterBox}>{filter}</p>
            {filterBox && 
            <div className="select">
              <div className="option" onClick={()=> handleFilter(`All`)}>All</div>
              <div className="option" onClick={()=> handleFilter(`Visited`)}>visited</div>
              <div className="option" onClick={()=> handleFilter(`Want to visit`)}>want to visit</div>
            </div>
            }
          </div>

          <div>
            <p className="output" onClick={handlerSortBox}>{sort[0].toUpperCase()+sort.slice(1)}</p>
            {sortBox && 
            <div className="select">
              <div className="option" onClick={()=>  hanldeSort("default")}>Default</div>
              <div className="option" onClick={()=> hanldeSort("name")} >Name</div>
              <div className="option" onClick={()=> hanldeSort("rate")}>Rate</div>
            </div>
            }
          </div>
        </div>
    </div>
  )
}

export default Header;