import React, { useContext, useState, useEffect } from "react";
import { BeerContext } from "../../contexts/BeerContextsProvider";


export default function BeerSearch() {
  const { beerData, setBeerData, setIsReset, setSearch, search } = useContext(BeerContext);
  const [searchValue, setSearchValue] = useState("");

  const handlerSubmit = (e) => {

    if (!searchValue) return;
    e.preventDefault();


    setSearch(searchValue)
    setSearchValue("");

  }


  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mb-3">
                <form onSubmit={handlerSubmit}>
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="search beers by name"
                    id="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}

                  />
                </form>
                <button
                  type="reset"
                  className="btn btn-warning mx-1 mt-3"
                  value="Reset"
                  onClick={() => setIsReset(true)}
                >
                  Reset
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
