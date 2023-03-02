import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchForm() {
  const dispatch = useDispatch();

  const [searchToSend, setSearchToSend] = useState("");

  function handleSearch() {
    dispatch({
      type: "FETCH_GIFS",
      payload: searchToSend,
    });
  }

  return (
    <div>
      <input
        value={searchToSend}
        onChange={(event) => {
          setSearchToSend(`${event.target.value}`);
        }}
        type="text"
        placeholder="Search"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
