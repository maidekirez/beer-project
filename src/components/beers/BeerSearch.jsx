import React, { useContext, useState,useEffect } from "react";
import { BeerContext } from "../../contexts/BeerContextsProvider";


export default function BeerSearch() {
  const { beerData, setBeerData } = useContext(BeerContext);
  const [searchValue, setSearchValue] = useState("");

useEffect(()=>{
  
  const newData = beerData.filter((post) =>
    post.name.toLowerCase().includes(searchValue)
  );
  setBeerData(newData);



},[searchValue])

  
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mb-3">
                <form>
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="search beers by name"
                    id="search"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type="reset"
                    className="btn btn-warning mx-1 mt-3"
                    value="Reset"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
