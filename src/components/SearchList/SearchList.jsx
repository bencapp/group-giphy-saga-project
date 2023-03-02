import SearchItem from "../SearchItem/SearchItem";
import { useSelector } from "react-redux";

function SearchList() {
  const gifList = useSelector((store) => store.list);
  return <div id="search-list">{}</div>;
}

export default SearchList;
