import { useDispatch } from "react-redux";

function SearchItem({ gif }) {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: gif.url });
  };

  return (
    <>
      <div className="gif-container">
        <img src={gif.images.original.url}></img>
      </div>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </>
  );
}

export default SearchItem;
