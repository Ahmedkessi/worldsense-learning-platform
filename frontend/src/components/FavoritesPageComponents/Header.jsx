import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Search, XCircle } from "lucide-react";


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
      <div className="flex items-center relative">
            <Search className="max-h-[20px] max-w-[20px] absolute ml-2 cursor-pointer" />
            <input value={search} className="border border-b-gray-500 outline-0 text-[0.8rem] w-full py-1 rounded-[4px] px-3 pl-8 pr-8 bg-black" type="text" placeholder="Search country..."
                onChange={(e)=> setSearch(()=> e.target.value)} />
            {search.length > 0 && <XCircle className="max-h-[20px] max-w-[20px] absolute ml-2 right-2 cursor-pointer" 
            onClick={()=> setSearch(``)}/>}
      </div>

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