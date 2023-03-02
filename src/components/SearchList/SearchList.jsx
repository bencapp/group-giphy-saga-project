import SearchItem from "../SearchItem/SearchItem";
import { useSelector } from "react-redux";

function SearchList() {
  const gifList = []; //TODO: useSelector((store) => store.list);
  return (
    <div id="search-list">
      {gifList.map((element) => (
        <SearchItem key={element.id} gif={element} />
      ))}
    </div>
  );
}

export default SearchList;
