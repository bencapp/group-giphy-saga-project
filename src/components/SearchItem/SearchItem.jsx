import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function SearchItem({ gif }) {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: gif.url });
  };

  return (
    <Box>
      <div className="gif-container">
        <img></img>
      </div>
      <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
    </Box>
  );
}

export default SearchItem;
