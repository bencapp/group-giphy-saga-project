import SearchItem from "../SearchItem/SearchItem";
import { useSelector } from "react-redux";

function SearchList() {
  const gifList = useSelector((store) => store.gifsToDisplay);
  console.log(gifList);
  return (
    <div id="search-list">
      {gifList.map((element) => (
        <SearchItem key={element.id} gif={element} />
      ))}
    </div>
  );
}

export default SearchList;
