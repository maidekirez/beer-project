import { useContext } from "react/cjs/react.development";
import { BeerContext } from '../../contexts/BeerContextsProvider';
//debounce perform
import debounce from "lodash.debounce";

function BeerSearch() {
  const { setSearch } = useContext(BeerContext);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  return (
    <>
      <div className="search-container my-5">
        <input
          className="sbx-custom__input"
          type="text"
          onChange={debouncedOnChange}
          placeholder={" Search Beer "}
        />
        <div className="py-3">
        <button type="submit" className="btn btn-primary">
          Reset
        </button>
        </div>
      </div>
    </>
  );
}
export default BeerSearch;
